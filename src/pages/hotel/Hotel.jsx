import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

import Navbar from "../../components/navbar/Navbar";
import Detail from "../detail/Detail";
import "../hotel/hotel.css";

const Hotel = () => {
  // const hotelDetailJson = fetch("./detail.json")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(typeof data))};

  return (
    <div>
      <Navbar />
      <Detail />
    </div>
  );
};

export default Hotel;
