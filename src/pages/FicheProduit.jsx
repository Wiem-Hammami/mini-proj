

import { getProductById } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OtherBrands from "../components/OtherBrands";

function FicheProduit() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null); 

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getProductById(productId);
            setProduct(productData);
        };

        fetchProduct();
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
           <div className="thubmnail-recent">
             <img
              src="img/product-thumb-1.jpg"
              className="recent-thumb"
              alt=""
            />
            <h2>
              <a href="">Sony Smart TV - 2015</a>
            </h2>
            <div className="product-sidebar-price">
              <ins>700.00 € </ins> <del>100.00 €</del>
            </div>
          </div>
          <div className="thubmnail-recent">
            <img
              src="img/product-thumb-1.jpg"
              className="recent-thumb"
              alt=""
            />
            <h2>
              <a href="">Sony Smart TV - 2015</a>
            </h2>
            <div className="product-sidebar-price">
              <ins>$700.00</ins> <del>$100.00</del>
            </div>
          </div>
          <div className="thubmnail-recent">
            <img
              src="img/product-thumb-1.jpg"
              className="recent-thumb"
              alt=""
            />
            <h2>
              <a href="">Sony Smart TV - 2015</a>
            </h2>
            <div className="product-sidebar-price">
              <ins>$700.00</ins> <del>$100.00</del>
            </div>
          </div>
          <div className="thubmnail-recent">
            <img
              src="img/product-thumb-1.jpg"
              className="recent-thumb"
              alt=""
            />
            <h2>
              <a href="">Sony Smart TV - 2015</a>
            </h2>
            <div className="product-sidebar-price">
              <ins>$700.00</ins> <del>$100.00</del>
            </div>
          </div>
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
