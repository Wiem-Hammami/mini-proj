
import brand1 from '../assets/img/brand1.png'
import brand2 from '../assets/img/brand2.png'
import brand3 from '../assets/img/brand3.png'
import brand4 from '../assets/img/brand4.png'
import brand5 from '../assets/img/brand5.png'
import brand6 from '../assets/img/brand6.png'


function BrandsArea(){
    return(
        <div className="brands-area">
  <div className="zigzag-bottom" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="brand-wrapper">
          <div className="brand-list">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default BrandsArea;