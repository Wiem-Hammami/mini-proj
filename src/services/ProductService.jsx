const API_URL = "http://localhost:3000/products-lists";
const API_URL_TOP_SELLERS = "http://localhost:3000/top-sellers-products";
const API_URL_TOP_NEW = "http://localhost:3000/top-new-products";
const TOP_SELLERS = "Top Sellers";
const Top_New = "Top New";

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
    } else if (title === Top_New) {
      url = API_URL_TOP_NEW;
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
    } else if (title === Top_New) {
      url = API_URL_TOP_NEW;
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
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit :", error);
    return null;
  }
};

