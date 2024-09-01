import React from "react";
import image from "../asserts/product-images-for-ecommerce-websites.jpg";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3 bg-black">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image}
            alt="Card"
            height={500}
          />
          <div
            className="card-img-overlay d-flex align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="container">
              <h5 className="card-title fs-1 fw-lighter text-green">
                Discover the Latest Trends
              </h5>
              <p className="card-text fs-5 d-none d-sm-block text-white">
                Explore our new collection of fashion, electronics, and more.
                <br />
                Find the perfect items to refresh your style and elevate your look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
