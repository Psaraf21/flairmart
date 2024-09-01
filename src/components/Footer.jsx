import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer_more.css"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase text-green">FlairMart</h5>
            <p>
              FlairMart is your one-stop shop for the latest in fashion, electronics, and accessories. Discover great deals every day!
            </p>
          </div>

        
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase text-green">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/product" className="footer-link">Products</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase text-green">Contact Us</h5>
            <p>
              123, Fashion Street, NY, USA
              <br />
              Phone: +1 234 567 890
              <br />
              Email: info@flairmart.com
            </p>
            <h5 className="text-uppercase mt-4 text-green">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="footer-link me-3">
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fa fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-green" />
        
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} FlairMart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
