

import { Link } from 'react-router-dom'; 

function Header(){
    
    return (
    
   <div className="site-branding-area" style={{Width: "100%"}}>
              <div className="container">
             <div className="row">
            <div className="col-sm-4">
            <div className="logo" style={{ width: "150px", height: "150px"}}>
  <Link to="/"> 
    <img src="img/logo.png" alt="Logo" style={{ width: "100%", height: "100%" }} /> 
  </Link>
</div>
            </div>
               <div className="col-sm-4">
                        <input type="text" style={{marginTop: "30px"}} placeholder="Search products..."/>
                        <input type="button" value="Search"/>
               </div>
                
            <div className="col-sm-4">

                <div className="shopping-item">
                   <Link to="cart">Cart :  <span className="cart-amunt">100.58 €</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></Link>
                </div>
            </div>
        </div>
    </div>
</div>



);
}

export default Header;