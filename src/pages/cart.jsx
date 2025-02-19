 import CartSummary from '../components/CartSummary.jsx';
import CrossSellers from '../components/CrossSellers.jsx';
import ShopTable from '../components/ShopTable.jsx';
 function Cart(){
    return (
        <div className="single-product-area">
  <div className="zigzag-bottom" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-content-right">
          <div className="woocommerce">
            
            <ShopTable/>

            <div className="cart-collaterals">
             
              <CrossSellers/>
              <CartSummary/>
              
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