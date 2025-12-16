import  { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import './Governance.css';

export default function Governance() {

   const {theme} = useContext(ThemeContext);
  const sections = [
    { id: "overview", title: "Overview" },
    { id: "dao-structure", title: "DAO Structure" },
    { id: "voting-system", title: "Voting System" },
    { id: "proposal-lifecycle", title: "Proposal Lifecycle" },
    { id: "roles", title: "Roles & Responsibilities" },
    { id: "treasury", title: "Treasury Management" },
    { id: "security", title: "Security & Audits" },
    { id: "onchain-governance", title: "On-Chain Governance" },
    { id: "community", title: "Community Governance" },
    { id: "future", title: "Future Upgrades" }
  ];

  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            setActiveId(id);
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    observerRef.current = observer;

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 10;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="governance-wrapper">
      {/* HERO SECTION */}
      <header className="gradient-bg gov-hero py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold">Frequency Chain Governance</h1>
              <p className="lead mt-3">
                A decentralized governance system designed to keep Frequency Chain
                transparent, secure, community-driven and future-proof.
              </p>

              <button
                onClick={scrollTo("overview")}
                className="btn btn-light btn-lg mt-3"
              >
                Explore Governance
              </button>
            </div>

            <div className="col-lg-5 text-center">
              <div className="gov-stats card p-4">
                <h5 className="fw-bold">Governance Stats</h5>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h4 className="fw-bold">125</h4>
                    <small className="text-muted">Validators</small>
                  </div>
                  <div>
                    <h4 className="fw-bold">8K+</h4>
                    <small className="text-muted">Community Members</small>
                  </div>
                  <div>
                    <h4 className="fw-bold">72</h4>
                    <small className="text-muted">Proposals</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE TOP NAV */}
      <nav className="gov-mobile-nav d-lg-none bg-white shadow-sm">
        <div className="container py-2 d-flex gap-2 overflow-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={scrollTo(s.id)}
              className={`btn btn-sm ${
                activeId === s.id ? "btn-primary" : "btn-outline-secondary"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </nav>

      <main className="container my-5">
        <div className="row">
          {/* SIDEBAR FOR DESKTOP */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="gov-sidebar sidebar-bg bg-sidebar p-3">
              <h5 className="fw-bold">Governance Sections</h5>
              <div className="list-group mt-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={scrollTo(s.id)}
                    className={`list-group-item list-group-item-action sidebar-text border-0 ${
                      activeId === s.id ? "active" : ""
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="col-lg-9">
            {sections.map((s, idx) => (
              <section
                key={s.id}
                id={s.id}
                className="gov-section section-card reveal mb-5 p-4"
              >
                <div className="d-flex justify-content-between">
                  <h3>
                    {idx + 1}. {s.title}
                  </h3>
                  <small className="text-muted">Last updated: Jan 2025</small>
                </div>

                <p className="text-muted mt-2">
                  This is a placeholder description for the {s.title} section.
                  Replace this with your real governance documentation.
                </p>

                <ul className="mt-3">
                  <li>Detailed explanation about {s.title.toLowerCase()}</li>
                  <li>On-chain logic and governance rules</li>
                  <li>Community policies and responsibilities</li>
                </ul>

                {/* DEFAULT IMAGE */}
                <img
                  className="img-fluid rounded mt-3"
                  src={`https://dummyimage.com/600x300/eaf2ff/0d6efd.png&text=${encodeURIComponent(
                    s.title
                  )}`}
                  alt={s.title}
                />
              </section>
            ))}

            {/* FOOTER */}
            {/* <footer className="text-center py-4">
              <small className="text-muted">
                © {new Date().getFullYear()} Frequency Chain Governance
              </small>
            </footer> */}
          </div>
        </div>
      </main>
    </div>
  );
}
