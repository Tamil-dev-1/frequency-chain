import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function FAQPage() {
   const {theme} = useContext(ThemeContext);
  return (
    <>
      {/* HERO */}
      <section
        className="py-5 bg-faq text-center text-white"
       
      >
        <div className="container py-5">
          <h1 className="fw-bold display-4">Frequently Asked Questions</h1>
          <p className="mt-3" style={{ fontSize: "18px", opacity: "0.9" }}>
            Everything you need to know about Frequency Chain, development, and support.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 className="fw-bold text-center mb-4"
          style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>General Questions</h2>

          <div className="accordion" id="faqAccordion" style={{backgroundColor:'#000'}}>
            {/* Q1 */}
            <div className="accordion-item ">
              <h2 className="accordion-header" id="q1">
                <button
                  className="accordion-button fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a1"
                >
                  What is Frequency Chain?
                </button>
              </h2>
              <div
                id="a1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Frequency Chain is a high-performance blockchain designed for
                  decentralized applications, identity systems, and scalable Web3 solutions.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="q2">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a2"
                >
                  How do I start developing on Frequency?
                </button>
              </h2>
              <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Install our JS SDK, explore the API documentation, and use our
                  developer tools to start building your decentralized app.
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="q3">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a3"
                >
                  Is Frequency Chain open source?
                </button>
              </h2>
              <div id="a3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Yes. All major components including SDKs, APIs and core are
                  open source and available on GitHub.
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="q4">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a4"
                >
                  How do I request support?
                </button>
              </h2>
              <div id="a4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  You can join our Discord community, open a GitHub issue, or use the
                  support contact form for assistance.
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="q5">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a5"
                >
                  Is Frequency suitable for enterprise use?
                </button>
              </h2>
              <div id="a5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Absolutely. Frequency is designed to support large-scale applications, high throughput,
                  and secure decentralized identity systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Need More Help?</h2>

          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100 text-center"
               style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          border: theme === "dark" ? "1px solid white" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                  alt="discord"
                  width="50"
                />
                <h5 className="fw-bold mt-3">Join Discord</h5>
                <p className="small" style={{color: theme === "dark" ? "#ffffff" : "#877d7dff",}}>
                  Chat with developers and get help from the community.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100 text-center"
                      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          border: theme === "dark" ? "1px solid white" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  width="50"
                  style={{
    filter: theme === "dark"
      ? "invert(1)"
      : "invert(0.1)",
    transition: "0.3s",
  }}
                />
                <h5 className="fw-bold mt-3">GitHub Issues</h5>
                <p className=" small" 
                style={{color: theme === "dark" ? "#ffffff" : "#877d7dff",}}>
                  Report bugs or suggest new features directly on GitHub.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm h-100 text-center"
                      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          border: theme === "dark" ? "1px solid white" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
                  alt="support"
                  width="50"
    style={{
    filter: theme === "dark"
      ? "invert(1)"
      : "invert(0.1)",
    transition: "0.3s",
  }}
                />
                <h5 className="fw-bold mt-3">Support Email</h5>
                <p className=" small" style={{color: theme === "dark" ? "#ffffff" : "#877d7dff",}}>
                  Need something specific? Contact the support team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #4736d8, #2a1fa6)",
        }}
      >
        <h2 className="fw-bold">Still Have Questions?</h2>
        <p className="mt-2">We’re here to help you build the future of Web3.</p>
        <button className="btn btn-light px-4 py-2 fw-semibold mt-3">
          Contact Support →
        </button>
      </section>
    </>
  );
}

