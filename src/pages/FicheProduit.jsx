
import { getProductById } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie"; 
import ProductWidget from "../components/ProductWidget";

function FicheProduit() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getProductById(productId);
            setProduct(productData);
        };

        fetchProduct();

        let viewedProducts = Cookies.get("recentlyViewed");
        viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

        if (!viewedProducts.includes(productId)) {
            viewedProducts.push(productId);
            if (viewedProducts.length > 5) {
                viewedProducts.shift(); 
            }
            Cookies.set("recentlyViewed", JSON.stringify(viewedProducts), { expires: 7 });
        }
    }, [productId]);

    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
      <div className="single-product-area">
      <div className="zigzag-bottom" />
      <div className="container">
          <div className="row">
          <div className="col-md-4">
   <div className="single-sidebar">
     <h2 className="sidebar-title">Recently Viewed</h2>
   
<ProductWidget title="Recently Viewed" showViewAllButton={false} showTitle={false}/>
</div>
  <div className="single-sidebar">
    <h2 className="sidebar-title">Others brands</h2>
    <ul>
      <li>
        <a href="">Sony</a>
      </li>
      <li>
        <a href="">Samsung</a>
      </li>
      <li>
        <a href="">LG</a>
      </li>
    </ul>
  </div>
  {/* <OtherBrands/> */}
</div>
              
             
              <ProductDetails product={product} />
          </div>
      </div>
  </div>
    );
}

export default FicheProduit;
