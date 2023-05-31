import frst from '../../images/last.jpg'
import scend from "../../images/sofa1.jpg";
import third from "../../images/sofa10.jpeg";
import forth from "../../images/sofa9.jpeg";

import "./ProductList.css";
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";

const ProductList = () => {
  return (
    <div>
      <section className="ProductList">
        <p className="p">NEW PRODUCTS DEALS </p>
        <div className="line"></div>
        <div className="main">
          <div className="card">
            <div className="img">
              <img src={frst} alt="" />
            </div>
            <h3>squab bench</h3>
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

          <div className="card" id="scend">
            <div className="img">
              <button className='best'>Best</button>
              <img src={scend} alt="" />
            </div>
            <h3>davenport</h3>
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

          <div className="card">
            <div className="img">
              <button className='hot'>Hot</button>
              <img src={third} alt="" />
            </div>
            <h3>chesterfield</h3>
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

          <div className="card">
            <div className="img">
              <img src={forth} alt="" />
            </div>
            <h3>couch settee</h3>
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
  );
};

export default ProductList;
