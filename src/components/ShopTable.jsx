import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/CartSlice";

function ShopTable({ items }) {
  const dispatch = useDispatch();

  const getCategoryFromImage = (imageName) => {
    const category = imageName.split("-")[0].toLowerCase();
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div>
      <table cellSpacing={0} className="shop_table cart">
        <thead>
          <tr>
            <th className="product-remove">&nbsp;</th>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const category = getCategoryFromImage(item.imageName);
            return (
              <tr key={item.id} className="cart_item">
                <td className="product-remove">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove"
                    title="Remove this item"
                  >
                    ×
                  </button>
                </td>
                <td className="product-thumbnail"> 
                  <img
                    width={145}
                    height={145}
                    className="shop_thumbnail"
                    src={`/img/produts-img/${category}/${item.imageName}`}
                    alt={item.name}
                  />
                </td>
                <td className="product-name">{item.name}</td>
                <td className="product-price">
                  <span className="amount">${item.price.toFixed(2)}</span>
                </td>
                <td className="product-quantity">
                  <div className="quantity buttons_added">
                  <button
  className="minus"
  onClick={() => {
    if (item.qty === 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, qty: item.qty - 1 }));
    }
  }}
>
  -
</button>

<input
  type="number"
  size={4}
  className="input-text qty text"
  title="Qty"
  value={item.qty}
  min={1}
  onChange={(e) => {
    const newQty = Number(e.target.value);
    if (newQty <= 0) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, qty: newQty }));
    }
  }}
/>

                    <button
                      className="plus"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, qty: item.qty + 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="product-subtotal">
                  <span className="amount">${(item.price * item.qty).toFixed(2)}</span>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="actions" colSpan={6}>
              <Link to="/checkout">
                <button type="button" className="checkout-button button alt wc-forward">
                  Checkout
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShopTable;