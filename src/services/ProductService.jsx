
import Cookies from "js-cookie";
import axios from 'axios';
import { setProducts } from '../store/ProductSlice';
const API_URL = "http://localhost:3000/products-lists";
const API_URL_TOP_SELLERS = "http://localhost:3000/top-sellers-products";
const API_URL_TOP_NEW = "http://localhost:3000/top-new-products";
const API_URL_PRODUCTS = "http://localhost:3000/products"; 
const TOP_SELLERS = "Top Sellers";
const TOP_NEW = "Top New";
const RECENTLY_VIEWED = "Recently Viewed"; 
const PRODUCTS_API = 'http://localhost:3000/products';

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
export const getProducts = async (title, limit = null) => {
  try {
    let url;
    if (title === TOP_SELLERS) {
      url = API_URL_TOP_SELLERS;
    } else if (title === TOP_NEW) {
      url = API_URL_TOP_NEW;
    }  else if (title === RECENTLY_VIEWED) {
             return getRecentlyViewedProducts(); 
           }else {
      console.error("Titre non valide");
      return [];
    }

    const response = await fetch(url);
    const data = await response.json();

    return limit ? data.slice(0, limit) : data; 
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return [];
  }
};


export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}/${productId}`);
    const data = await response.json();
    addToRecentlyViewed(productId);

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit :", error);
    return null;
  }
};


const addToRecentlyViewed = (productId) => {
  let viewedProducts = Cookies.get("recentlyViewed");
  viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

  if (!viewedProducts.includes(productId)) {
    viewedProducts.unshift(productId); 
  }

  if (viewedProducts.length > 10) { 
    viewedProducts.pop();
  }

  Cookies.set("recentlyViewed", JSON.stringify(viewedProducts), { expires: 7 });
};


const getRecentlyViewedProducts = async (getAll = false) => {
  let viewedProducts = Cookies.get("recentlyViewed");
  viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

  if (viewedProducts.length === 0) return [];

  const productDetails = await Promise.all(viewedProducts.map(id => getProductById(id)));

  return getAll ? productDetails : productDetails.slice(0, 3); 
};



export const getSearchedProducts = async (dispatch, productName) => {
  try {
    const response = await axios.get(PRODUCTS_API);
    const products = response.data || [];

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );

    dispatch(setProducts(filteredProducts));
  } catch (error) {
    console.error("Erreur de récupération des produits:", error);
  }
};
