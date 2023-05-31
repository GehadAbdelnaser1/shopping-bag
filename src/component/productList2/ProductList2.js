import frst from "../../images/3.jpg";
import scend from "../../images/test2.jpg";
import third from "../../images/4.jpg";
import forth from "../../images/m.jpg";
import "./ProductList2.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductList = () => {
  return (
    <div>
      <section className="ProductList2">
        <p className="p">NEW PRODUCTS DEALS </p>
        <div className="line"></div>
        <div className="main">
          <div className="card">
            <div className="imgfrst">
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

          <div className="card">
            <div className="imgscend">
              
            <button className='hot'>Hot</button>
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
            <div className="imgthird">
            <button className='best'>Best</button>
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
            <div className="imgforth">
              
            <button className='new'>New</button>
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
