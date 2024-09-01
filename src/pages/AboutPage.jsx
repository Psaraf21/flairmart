import React from 'react';
import { Footer, Navbar } from "../components";
import "../style/About_more.css";  

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-green">About Us</h1>
        <hr className="bg-green" />
        <p className="lead text-center text-black">
          Welcome to FlairMart, your ultimate destination for the latest trends in fashion, electronics, and accessories. 
          At FlairMart, we believe in providing high-quality products at unbeatable prices, ensuring you always find what you're looking for.
          Our dedicated team works tirelessly to curate a diverse range of products to suit every style and need.
          Whether you're shopping for the latest fashion trends, high-end electronics, or unique jewelry pieces, we've got you covered.
        </p>

        <h2 className="text-center py-4 text-green">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 border-0 shadow custom-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" height={160} />
              <div className="card-body bg-black text-white text-center">
                <h5 className="card-title ">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 border-0 shadow custom-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" height={160} />
              <div className="card-body bg-black text-white text-center">
                <h5 className="card-title">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 border-0 shadow custom-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" height={160} />
              <div className="card-body bg-black text-white text-center">
                <h5 className="card-title">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 border-0 shadow custom-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" height={160} />
              <div className="card-body bg-black text-white text-center">
                <h5 className="card-title">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
