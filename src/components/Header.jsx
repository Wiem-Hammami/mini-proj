
import '../assets/css/style.css' ;
import '../assets/css/responsive.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';
function Header(){
    
    return (
       
  <>
   <div className="site-branding-area">
              <div className="container">
             <div className="row">
            <div className="col-sm-4">
                <div className="logo" style={{ width: "150px", height: "150px"}}>
                     <h1><img src={logo} /></h1>
                </div>
            </div>
               <div className="col-sm-4">
                        <input type="text" style={{marginTop: "30px"}} placeholder="Search products..."/>
                        <input type="button" value="Search"/>
               </div>
                
            <div className="col-sm-4">

                <div className="shopping-item">
                   <a href="cart.html" >Cart :  <span className="cart-amunt">100.58 €</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="mainmenu-area">
<div className="container">
    <div className="row">
        <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
                <li className="active">Home</li>
                <li>Samsung</li>
                <li>Apple</li>
                <li>LG</li>
                <li>Sony</li>
                <li>Huawei</li>
            </ul>
        </div>  
    </div>
</div>
</div> 
      
      </>
);
}

export default Header;