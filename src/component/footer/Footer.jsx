import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer
      className="text-light pb-5  px-3 px-md-5"
      style={{ backgroundColor: "#0A0C12",paddingTop:'80px' }}
    >
      <div className="container">

        {/* ================= TOP SECTION ================= */}
        <div className="row g-4 text-center text-md-start">

          {/* LEFT — TITLE + SOCIAL ICONS */}
          <div className="col-12 col-md-4">
            <h2 className="fw-semibold font" style={{fontSize:'30px'}}>
              <span style={{fontSize:'20px'}}>Join the</span> <br /> Frequency Chain Community
            </h2>

            <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-4 mt-4 fs-2 text-secondary">
              <i className="bi bi-twitter-x  text-primary"></i>
              <i className="bi bi-instagram text-primary"></i>
              <i className="bi bi-linkedin text-primary"></i>
              <i className="bi bi-youtube text-primary"></i>
            </div>
          </div>

          {/* LEARN + RESEARCH */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">Learn</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">About Frequency Chain</li>
              <li className="mb-2">Governance</li>
            </ul>

            <h5 className="fw-semibold mt-4 mb-3">Research</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Whitepaper</li>
              <li className="mb-2">Roadmap</li>
            </ul>
          </div>

          {/* BUILD */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">Build</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Developer</li>
              <li className="mb-2">Documentation</li>
            </ul>
          </div>

          {/* GET STARTED */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">Get Started</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Stake & Earn</li>
            </ul>
          </div>

          {/* ECOSYSTEM */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">Ecosystem</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Our Products</li>
            </ul>
          </div>

        </div>

        {/* ================= SEPARATOR ================= */}
        <hr className="border-secondary my-5" />

        {/* ================= BOTTOM ROW ================= */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">

          {/* Logo */}
          <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 fs-4 fw-bold mb-3 mb-md-0">
            <span className="text-primary">F</span>requencyChain
          </div>

          {/* Links */}
          <div className="d-flex justify-content-center justify-content-md-start gap-4 text-secondary small mb-3 mb-md-0">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookie Settings</span>
          </div>

          {/* Copyright */}
          <div className="text-secondary small">
            ©2025 TGPS Global All rights reserved
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
