import "./featured.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="./images/city_1.webp" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="./images/city_2.webp" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="./images/city_3.webp" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
