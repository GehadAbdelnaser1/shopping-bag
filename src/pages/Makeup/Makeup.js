import React from 'react';
// import main from '../../images/2020-11-23.jpg';
import main from '../../images/makeup2.jpg'
// import makeupfrst from '../../images/lipstick.jpg';
import makeupfrst from '../../images/mac_sku_M2LP05_1x1_0.png';
import makeupscend from "../../images/lipstick.jpg";
import makeupthird from "../../images/eyeshadow.jpg";
import makeupforth from "../../images/eye.avif";
import './Makeup.css';
import Nav from "../../component/nav/nav.js";
import Footer from "../../component/footer/footer.js";


import { FaStar ,FaStarHalfAlt } from "react-icons/fa";


const Makeup = () => {
  return (
    <div>
<Nav/>
    <div className='makeup'>
      
      {/* <h2 className='bg bg-danger p-3  '>MakeUp</h2> */}
      <div className="makeup-main">
      
        <img src={main} alt="" />
      </div>
      <div className="makeup-prodect">

      <section className="makeup-ProductList">
        
        <p className="makeup-p">NEW PRODUCTS DEALS </p>
        <div className="line"></div>
        <div className="makeup-main">
          <div className="makeup-card">
            <div className="makeup-img">
              <img src={makeupfrst} alt="" />
            </div>
            <h3>Mack Lipstick</h3>
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

          <div className="makeup-card" id="scend">
            <div className="makeup-img">
              {/* <button className='makeup-best'>Best</button> */}
              <img src={makeupscend} alt="" />
            </div>
            <h3>Pink Lipstick</h3>
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

          <div className="makeup-card">
            <div className="makeup-img">
              {/* <button className='makeup-hot'>Hot</button> */}
              <img src={makeupthird} alt="" />
            </div>
            <h3>Eye Shadow</h3>
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

          <div className="makeup-card">
            <div className="makeup-img">
              <img src={makeupforth} alt="" />
            </div>
            <h3>NARS Eyeshadow</h3>
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
    

    </div>
  <Footer />
    </div>
    
  );
}

export default Makeup;
