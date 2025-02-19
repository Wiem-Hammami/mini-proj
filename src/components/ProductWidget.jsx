import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getProducts, getAllProducts, getProductById } from "../services/ProductService";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function ProductWidget({ title, showViewAllButton = true , showTitle=true}) {  
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (title === "Recently Viewed") {
        let viewedProducts = Cookies.get("recentlyViewed");
        viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

        if (viewedProducts.length > 0) {
          const productDetails = await Promise.all(viewedProducts.map(id => getProductById(id)));
          setProducts(showAll ? productDetails : productDetails.slice(0, 2)); // Afficher 2 par défaut
        }
      } else {
        const fetchedProducts = showAll ? await getAllProducts(title) : await getProducts(title);
        setProducts(fetchedProducts);
      }
    };

    fetchProducts();
  }, [title, showAll]);

  const getCategoryFromImage = (imageName) => {
    const category = imageName.split("-")[0].toLowerCase();
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        {showTitle && (
          <h2 className="product-wid-title">{title}</h2>

        )}
        

        {showViewAllButton && (
          <button onClick={() => setShowAll(!showAll)} className="wid-view-more">
            {showAll ? "Show Less" : "View All"}
          </button>
        )}

        {products.length > 0 ? (
          products.map((product) => {
            const category = getCategoryFromImage(product.imageName);

            return (
              <Link to={`/categories/${category}/ProductDetails/${product.id}`} key={product.id}>
                <ProductItem
                  image={`/img/produts-img/${category}/${product.imageName}`}
                  name={product.name}
                  rating={product.review}
                  price={product.price}
                  oldPrice={product.price + (product.price * (product.discountRate / 100))}
                  className="thubmnail-recent"
                />
              </Link>
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
