import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsitem">
            <label>Destination</label>
            <input type="text" placeholder={destination} />
          </div>

          <div className="lsitem">
            <label>Check-in Date</label>
            <span>06/24/2023 to 06/24/2023</span>
          </div>

          <div className="lsitem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionitem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>

              <div className="lsOptionitem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>

              <div className="lsOptionitem">
                <span className="lsOptionText" placeholder={options.adult}>
                  Adult
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>

              <div className="lsOptionitem">
                <span className="lsOptionText" placeholder={options.children}>
                  Children
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>

              <div className="lsOptionitem">
                <span className="lsOptionText" placeholder={options.room}>
                  Room
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>

        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  );
};

export default List;
