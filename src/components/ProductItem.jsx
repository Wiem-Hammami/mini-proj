
function ProductItem({ product, category }) {
  if (!product) return null; 

  const { name, review: rating, price, discountRate, imageName } = product;
  const oldPrice = discountRate ? price + (price * (discountRate / 100)) : null;

  return (
    <div className="single-wid-product">
      <img src={`/img/produts-img/${category}/${imageName}`} alt={name} className="product-thumb" />
      
      <h2>{name}</h2>

      <div className="product-wid-rating">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fa fa-star ${i < rating ? "" : "text-muted"}`} />
        ))}
      </div>

      <div className="product-wid-price">
        <ins>${price}</ins> {oldPrice && <del>${oldPrice.toFixed(2)}</del>}
      </div>
    </div>
  );
}

export default ProductItem;
