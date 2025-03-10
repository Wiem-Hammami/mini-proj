import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function SliderArea() {
  return (
    <div className="slider-area">
      <div className="block-slider block-slider4">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src='img/h4-slide.png' alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='img/h4-slide2.png' alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='img/h4-slide3.png' alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='img/h4-slide4.png' alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='img/h4-slide7.png' alt="Third Slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderArea;
