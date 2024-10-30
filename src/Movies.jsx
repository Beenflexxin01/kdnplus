import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import MoviePage from "./MoviePage";
import car1 from "../public/Images/car1.jpg";
import car2 from "../public/Images/car2.jpg";
import car3 from "../public/Images/car3.jpg";
import car4 from "../public/Images/car4.jpg";
import car5 from "../public/Images/car5.jpg";
function Movies() {
  const [writer, setWriter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const writerPerPage = 10;

  const lastIndex = currentPage * writerPerPage;
  const firstIndex = lastIndex - writerPerPage;
  const writerPage = writer.slice(firstIndex, lastIndex);
  const npages = Math.ceil(writerPage.length / writerPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWriterInfo() {
      try {
        const response = await apiCall(`${BaseUrl}/users/writers`);
        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setWriter(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterInfo();
  }, [setWriter]);

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function currentPageNumber(id) {
    setCurrentPage(id);
  }

  return (
    <div className="">
      <div className="">
        <h1 className="tertiary-header">Movies</h1>
      </div>
      <div className="images">
        {/* <img src={car1} alt="" className="img" />
        <img src={car2} alt="" className="img" />
        <img src={car3} alt="" className="img" />
        <img src={car4} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" />
        <img src={car5} alt="" className="img" /> */}
      </div>
      {writer.length > 0 ? (
        <div className="dispute-bg">
          {writerPage.map((writer, index) => (
            <MoviePage key={writer._id} writer={writer} index={index} />
          ))}
          <Pagination
            numbers={numbers}
            currentPage={currentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPageNumber={currentPageNumber}
          />
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}

export default Movies;
