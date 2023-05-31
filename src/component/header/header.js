import React from "react";
import "./header.css";
import main from "../../images/main-sofa.jpeg";
import fst from "../../images/photo.jpeg";
import scd from "../../images/test.avif";
import trd from "../../images/good.avif";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="container-heder">
            <div className="firstImg">
              <img src={main} alt="main" />
              <div className="centeredImg">
                <h4>OUTDOOR FURNITURE</h4>
                <h2>OUTDOOR DINING </h2>
                <h2>FURNITURE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <button className="imgBtn">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="images">
            <div className="fst">
              <img src={fst} alt="fst" />
              <div className="centered">
                <h3>Top Rated 2022</h3>
                <p>Save 20% Sale</p>
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="scd">
              <img src={scd} alt="scd" />
              <div className="centered">
                <h3>New In Collection</h3>
                <p>Save 10% Sale</p>
                <h4>$200.00</h4>
              </div>
            </div>
            <div className="trd">
              <img src={trd} alt="trd" />
              <div className="centered">
                <h3>Top Rated 2022</h3>
                <p>Save 20% Sale</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
