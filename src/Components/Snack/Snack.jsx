import React from "react";
import "./Snack.css";
import L1 from "./l3.png";
import L2 from "./p2.png";

const Snack = () => {
  return (
    <>
      <div className="snackContainer">
        <div className="text">
          <p>Explore the best of : food & snack corner</p>
        </div>

        <div className="pepsiContainer">
          <div className="beverage">
            <p className="snack">snacks &</p>
            <p className="bevg">beverages</p>
          </div>

          <div className="circle">
            <img className="pepsi" src={L2} />
            <img className="lays" src={L1} />
          </div>

          <div className="btn3">
            <button >Explore </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Snack;
