
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrCreateCart } from "../store/CartSlice";

function CartComponent() {
  const { total, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalProducts = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="col-sm-4">
      <div className="shopping-item" onClick={() => dispatch(getOrCreateCart(navigate))} style={{ cursor: "pointer" }}>
        Cart : <span className="cart-amunt">{total.toFixed(2)} €</span>{" "}
        <i className="fa fa-shopping-cart"></i>{" "}
        <span className="product-count">{totalProducts}</span>
      </div>
    </div>
  );
}

export default CartComponent;
