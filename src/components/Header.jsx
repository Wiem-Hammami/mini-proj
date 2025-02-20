

import { Link } from 'react-router-dom'; 
import CartComponent from './CartComponent';
import SearchComponent from './SearchComponent';
import { useLocation } from "react-router-dom";

function Header(){
  const location = useLocation();
  const isCheckoutOrCart = location.pathname === "/checkout" || location.pathname === "/cart";
    
    return (
    
   <div className="site-branding-area" style={{Width: "100%"}}>
              <div className="container">
             <div className="row">
            <div className="col-sm-4">
            <div className="logo" style={{ width: "150px", height: "150px"}}>
  <Link to="/"> 
    <img src="/img/logo.png" alt="Logo" style={{ width: "100%", height: "100%" }} /> 
  </Link>
</div>
            </div>
            <div className ="col-sm-4">
            <SearchComponent isVisible={!isCheckoutOrCart} />

            </div>
            <CartComponent/>
        </div>
    </div>
</div>



);
}

export default Header;