import { Link } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/CartSlice";

function ShopProduct({ product, category }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartId = useSelector((state) => state.cart.cartId);

    const handleAddToCart = async (e) => {
      e.preventDefault();
       dispatch(addToCart(product, 1)); 
      navigate(`/cart/${cartId}`);
     
    };
 
  if (!product) return null;

  const { id, name, imageName, price, discountRate } = product;
  const oldPrice = discountRate ? (price * (1 - discountRate / 100)).toFixed(2) : null;

  const formatCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };

  const formattedCategory = formatCategory(category);

  return (
    <div className="single-shop-product">
      <div className="product-upper">
        <Link to={`/categories/${formattedCategory}/ProductDetails/${id}`}>
          <img src={`/img/produts-img/${formattedCategory}/${imageName}`} alt={name} />
        </Link>
      </div>

      <h2>
        <Link to={`/categories/${formattedCategory}/ProductDetails/${id}`}>{name}</Link>
      </h2>

      <div className="product-carousel-price">
        <ins>${price}</ins> {oldPrice && <del>${oldPrice}</del>}
      </div> 
 
      <div className="product-option-shop">
      <button className="add_to_cart_button" onClick={handleAddToCart}>
                Add to cart
              </button>
      </div>
    </div>
  );
}

export default ShopProduct;
