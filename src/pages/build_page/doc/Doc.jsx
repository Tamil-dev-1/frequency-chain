import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DocumentationPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#012371" }}>
      {/* ---------------- Top Header ---------------- */}
      <header
        className="py-5"
        style={{
          background: "linear-gradient(145deg, #4b36ff, #00236e)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          color: "white",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-5">Frequency Chain Docs</h1>
          <p className="mt-3 opacity-75 fs-5">
            Build secure, scalable, next-gen blockchain applications.
          </p>
          <span className="badge bg-light text-dark rounded-pill px-3 py-2 mt-3">
            v1.2.0 – Latest Stable
          </span>
        </div>
      </header>

      <div className="container-fluid px-4 mt-5">
        <div className="row">

          {/* ---------------- Sidebar ---------------- */}
          <aside className="col-md-3 col-lg-2 mb-4">
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{
                background: "#f7f9ff",
                height: "90vh",
                position: "sticky",
                top: "20px",
                border: "1px solid #e2e6ff",
                overflowY: "auto",
              }}
            >
              <h5 className="fw-bold mb-3 text-primary">📚 Index</h5>

              <input
                type="text"
                className="form-control mb-3 border-primary-subtle"
                placeholder="Search docs..."
                style={{ background: "#fff" }}
              />

              <nav className="d-flex flex-column gap-2">
                {[
                  "Introduction",
                  "Getting Started",
                  "Installation",
                  "SDK Usage",
                  "Wallet Integration",
                  "Node Setup",
                  "Blockchain APIs",
                  "Smart Contracts",
                  "Staking & Rewards",
                  "FAQ",
                ].map((item) => (
                  <a
                    key={item}
                    href={"#" + item.replace(/\s+/g, "")}
                    className="text-dark text-decoration-none py-2 px-3 rounded-3"
                    style={{
                      transition: "0.2s",
                      fontWeight: 500,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.background = "#e7eaff")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background = "transparent")
                    }
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ---------------- Main Content ---------------- */}
          <main className="col-md-7 col-lg-8">
            {[ 
              {
                id: "Introduction",
                title: "📘 Introduction",
                desc: "Frequency Chain is a next-generation Layer-1 blockchain focused on high-speed consensus, scalable transactions, and enterprise-grade tooling."
              },
              {
                id: "GettingStarted",
                title: "🚀 Getting Started",
                desc: "Learn the basics of setting up your environment and connecting to Frequency Chain."
              },
              {
                id: "Installation",
                title: "💻 Installation",
                desc: "Install Frequency SDK for JavaScript, TypeScript, Python, or Go."
              },
            ].map((section) => (
              <section id={section.id} className="mb-5" key={section.id}>
                <h2 className="fw-bold mb-3 text-primary">{section.title}</h2>
                <p className="opacity-75">{section.desc}</p>

                {/* Stylish Code Block */}
                <div
                  className="p-3 mt-3 rounded-4"
                  style={{
                    background: "#f0f3ff",
                    borderLeft: "4px solid #4b36ff",
                    boxShadow: "0 0 12px rgba(75,54,255,0.15)",
                  }}
                >
                  <pre className="text-dark m-0" style={{ whiteSpace: "pre-wrap" }}>
npm install frequency-sdk
import Frequency from "frequency-sdk"
                  </pre>
                </div>
              </section>
            ))}

            {/* ---------------- API Section ---------------- */}
            <section id="BlockchainAPIs" className="mb-5">
              <h2 className="fw-bold mb-3 text-primary">🧩 Blockchain API</h2>

              {/* Card 1 */}
              <div
                className="p-4 rounded-4 mb-3 shadow-sm"
                style={{
                  background: "#f7f9ff",
                  border: "1px solid #e2e6ff",
                }}
              >
                <h5 className="fw-bold text-primary">Check Wallet Balance</h5>
                <div
                  className="p-3 mt-3 rounded-3"
                  style={{
                    background: "#eef1ff",
                    borderLeft: "4px solid #4b36ff",
                    color: "#121116",
                  }}
                >
                  <pre className="m-0">{`const balance = await Frequency.balance("0xUser");
console.log(balance);`}</pre>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="p-4 rounded-4 shadow-sm"
                style={{
                  background: "#f7f9ff",
                  border: "1px solid #e2e6ff",
                }}
              >
                <h5 className="fw-bold text-primary">Send Transaction</h5>

                <div
                  className="p-3 mt-3 rounded-3"
                  style={{
                    background: "#eef1ff",
                    borderLeft: "4px solid #4b36ff",
                    color: "#121116",
                  }}
                >
                  <pre className="m-0">{`await Frequency.tx({
  from: "0xUser",
  to: "0xReceiver",
  amount: 50
});`}</pre>
                </div>
              </div>
            </section>

            {/* ---------------- FAQ ---------------- */}
            <section id="FAQ" className="mb-5">
              <h2 className="fw-bold mb-3 text-primary">❓ FAQ</h2>

              <div className="accordion" id="faqAccordion">
                {[
                  {
                    q: "Is Frequency Chain Open Source?",
                    a: "Yes, all repositories and developer tools are available on GitHub.",
                  },
                  {
                    q: "How is Frequency Chain so fast?",
                    a: "Frequency uses optimized consensus and parallel execution layers.",
                  },
                  {
                    q: "Can I deploy smart contracts?",
                    a: "Yes, Frequency supports Solidity and EVM smart contracts.",
                  },
                ].map((item, i) => (
                  <div
                    className="accordion-item border-primary-subtle"
                    key={i}
                    style={{ background: "#f7f9ff" }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-white text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${i}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`faq${i}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* ---------------- Right TOC ---------------- */}
          <aside className="col-lg-2 d-none d-lg-block">
            <div
              className="p-3 rounded-4 shadow-sm"
              style={{
                background: "#f7f9ff",
                border: "1px solid #e2e6ff",
                position: "sticky",
                top: "20px",
              }}
            >
              <h6 className="fw-bold mb-2 text-primary">ON THIS PAGE</h6>
              <ul className="list-unstyled small">
                <li><a href="#Introduction" className="text-dark">Introduction</a></li>
                <li><a href="#GettingStarted" className="text-dark">Getting Started</a></li>
                <li><a href="#Installation" className="text-dark">Installation</a></li>
                <li><a href="#BlockchainAPIs" className="text-dark">API</a></li>
                <li><a href="#FAQ" className="text-dark">FAQ</a></li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
