import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "../style/Login_more.css"; 

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-2">
        <h1 className="text-center text-green">Login</h1>
        <hr className="bg-success" />
        <div className="row my-4 justify-content-center">
          <div className="col-md-8 col-lg-6 col-sm-10">
            <form>
              <div className="form-group my-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-success px-4"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
