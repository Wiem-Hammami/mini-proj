
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/ProductService.jsx"; 
import Pagination from "../components/Pagination.jsx";
import { Link } from "react-router-dom";
import ShopProduct from "../components/ShopProduct.jsx";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsByCategory(categoryName);
      setProducts(productsData);
    };

    fetchProducts();
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
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-md-3 col-sm-6">
                
                <ShopProduct product={product} category={categoryName} />

               
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination/>
    </div>

    
  
  );
}

export default CategoryProducts;
