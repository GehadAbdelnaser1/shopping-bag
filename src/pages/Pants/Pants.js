import React from 'react';
import main from '../../images/panta-main2.jpg';
import pantsFrst from '../../images/clothing-3831829_1280.jpg';
import pantsScend from "../../images/fashion-4104004_1280.jpg";
import pantsThird from "../../images/jeans-2405037_1280.jpg";
import pantsForth from "../../images/pants-2604730_640.jpg";
import './Pants.css'
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";
import Nav from "../../component/nav/nav.js";
import Footer from "../../component/footer/footer.js";

const Pants = () => {
  return (
    <div>
      <Nav/>
      {/* <h1>Pants</h1> */}
      <div className="pants-main">
      
        <img src={main} alt="" />
      </div>
      <div className="pants-prodect">

      <section className="pants-ProductList">
        
        <p className="pants-p">NEW PRODUCTS DEALS </p>
        <div className="line"></div>
        <div className="pants-main">
          <div className="pants-card">
            <div className="pants-img">
              <img src={pantsFrst} alt="" />
            </div>
            <h3>Red pants</h3>
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

          <div className="pants-card" id="scend">
            <div className="pants-img">
              {/* <button className='makeup-best'>Best</button> */}
              <img src={pantsScend} alt="" />
            </div>
            <h3>wool pants</h3>
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

          <div className="pants-card">
            <div className="pants-img">
              {/* <button className='makeup-hot'>Hot</button> */}
              <img src={pantsThird} alt="" />
            </div>
            <h3>Blue jeans</h3>
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

          <div className="pants-card">
            <div className="pants-img">
              <img src={pantsForth} alt="" />
            </div>
            <h3>whit jeans</h3>
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
      <Footer />
    </div>
  );
}

export default Pants;
