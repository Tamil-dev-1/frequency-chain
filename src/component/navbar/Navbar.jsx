import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";  
import './Navbar.css';

const NavbarComponent = () => {

  // Force apply theme again on page navigation
useEffect(() => {
  const stored = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", stored);
}, []);

  const { theme, toggleTheme } = useContext(ThemeContext); // <-- UPDATED

  const [open, setOpen] = useState({
    learn: false,
    getStarted: false,
    build: false,
    participate: false,
    ecosystem: false,
  });

  const toggleMenu = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/logo.svg" width="32" height="32" alt="logo" />
        </a>

        {/* RIGHT SIDE — SEARCH + THEME ICON (MOBILE HIDDEN) */}
        <div className="d-flex d-lg-none align-items-center gap-3">
          {/* Search button */}
          <i className="bi bi-search fs-5"></i>

          {/* Theme toggle */}
          <i
            className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"} fs-4`}
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
          ></i>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* MOBILE ACCORDION MENU */}
          <ul className="navbar-nav d-lg-none w-100 mt-3">

            {/* LEARN */}
            <li className="w-100">
              <div
                className="d-flex justify-content-between py-2 px-1"
                onClick={() => toggleMenu("learn")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold">Learn</span>
                <i className={`bi bi-chevron-${open.learn ? "up" : "down"}`}></i>
              </div>

              {open.learn && (
                <div className="ps-3 pb-2">
                  <Link to='about-frecx' className="dropdown-item">About FreC</Link>
                  <Link to='governance' className="dropdown-item">Governance</Link>
                  <a className="dropdown-item">FAQ</a>
                </div>
              )}
            </li>

            {/* GET STARTED */}
            <li className="w-100">
              <div
                className="d-flex justify-content-between py-2 px-1"
                onClick={() => toggleMenu("getStarted")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold">Get Started</span>
                <i className={`bi bi-chevron-${open.getStarted ? "up" : "down"}`}></i>
              </div>

              {open.getStarted && (
                <div className="ps-3 pb-2">
                  <Link to='stake-earn' className="dropdown-item">Stake & Earn</Link>
                  <a className="dropdown-item">FAQ</a>
                </div>
              )}
            </li>

            {/* BUILD */}
            <li className="w-100">
              <div
                className="d-flex justify-content-between py-2 px-1"
                onClick={() => toggleMenu("build")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold">Build</span>
                <i className={`bi bi-chevron-${open.build ? "up" : "down"}`}></i>
              </div>

              {open.build && (
                <div className="ps-3 pb-2">
                  <Link to='developer' className="dropdown-item">Developer</Link>
                  <Link to='doc' className="dropdown-item">Docs</Link>
                  <a className="dropdown-item">FAQ</a>
                </div>
              )}
            </li>

            {/* ECOSYSTEM */}
            <li className="w-100">
              <div
                className="d-flex justify-content-between py-2 px-1"
                onClick={() => toggleMenu("ecosystem")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold">Ecosystem</span>
                <i className={`bi bi-chevron-${open.ecosystem ? "up" : "down"}`}></i>
              </div>

              {open.ecosystem && (
                <div className="ps-3 pb-2">
                  <Link to='ourproduct' className="dropdown-item">OurProduct</Link>
                  <a className="dropdown-item">FAQ</a>
                </div>
              )}
            </li>

            {/* RESEARCH */}
            <li className="w-100">
              <div
                className="d-flex justify-content-between py-2 px-1"
                onClick={() => toggleMenu("participate")}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold">Research</span>
                <i className={`bi bi-chevron-${open.participate ? "up" : "down"}`}></i>
              </div>

              {open.participate && (
                <div className="ps-3 pb-2">
                  <Link to='whitepaper' className="dropdown-item">Whitepaper</Link>
                  <Link to='roadmap' className="dropdown-item">Roadmap</Link>
                  <a className="dropdown-item">FAQ</a>
                </div>
              )}
            </li>
          </ul>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav mx-lg-auto gap-lg-4 d-none d-lg-flex">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
              <ul className="dropdown-menu">
                <li><Link to='about-frecx' className="dropdown-item">About FreC</Link></li>
                <li><Link to='governance' className="dropdown-item">Governance</Link></li>
                <li><a className="dropdown-item">FAQ</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Build</a>
              <ul className="dropdown-menu">
                <li><Link to='developer' className="dropdown-item">Developer</Link></li>
                <li><Link to='doc' className="dropdown-item">Docs</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Get Started</a>
              <ul className="dropdown-menu">
                <li><Link to='stake-earn' className="dropdown-item">Stake & Earn</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Ecosystem</a>
              <ul className="dropdown-menu">
                <li><Link to='ourproduct' className="dropdown-item">OurProduct</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Research</a>
              <ul className="dropdown-menu">
                <li><Link to='whitepaper' className="dropdown-item">Whitepaper</Link></li>
                <li><Link to='roadmap' className="dropdown-item">Roadmap</Link></li>
              </ul>
            </li>
          </ul>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {/* Search */}
            <i className="bi bi-search fs-5" style={{ cursor: "pointer" }}></i>

            {/* Theme Toggle */}
            <i
              className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"} fs-4`}
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
            ></i>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
