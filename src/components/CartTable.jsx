import React from 'react';

const CartTable = ({ cart }) => {
  return (
    <table className="shop_table">
      <thead>
        <tr>
          <th className="product-name">Product</th>
          <th className="product-total">Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item) => (
          <tr key={item.id} className="cart_item">
            <td className="product-name">
              {item.name} <strong className="product-quantity">× {item.qty}</strong>
            </td>
            <td className="product-total">
              <span className="amount">£{(item.price * item.qty).toFixed(2)}</span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="cart-subtotal">
          <th>Cart Subtotal</th>
          <td>
            <span className="amount">£{cart.subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="shipping">
          <th>Taxe (20%)</th>
          <td>
            <span className="amount">£{cart.tax.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="order-total">
          <th>Order Total</th>
          <td>
            <strong>
              <span className="amount">£{cart.total.toFixed(2)}</span>
            </strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartTable;
