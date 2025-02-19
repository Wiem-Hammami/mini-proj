import FooterAboutUs from './FooterAboutUs.jsx';
import FooterMenu from './FooterMenu.jsx';
import FooterNewsLetter from './FooterNewsLetter.jsx'

const Footer = () => {

  return (
    <div className="footer-top-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
         <FooterAboutUs/>
         <FooterMenu/>
         <FooterNewsLetter/> 
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
