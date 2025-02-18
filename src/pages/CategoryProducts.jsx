
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem'; 

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/products-lists')
      .then(response => response.json())
      .then(data => {
        const category = data.find(item => item.name.toLowerCase() === categoryName.toLowerCase());
        if (category && category.items) {
          setProducts(category.items); 
        } else {
          setProducts([]); 
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryName]);

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>{categoryName}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-md-3 col-sm-6">
                <ProductItem
                  image={product.imageName} 
                  name={product.name}
                  link={`product/${product.id}`} 
                  rating={product.review || 0} 
                  price={product.price}
                  oldPrice={product.discountRate ? (product.price * (1 - product.discountRate / 100)).toFixed(2) : null} // Calcul du prix ancien si un discount est appliqué
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
