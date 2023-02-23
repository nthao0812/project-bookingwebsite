import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Detail = () => {
  return (
    <div className="hotelContainer">
      <div className="slider"></div>
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Tower Street Apartments</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span>Elton st 125 New york</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from center
        </span>
        <span className="hotelPricehighLight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelimgWrapper">
          <img className="hotelImg" src="./images/hotel_detail_1.jpg" alt="" />
          <img className="hotelImg" src="./images/hotel_detail_2.jpg" alt="" />
          <img className="hotelImg" src="./images/hotel_detail_3.jpg" alt="" />
          <img className="hotelImg" src="./images/hotel_detail_4.jpg" alt="" />
          <img className="hotelImg" src="./images/hotel_detail_5.jpg" alt="" />
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi.The units come with hardwood floors and feature a fully
              equipped kitchenette with a microwave, a flat - screen TV, and a
              private bathroom with shower and a hairdryer.A fridge is also
              offered, as well as an electric tea pot and a coffee
              machine.Popular points of interest near the apartment include
              Cloth Hall, Main Market Square and Town Hall Tower.The nearest
              airport is John Paul II International Kraków - Balice, 16.1 km
              from Tower Street Apartments, and the property offers a paid
              airport shuttle service.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excelllent loctaion sore of 9.8
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now !</button>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
