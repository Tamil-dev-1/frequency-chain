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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* ================= MENU DATA ================= */
  const menuData = [
    {
      key: "learn",
      title: "Learn",
      links: [
        { to: "about-frecx", label: "About FreC", icon: "bi-info-circle" },
        { to: "governance", label: "Governance", icon: "bi-diagram-3" },
        { to: "/faq", label: "FAQ", icon: "bi-question-circle" },
      ],
    },
    {
      key: "build",
      title: "Build",
      links: [
        { to: "developer", label: "Developer", icon: "bi-code-slash" },
        { to: "doc", label: "Docs", icon: "bi-journal-text" },
      ],
    },
    {
      key: "getStarted",
      title: "Get Started",
      links: [
        { to: "stake-earn", label: "Stake & Earn", icon: "bi-wallet2" },
      ],
    },
    {
      key: "ecosystem",
      title: "Ecosystem",
      links: [
        { to: "/ourproduct", label: "Our Product", icon: "bi-box" },
        { to: "/blog", label: "Blog", icon: "bi-pencil-square" },
      ],
    },
    {
      key: "participate",
      title: "Research",
      links: [
        { to: "whitepaper", label: "Whitepaper", icon: "bi-file-earmark-text" },
        { to: "roadmap", label: "Roadmap", icon: "bi-map" },
      ],
    },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top modern-navbar navbar-${theme} ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/logo.svg" width="32" height="32" alt="logo" />
          <span className="fw-bold brand-text">FreC</span>
        </Link>

        {/* MOBILE ICONS */}
        <div className="d-flex d-lg-none align-items-center gap-3">
          <i className="bi bi-search fs-5 nav-icon"></i>
          <i
            className={`bi ${
              theme === "light" ? "bi-sun" : "bi-moon"
            } fs-5 nav-icon`}
            onClick={toggleTheme}
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* ================= MOBILE MENU ================= */}
          <ul className="navbar-nav d-lg-none mt-4 gap-2">
            {menuData.map((item) => (
              <li key={item.key} className="mobile-accordion">
                <div
                  className="accordion-header"
                  onClick={() => toggleMenu(item.key)}
                >
                  <span>{item.title}</span>
                  <i
                    className={`bi bi-chevron-${
                      open[item.key] ? "up" : "down"
                    }`}
                  />
                </div>

                {open[item.key] && (
                  <div className="accordion-body">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="mobile-link"
                      >
                        <i className={`bi ${link.icon} mobile-link-icon`} />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="navbar-nav mx-auto gap-4 d-none d-lg-flex">
            {menuData.map((menu) => (
              <li className="nav-item dropdown" key={menu.title}>
                <a
                  className="nav-link nav-link-modern"
                  data-bs-toggle="dropdown"
                >
                  {menu.title}
                </a>

                <ul className="dropdown-menu modern-dropdown">
                  {menu.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="dropdown-item d-flex align-items-center gap-2"
                      >
                        <i className={`bi ${link.icon} dropdown-icon`} />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <i className="bi bi-search fs-5 nav-icon"></i>
            <i
              className={`bi ${
                theme === "light" ? "bi-sun" : "bi-moon"
              } fs-5 nav-icon`}
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
