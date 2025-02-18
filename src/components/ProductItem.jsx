function ProductItem({ image, name, link, rating, price, oldPrice }) {
    return (
      <div className="single-wid-product">
        <a href={link}>
          <img src={image} alt={name} className="product-thumb" />
        </a>
        <h2>
          <a href={link}>{name}</a>
        </h2>
        <div className="product-wid-rating">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fa fa-star ${i < rating ? "" : "text-muted"}`} />
          ))}
        </div>
        <div className="product-wid-price">
          <ins>${price}</ins> {oldPrice && <del>${oldPrice}</del>}
        </div>
      </div>
    );
  }
  
  export default ProductItem;
  