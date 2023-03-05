import React from "react";
import "./Category.css";
import K1 from "./k1.jpg";
import K2 from "./k2.jpg";
import K3 from "./k3.jpg";
import K4 from "./k4.jpg";

const Category = () => {
  return (
    <>
      <div className="pContainer">
        <div className="popular">
          <p> most popular</p>
          <p>CATEGORIES</p>
        </div>

        <div className="card">
          <div className="first">
            <img src={K1} />
            <div className="para">
            <p>Food &</p>
            <p>Beverages</p>
            </div>
          </div>
          <div className="second">
            <img src={K2} />
            <div className="para">
            <p>Spa &</p>
            <p>Wellness</p>
            </div>
          </div>
          <div className="third">
            <img src={K3} />
            <div className="para">
            <p>Room</p>
            <p>Amenities</p>
            </div>
          </div>
          <div className="fourth">
            <img src={K4} />
            <div className="para">
            <p>Laundry </p>
            <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
