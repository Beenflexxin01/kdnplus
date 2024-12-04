import Carousel from "react-bootstrap/Carousel";
import car1 from "../public/Images/car1.jpg";
import car2 from "../public/Images/car2.jpg";
import car3 from "../public/Images/car3.jpg";
import car4 from "../public/Images/car4.jpg";
import car5 from "../public/Images/car5.jpg";
import Movies from "./Movies";
import MoviePage from "./MoviePage";
function Home() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img src={car1} alt="" className="carousel-img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          {/* /////////////////////////////////////// */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={car2} alt="" className="carousel-img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={car3} alt="" className="carousel-img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={car4} alt="" className="carousel-img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={car5} alt="" className="carousel-img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <MoviePage />
    </div>
  );
}

export default Home;
