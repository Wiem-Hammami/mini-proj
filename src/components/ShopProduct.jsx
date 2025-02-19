import { Link } from "react-router-dom"; 
function ShopProduct({image, name, category, id, price, oldPrice}){
    return(
        <div className="single-shop-product">
        <div className="product-upper">
        <Link  to={`/categories/${category}/ProductDetails/${id}`}>
          <img src={image} alt={name}/>
          </Link>
        </div>
        <h2>
        <Link  to={`/categories/${category}/ProductDetails/${id}`}>{name}</Link>
        </h2>
        <div className="product-carousel-price">
          <ins>{price}</ins> <del>{oldPrice}</del>
        </div>
        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity={1}
            data-product_sku=""
            data-product_id={70}
            rel="nofollow"
            href="/canvas/shop/?add-to-cart=70"
          >
            Add to cart
          </a>
        </div>
      </div>
      
    )
}

export default ShopProduct;