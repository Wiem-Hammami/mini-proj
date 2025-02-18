
import ProductWidget from './ProductWidget.jsx'
function ProductsArea(){
    return (
        <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <ProductWidget title="Top Sellers" />
            <ProductWidget title="Recently Viewed" />
            <ProductWidget title="Top New" />
          </div>
        </div>
      </div>
      )
}
export default ProductsArea;