
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchedProducts } from '../services/ProductService';
import Title from "../components/Title.jsx";
import ShopProduct from "../components/ShopProduct";  

function SearchProducts() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery) {
      getSearchedProducts(dispatch, searchQuery); 
    }
  }, [dispatch, searchQuery]); 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  const getCategoryFromName = (name) => {
    const category = name.split(" ")[0].toLowerCase();
    return category.charAt(0).toUpperCase() + category.slice(1); 
  };

  return (
    <div>
      <div className="product-big-title-area">
        <Title title="Search Results" />
      </div>

      <div className="single-product-area">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => {
                const category = getCategoryFromName(product.name);
                return(
                
                <div key={product.id} className="col-md-3 col-sm-6">
                  <ShopProduct product={product} category={category} /> 
                </div>
              )})
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProducts;
