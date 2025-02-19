// const API_URL = "http://localhost:3000/products-lists";
// const API_URL_TOP_SELLERS = "http://localhost:3000/top-sellers-products";
// const API_URL_TOP_NEW = "http://localhost:3000/top-new-products";
// const TOP_SELLERS = "Top Sellers";
// const Top_New = "Top New";

// export const getProductsByCategory = async (categoryName) => {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();

//     const category = data.find(item => item.name.toLowerCase() === categoryName.toLowerCase());
//     return category && category.items ? category.items : [];
//   } catch (error) {
//     console.error("Erreur lors de la récupération des produits :", error);
//     return [];
//   }
// };

// export const getProducts = async (title) => {
//   try {
//     let url;
//     if (title === TOP_SELLERS) {
//       url = API_URL_TOP_SELLERS;
//     } else if (title === Top_New) {
//       url = API_URL_TOP_NEW;
//     }

//     if (url) {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data.slice(0, 2); 
//     } else {
//       console.error("Titre non valide");
//       return [];
//     }
//   } catch (error) {
//     console.error("Erreur lors de la récupération des produits :", error);
//     return [];
//   }
// };

// export const getAllProducts = async (title) => {
//   try {
//     let url;
//     if (title === TOP_SELLERS) {
//       url = API_URL_TOP_SELLERS;
//     } else if (title === Top_New) {
//       url = API_URL_TOP_NEW;
//     }

//     if (url) {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } else {
//       console.error("Titre non valide");
//       return [];
//     }
//   } catch (error) {
//     console.error("Erreur lors de la récupération des produits :", error);
//     return [];
//   }
// };

// export const getProductById = async (productId) => {
//   try {
//     const response = await fetch(`http://localhost:3000/products/${productId}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erreur lors de la récupération du produit :", error);
//     return null;
//   }
// };

import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/products-lists";
const API_URL_TOP_SELLERS = "http://localhost:3000/top-sellers-products";
const API_URL_TOP_NEW = "http://localhost:3000/top-new-products";
const API_URL_PRODUCTS = "http://localhost:3000/products"; // Ajouté pour récupérer les produits
const TOP_SELLERS = "Top Sellers";
const TOP_NEW = "Top New";
const RECENTLY_VIEWED = "Recently Viewed"; // 🔥 Ajouté

export const getProductsByCategory = async (categoryName) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const category = data.find(item => item.name.toLowerCase() === categoryName.toLowerCase());
    return category && category.items ? category.items : [];
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return [];
  }
};

export const getProducts = async (title) => {
  try {
    let url;
    if (title === TOP_SELLERS) {
      url = API_URL_TOP_SELLERS;
    } else if (title === TOP_NEW) {
      url = API_URL_TOP_NEW;
    } else if (title === RECENTLY_VIEWED) {
      return getRecentlyViewedProducts(); // 🔥 Ajouté
    }

    if (url) {
      const response = await fetch(url);
      const data = await response.json();
      return data.slice(0, 2);
    } else {
      console.error("Titre non valide");
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return [];
  }
};

export const getAllProducts = async (title) => {
  try {
    let url;
    if (title === TOP_SELLERS) {
      url = API_URL_TOP_SELLERS;
    } else if (title === TOP_NEW) {
      url = API_URL_TOP_NEW;
    } else if (title === RECENTLY_VIEWED) {
      return getRecentlyViewedProducts(true); // 🔥 Récupère tous les produits récemment consultés
    }

    if (url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } else {
      console.error("Titre non valide");
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return [];
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}/${productId}`);
    const data = await response.json();

    // 🔥 Ajouter l'ID du produit aux "Recently Viewed"
    addToRecentlyViewed(productId);

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit :", error);
    return null;
  }
};

/**
 * 🔥 Ajoute un produit aux "Recently Viewed" dans les cookies
 */
const addToRecentlyViewed = (productId) => {
  let viewedProducts = Cookies.get("recentlyViewed");
  viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

  // 🔥 Éviter les doublons
  if (!viewedProducts.includes(productId)) {
    viewedProducts.unshift(productId);
  }

  // 🔥 Limiter à 10 produits max pour éviter d'alourdir les cookies
  if (viewedProducts.length > 10) {
    viewedProducts.pop();
  }

  Cookies.set("recentlyViewed", JSON.stringify(viewedProducts), { expires: 7 });
};

/**
 * 🔥 Récupère les produits récemment consultés à partir des cookies
 */
const getRecentlyViewedProducts = async (getAll = false) => {
  let viewedProducts = Cookies.get("recentlyViewed");
  viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

  if (viewedProducts.length === 0) return [];

  // 🔥 Récupérer les détails des produits récemment consultés
  const productDetails = await Promise.all(viewedProducts.map(id => getProductById(id)));

  return getAll ? productDetails : productDetails.slice(0, 2); // 🔥 Limiter à 2 par défaut
};
