
function CartSummary(){
    return( 
       
    <div className="cart_totals ">
      <h2>Cart Totals</h2>
      <table cellSpacing={0}>
        <tbody>
          <tr className="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>
              <span className="amount">15.00 €</span>
            </td>
          </tr>
          <tr className="shipping">
            <th>Taxe (20%)</th>
            <td>20.23 €</td>
          </tr>
          <tr className="order-total">
            <th>Order Total</th>
            <td>
              <strong>
                <span className="amount">15.00 €</span>
              </strong>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 
    )
}
export default CartSummary;