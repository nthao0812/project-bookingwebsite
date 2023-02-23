import Footer from "../footer/Footer";
import "./searchitem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img className="siImg" src="./images/hotel_search_1.webp" alt="" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxi0p">Free airport taxi</span>
        <span className="siSubtitle">
          Stuidio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bath room . 21m2 1 full bed
        </span>
        <span className="siCance0p">Free cancellation</span>
        <span className="siCancel0psubtitle">
          You can cancel later, so lock in this great price today~
        </span>
      </div>
      <div className="siDetails">
        <div className="sirating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailtexts">
          <span className="siPrice">$123</span>
          <span className="siTax0p">Incldues Taxes and fees</span>
          <button className="siCheckbutton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
