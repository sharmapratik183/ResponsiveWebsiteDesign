import React from "react";
import "./Cards.css";
import D1 from "./d1.webp";
import G2 from './g2.webp';
import V1 from './v1.jfif';
import C1 from './c1.jpg';
import M1 from './m1.jpg';
import P2 from './p2.jpg';

const Cards = () => {
  return (
    <>
      <div className="cards">
        
        <div className="smallCard">
          <div className="imageBox">
            <img src={D1} />
          </div>

          <div className="title">
            <p>Iced Latte / Cappuccino</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>


        <div className="smallCard">
          <div className="imageBox">
            <img src={G2} />
          </div>

          <div className="title">
            <p>Green Tea / Lemongrass & Ginger</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>


        <div className="smallCard">
          <div className="imageBox">
            <img src={V1} />
          </div>

          <div className="title">
            <p>Vanilla Shake</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>


        <div className="smallCard">
          <div className="imageBox">
            <img src={M1} />
          </div>

          <div className="title">
            <p>Mango Shake</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>


        <div className="smallCard">
          <div className="imageBox">
            <img src={C1} />
          </div>

          <div className="title">
            <p>Salted Caramel Shake</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>


        <div className="smallCard">
          <div className="imageBox">
            <img src={P2} />
          </div>

          <div className="title">
            <p>Pineapple Shake</p>
          </div>

          <div className="price">
            <p> ₹ 400/-</p>
          </div>

          <div className="addToBasket">
            <button>Add To Basket</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Cards;
