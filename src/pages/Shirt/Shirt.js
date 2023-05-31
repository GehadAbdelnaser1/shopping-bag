import React from 'react';
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";
import main from '../../images/Header_-7_6283a501bafda.jpeg';
import shirtFrst from '../../images/shirt.jpg';
import shirtScend from "../../images/shirt2.jpg";
import shirtThird from "../../images/shirt3.jpg";
import shirtForth from "../../images/shirt2.jpg";
import './Shirt.css';
import Nav from "../../component/nav/nav.js";
import Footer from "../../component/footer/footer.js";

const Shirt = () => {
  return (
    <div>
      <Nav />
      {/* <h1>Shirt</h1> */}
      <div className="shirt-main">
      
        <img src={main} alt="" />
      </div>
      <div className="shirt-prodect">

      <section className="shirt">
        
        <p className="shirt-p">NEW PRODUCTS DEALS </p>
        <div className="line"></div>
        <div className="shirt-main">
          <div className="shirt-card">
            <div className="shirt-img">
              <img src={shirtFrst} alt="" />
            </div>
            <h3>gripy</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5>$420.00</h5>
            <span>$550.00</span>
          </div>

          <div className="shirt-card" id="scend">
            <div className="shirt-img">
              {/* <button className='makeup-best'>Best</button> */}
              <img src={shirtScend} alt="" />
            </div>
            <h3>Formal</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h5>$150.00</h5> <span>$185.00</span>
            {/* <h6>$185.00</h6> */}
          </div>

          <div className="shirt-card">
            <div className="shirt-img">
              {/* <button className='makeup-hot'>Hot</button> */}
              <img src={shirtThird} alt="" />
            </div>
            <h3>BabyBlue</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h5>$550.00</h5>
            <span>$$650.00</span>
            {/* <h6>$650.00</h6> */}
          </div>

          <div className="shirt-card">
            <div className="shirt-img">
              <img src={shirtForth} alt="" />
            </div>
            <h3>Whit Shirt</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h5>$570.00</h5> <span>$650.00</span>
            {/* <h6>$650.00</h6> */}
          </div>
        </div>
      </section>

      </div>
      <Footer/>
    </div>
  );
}

export default Shirt;
