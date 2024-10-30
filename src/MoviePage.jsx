import car1 from "../public/Images/car1.jpg";
import car2 from "../public/Images/car2.jpg";
import car3 from "../public/Images/car3.jpg";
import car4 from "../public/Images/car4.jpg";
import car5 from "../public/Images/car5.jpg";

import Pagination from "react-bootstrap/Pagination";
function MoviePage() {
  return (
    <div>
        <h1>Movies</h1>
      <div className="images">
        <img src={car1} alt="" className="img" />
        <img src={car2} alt="" className="img" />
        <img src={car3} alt="" className="img" />
        <img src={car4} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
      </div>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default MoviePage;
