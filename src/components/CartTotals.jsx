
function CartTotals({ subtotal, tax, total }) {
  return (
    <div className="cart_totals">
      <h2>Cart Totals</h2>
      <table cellSpacing={0}>
        <tbody>
          <tr className="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>${subtotal.toFixed(2)}</td>
          </tr>
          <tr className="tax">
            <th>Tax (20%)</th> 
            <td>${tax.toFixed(2)}</td>
          </tr>
          <tr className="order-total">
            <th>Order Total</th>
            <td><strong>${total.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CartTotals;