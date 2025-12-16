import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ThemeContext } from "../../ThemeContext";

const NavbarComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState({
    learn: false,
    getStarted: false,
    build: false,
    participate: false,
    ecosystem: false,
  });

  // SCROLL SHADOW EFFECT
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav
      className={`navbar navbar-expand-lg py-3 sticky-navbar navbar-${theme} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src="/logo.svg" width="32" height="32" alt="logo" />
        </Link>

        {/* MOBILE RIGHT ICONS */}
        <div className="d-flex d-lg-none align-items-center gap-3">
          <i className="bi bi-search fs-5"></i>

          {/* THEME TOGGLE ICON */}
          {/* <i
            className={`bi ${
              theme === "light" ? "bi-sun" : "bi-moon"
            } fs-4 theme-icon`}
            onClick={toggleTheme}
          /> */}
                      <i
  key={theme}
  className={`bi ${
    theme === "light" ? "bi-sun" : "bi-moon"
  } fs-4 theme-icon`}
  onClick={toggleTheme}
/>
        </div>

        {/* MOBILE TOGGLE */}
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
            {[
              {
                key: "learn",
                title: "Learn",
                links: [
                  { to: "about-frecx", label: "About FreC" },
                  { to: "governance", label: "Governance" },
                  { to: "/faq", label: "FAQ" },
                ],
              },
              {
                key: "getStarted",
                title: "Get Started",
                links: [{ to: "stake-earn", label: "Stake & Earn" }],
              },
              {
                key: "build",
                title: "Build",
                links: [
                  { to: "developer", label: "Developer" },
                  { to: "doc", label: "Docs" },
                ],
              },
              {
                key: "ecosystem",
                title: "Ecosystem",
                links: [
                  { to: "/ourproduct", label: "OurProduct" },
                  { to: "/blog", label: "Blog" },
                ],
              },
              {
                key: "participate",
                title: "Research",
                links: [
                  { to: "whitepaper", label: "Whitepaper" },
                  { to: "roadmap", label: "Roadmap" },
                ],
              },
            ].map((item) => (
              <li key={item.key} className="w-100">
                <div
                  className="d-flex justify-content-between py-2 px-1"
                  onClick={() => toggleMenu(item.key)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-semibold">{item.title}</span>
                  <i
                    className={`bi bi-chevron-${
                      open[item.key] ? "up" : "down"
                    }`}
                  />
                </div>

                {open[item.key] && (
                  <div className="ps-3 pb-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="dropdown-item"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav mx-lg-auto gap-lg-4 d-none d-lg-flex">
            {[
              {
                title: "Learn",
                links: [
                  { to: "about-frecx", label: "About FreC" },
                  { to: "governance", label: "Governance" },
                  { to: "/faq", label: "FAQ" },
                ],
              },
              {
                title: "Build",
                links: [
                  { to: "developer", label: "Developer" },
                  { to: "doc", label: "Docs" },
                ],
              },
              {
                title: "Get Started",
                links: [{ to: "stake-earn", label: "Stake & Earn" }],
              },
              {
                title: "Ecosystem",
                links: [
                  { to: "/ourproduct", label: "OurProduct" },
                  { to: "/blog", label: "Blog" },
                ],
              },
              {
                title: "Research",
                links: [
                  { to: "whitepaper", label: "Whitepaper" },
                  { to: "roadmap", label: "Roadmap" },
                ],
              },
            ].map((menu) => (
              <li className="nav-item dropdown" key={menu.title}>
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  {menu.title}
                </a>
                <ul className="dropdown-menu">
                  {menu.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="dropdown-item">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT ICONS */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <i className="bi bi-search fs-5"></i>
            <i
  key={theme}
  className={`bi ${
    theme === "light" ? "bi-sun" : "bi-moon"
  } fs-4 theme-icon`}
  onClick={toggleTheme}
/>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
