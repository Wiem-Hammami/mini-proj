
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getProducts, getAllProducts } from '../services/ProductService';  
import { Link } from 'react-router-dom';

function ProductWidget({ title }) {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(title);
      setProducts(fetchedProducts);
    };

    if (!showAll) {
      fetchProducts(); 
    } else {
      const fetchAllProducts = async () => {
        const fetchedAllProducts = await getAllProducts(title);
        setProducts(fetchedAllProducts);
      };
      fetchAllProducts(); 
    }
  }, [title, showAll]); 

  const getCategoryFromImage = (imageName) => {
    const category = imageName.split('-')[0].toLowerCase(); 
    return category.charAt(0).toUpperCase() + category.slice(1); 
  };

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">{title}</h2>
        
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="wid-view-more"
        >
          {showAll ? "Show Less" : "View All"}
        </button>

        {products.length > 0 ? (
          products.map((product) => {
            const category = getCategoryFromImage(product.imageName); 

            return (
              <Link  to={`/categories/${category}/ProductDetails/${product.id}`}>
              <ProductItem 
                key={product.id}
                image={`/img/produts-img/${category}/${product.imageName}`}  
                name={product.name} 
                
                rating={product.review} 
                price={product.price} 
                oldPrice={product.price + (product.price * (product.discountRate / 100))} 
              /></Link>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductWidget;
