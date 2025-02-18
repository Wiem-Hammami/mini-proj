
import ProductItem from "./ProductItem";
import product1 from '../assets/img/product-thumb-1.jpg'
import product2 from '../assets/img/product-thumb-2.jpg'
import product3 from '../assets/img/product-thumb-3.jpg'

function ProductWidget({ title }) {
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">{title}</h2>
        <a href="#" className="wid-view-more">
          View All
        </a>

        <ProductItem 
          image={product1}
          name="Sony Smart TV - 2015" 
          link="single-product.html" 
          rating={5} 
          price={400} 
          oldPrice={425} 
        />

        <ProductItem 
          image={product2}
          name="Apple new mac book 2015" 
          link="single-product.html" 
          rating={5} 
          price={400} 
          oldPrice={425} 
        />

        <ProductItem 
          image={product3}
          name="Apple new iPhone 6" 
          link="single-product.html" 
          rating={5} 
          price={400} 
          oldPrice={425} 
        />
      </div>
    </div>
  );
}

export default ProductWidget;
