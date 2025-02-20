import CrossSellers from '../components/CrossSellers.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ShopTable from '../components/ShopTable.jsx';
import CartTotals from '../components/CartTotals.jsx'
  function Cart(){
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.2;
  const total = subtotal + tax;
    return (
        <div className="single-product-area">
  <div className="zigzag-bottom" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-content-right">
          <div className="woocommerce">
            
                  <ShopTable items={cart.items} dispatch={dispatch} />


            <div className="cart-collaterals">
             
              <CrossSellers/>
               <CartTotals subtotal={subtotal} tax={tax} total={total} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

    )
 };
 export default Cart;
