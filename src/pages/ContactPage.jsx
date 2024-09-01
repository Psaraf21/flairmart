import React from "react";
import { Footer, Navbar } from "../components";
import "../style/ContactPage_more.css"; 

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-2 py-2">
        <h1 className="text-center text-green">Contact Us</h1>
        <hr className="bg-success" />
        <div className="row my-4 justify-content-center">
          <div className="col-md-8 col-lg-6 col-sm-10">
            <form>
              <div className="form-group my-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Message" className="form-label">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-success px-4"
                  type="submit"
                >
                  Send
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

export default ContactPage;
