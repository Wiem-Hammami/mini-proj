
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setCart } from "../store/CartSlice";
// import axios from "axios";

// function CartComponent() {
//   const { cartId, total, items } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const totalProducts = items.reduce((sum, item) => sum + item.qty, 0);

//   const handleCartClick = async () => {
//     if (!cartId) {
//       try {
//         const existingCart = localStorage.getItem("cart");
//         if (existingCart) {
//           const parsedCart = JSON.parse(existingCart);
//           dispatch(setCart(parsedCart));
//           navigate(`/cart/${parsedCart.cartId}`);
//           return;
//         }

//         const response = await axios.post("http://localhost:3000/carts", {
//           total: 0,
//           subTotal: 0,
//           tax: 0,
//           items: [],
//         });

//         const newCart = response.data;

//         dispatch(setCart(newCart));
//         localStorage.setItem("cart", JSON.stringify(newCart));

//         navigate(`/cart/${newCart.id}`);
//       } catch (error) {
//         console.error("Erreur lors de la création du panier :", error);
//       }
//     } else {
//       navigate(`/cart/${cartId}`);
//     }
//   };

//   return (
//     <div className="col-sm-4">
//        <div className="shopping-item" onClick={handleCartClick} style={{ cursor: "pointer" }}>
//         Cart : <span className="cart-amunt">{total.toFixed(2)} €</span>{" "}
//         <i className="fa fa-shopping-cart"></i>{" "}
//         <span className="product-count">{totalProducts}</span>
//       </div>
//     </div>
//   );
// }

// export default CartComponent;
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
