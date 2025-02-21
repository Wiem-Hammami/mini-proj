
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/CartSlice.js";
import FileAriane from "./FileAriane.jsx"

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartId = useSelector((state) => state.cart.cartId); 

  const handleAddToCart = async (e) => {
    e.preventDefault();
     dispatch(addToCart(product, 1)); 
    navigate(`/cart`); 
   
  };

  const getCategoryFromImage = (imageName) => {
    const category = imageName.split("-")[0].toLowerCase();
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const category = getCategoryFromImage(product.imageName);

  return (
    <div className="col-md-8">
      <div className="product-content-right">
      <div class="product-breadcroumb">
      <FileAriane product={product} categoryName={category} />
      </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="product-images">
              <div className="product-main-img">
                <img src={`/img/produts-img/${category}/${product.imageName}`} alt={product.name} />
              </div>
              <div className="product-gallery">
                <img src="/img/product-thumb-1.jpg" alt="" />
                <img src="/img/product-thumb-2.jpg" alt="" />
                <img src="/img/product-thumb-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="product-inner">
              <h2 className="product-name">{product.name}</h2>
              <div className="product-inner-price">
                <ins>${product.price}</ins> {product.oldPrice && <del>${product.oldPrice}</del>}
              </div>
              <button className="add_to_cart_button" onClick={handleAddToCart}>
                Add to cart
              </button>
              <div className="product-inner-category">
                <h2>Product Description</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
