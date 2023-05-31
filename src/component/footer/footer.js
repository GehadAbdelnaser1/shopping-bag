/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-footer">
          <div className="footer-a">
            <a href="">{<FaFacebookF />}</a>
            <a href="">{<FaGoogle />}</a>
            <a href="">{<FaInstagram />}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
