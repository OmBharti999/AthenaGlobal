import Carousel from "react-bootstrap/Carousel";

import "./carousel.css";

function DarkVariantExample() {
  return (
    <div className="container carousel-height">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.arstechnica.net/wp-content/uploads/2017/03/GettyImages-513439387-800x427.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/resources/wp-content/uploads/2018/11/instagram-stories-ads-guide-featured.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/ec52c3_1dea4a2b088347f29ba9d251ec82bf37~mv2.png/v1/fill/w_640,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec52c3_1dea4a2b088347f29ba9d251ec82bf37~mv2.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
