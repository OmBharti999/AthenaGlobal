import Carousel from "react-bootstrap/Carousel";

import "./carousel.css";

function DarkVariantExample() {
  return (
    <div className="container carousel-height">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.trofasaude.pt/senhordobonfim/wp-content/uploads/sites/16/2022/06/banner-HC-alta-diferenciacao.jpg"
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
            src="https://university-sc.com/wp-content/uploads/2019/04/Memorial-Hermann-Header-background.jpg"
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
            src="https://previews.123rf.com/images/giggsy25/giggsy251711/giggsy25171100134/89624948-smart-doctor-with-a-stethoscope-on-blurred-hospital-background-and-medical-icon-in-hexagonal-shaped-.jpg"
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
