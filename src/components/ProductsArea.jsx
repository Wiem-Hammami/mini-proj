
import ProductWidget from './ProductWidget.jsx'
function ProductsArea(){
    return (
        <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <ProductWidget title="Top Sellers" showViewAllButton={true} />
            <ProductWidget title="Recently Viewed" showViewAllButton={true} />
            <ProductWidget title="Top New" showViewAllButton={true} />

          </div>
        </div>
      </div>
      )
}
export default ProductsArea;