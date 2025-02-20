
import ProductWidget from './ProductWidget.jsx'
function ProductsArea(){
    return (
        <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className='col-md-4'>
            <ProductWidget title="Top Sellers" showViewAllButton={true} />

            </div>
            <div className='col-md-4'>
            <ProductWidget title="Recently Viewed" showViewAllButton={true} />
              
            </div>
            <div className='col-md-4'>
            <ProductWidget title="Top New" showViewAllButton={true} />
              
            </div>
            
            
            

          </div>
        </div>
      </div>
      )
}
export default ProductsArea;