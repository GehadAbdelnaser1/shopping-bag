/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  FaListUl,
  FaWindowClose,
  FaRegHeart,
  FaShoppingBag,
  FaSistrix,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleShowMenu = () => {
    setShowNavLinks(true);
  };

  const handleHideMenu = () => {
    setShowNavLinks(false);
  };

  return (
    <div>
      <>
        <nav className="one">
          <ul className="small">
            <li>
              <p>$USD </p>
              <RiArrowDownSFill />
            </li>
            <li>
              <p>English </p>
              <RiArrowDownSFill />
            </li>
          </ul>
          <div
            className="nav-links"
            style={{ right: showNavLinks ? "0" : "-200px" }}
          >
            <div className="fa">
              <FaWindowClose onClick={handleHideMenu} />
            </div>
            <ul>
            <li>
              <NavLink to="/home"> Home</NavLink>
            </li>
              <li>
                <NavLink to="/my-account">My Account</NavLink>
              </li>
              <li>
                {/* <NavLink to="/wishlist">Wishlist</NavLink> */}
                <div className="dropdown" id="nav-btn">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Wishlist
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/makeup"
                        className="dropdown-item"
                        type="button"
                      >
                        Makeup
                      </Link>
                    </li>
                    <li>
                      <Link to="/shirt" className="dropdown-item" type="button">
                        Shirt
                      </Link>
                    </li>
                    <li>
                      <Link to="/pants" className="dropdown-item" type="button">
                        Pants
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink to="/state">My stat</NavLink>
              </li>
              <li>
                <NavLink to="/cart">My Cart</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
            </ul>
          </div>
          <div className="fa">
            <FaListUl onClick={handleShowMenu} />
          </div>
        </nav>

        <div className="logo">
          <div className="shopping">
            <p>SHOPPING</p> <span>BAG</span>
          </div>
          <div className="search">
            <input
              className="searchInp"
              type="text"
              placeholder="Search Here"
            />
            <button className="searchBtn">
              <FaSistrix />
            </button>
          </div>
          <div className="icon">
            <FaShoppingBag />
            <button className="bag"> 0 </button>
            <FaRegHeart />
          </div>
        </div>

        {/* <nav className="tow">
          <ul id="nav">
            <li>
              <NavLink to="/home"> Home</NavLink>
            </li>
            <li>
              <button className="clothing">New</button>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Watches</a>
            </li>
            <li>
              <button className="shoes">Hot</button>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav> */}
      </>
    </div>
  );
};

export default Nav;
