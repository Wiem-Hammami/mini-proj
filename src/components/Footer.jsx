import '../assets/css/style.css' ;
import '../assets/css/responsive.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.min.css';

function Footer(){
    return (
        <footer>
            <div className="footer-top-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-about-us">
                                <h2><span>MyStore</span></h2>
                                <p>SES Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-menu">
                                <h2 className="footer-wid-title">Categories</h2>
                                <ul>
                                    <li><a href="#">LG</a></li>
                                    <li><a href="#">Samsung</a></li>
                                    <li><a href="#">Sony</a></li>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Huawei</a></li>
                                </ul>                        
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-newsletter">
                                <h2 className="footer-wid-title">Newsletter</h2>
                                <p>Sign up to our newsletter and get exclusive deals...</p>
                                <div className="newsletter-form">
                                    <form action="#">
                                        <input type="email" placeholder="Type your email"/>
                                        <input type="submit" value="Subscribe"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
