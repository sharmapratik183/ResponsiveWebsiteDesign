import React, { useState } from "react";
import "./Navbar2.css";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Timing from "../Timing/Timing";

const Navbar2 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showTiming,setShowTiming]=useState(false);
  return (
    <div>
      <nav className="main-navs">
        <div className="logo">
          {/* <h2>
            <span>P</span>ratik
            <span>S</span>harma
          </h2> */}
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" onClick={()=>setShowTiming(!showTiming)}>Timings</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            
          </ul>
          
        </div>

        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a href="#">
                <AiFillInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillYoutube className="youtube" />
              </a>
            </li>
          </ul> */}

          <div className="hamburger-menu">
            <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar2;
