import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import "../style/Register_more.css"; 

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-2 py-2">
                <h1 className="text-center text-green">Register</h1>
                <hr className="bg-success" />
                <div className="row my-4 justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-10">
                        <form>
                            <div className="form-group my-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Enter Your Name"
                                />
                            </div>
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
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success px-4" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
