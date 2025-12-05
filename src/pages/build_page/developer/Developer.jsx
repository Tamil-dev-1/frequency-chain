import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Developer() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="py-5 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #6b4dfb 0%, #4736d8 50%, #2a1fa6 100%)",
          borderRadius: "0 0 40px 40px",
        }}
      >
        <div className="container py-5">
          <h1 className="fw-bold display-4">Build on Frequency Chain</h1>
          <p className="mt-3" style={{ fontSize: "18px", opacity: "0.9" }}>
            Tools, SDKs, APIs and documentation to help developers build the
            next generation of blockchain applications.
          </p>

          <button className="btn btn-light btn-lg mt-4 px-4 py-2 fw-semibold">
            Explore Docs
          </button>
        </div>
      </section>

      {/* DEVELOPER TOOLS SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Developer Tools</h2>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                  alt="sdk"
                  width="50"
                />
                <h5 className="fw-bold mt-3">JavaScript SDK</h5>
                <p className="text-muted">
                  Integrate Frequency blockchain operations into your
                  JavaScript apps easily.
                </p>
                <button className="btn btn-outline-primary btn-sm mt-2">
                  View SDK →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                  alt="api"
                  width="50"
                />
                <h5 className="fw-bold mt-3">REST API</h5>
                <p className="text-muted">
                  Access blockchain state, account info and transaction data via
                  our robust REST API.
                </p>
                <button className="btn btn-outline-primary btn-sm mt-2">
                  Explore API →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919842.png"
                  alt="cli"
                  width="50"
                />
                <h5 className="fw-bold mt-3">Developer CLI</h5>
                <p className="text-muted">
                  Build, deploy and test blockchain smart contracts using our
                  powerful CLI tooling.
                </p>
                <button className="btn btn-outline-primary btn-sm mt-2">
                  Install CLI →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Frequency Chain API</h2>
          <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Access node RPC, send transactions, query blocks and interact with
            smart contracts.
          </p>

          <div className="p-4 bg-white rounded-4 shadow-sm">
            <pre className="bg-dark text-white p-4 rounded-4" style={{ fontSize: "14px" }}>
{`// Example RPC Call
fetch("https://rpc.frequencychain.io", {
  method: "POST",
  body: JSON.stringify({
    method: "chain_getBlock",
    params: [],
    id: 1,
    jsonrpc: "2.0"
  })
}).then(res => res.json()).then(console.log);`}
            </pre>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION SECTION */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Documentation</h2>
          <p className="text-muted mb-4" style={{ maxWidth: "650px", margin: "0 auto" }}>
            Learn how to build on Frequency chain with step-by-step tutorials,
            guides and reference docs.
          </p>

          <button className="btn btn-primary px-4 py-2 fw-semibold">
            Browse Documentation
          </button>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Join the Community</h2>

          <div className="row justify-content-center gy-4">
            {/* Discord */}
            <div className="col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                width="50"
                alt="discord"
              />
              <h6 className="fw-bold mt-2">Discord</h6>
              <p className="text-muted small">
                Ask questions and collaborate with developers.
              </p>
            </div>

            {/* GitHub */}
            <div className="col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width="50"
                alt="github"
              />
              <h6 className="fw-bold mt-2">GitHub</h6>
              <p className="text-muted small">
                Contribute to open-source development.
              </p>
            </div>

            {/* Twitter */}
            <div className="col-md-3 d-flex flex-column align-items-center">
              <img
                src="https://seeklogo.com/images/T/twitter-x-logo-101C7D218D-seeklogo.com.png"
                width="50"
                alt="x"
              />
              <h6 className="fw-bold mt-2">X (Twitter)</h6>
              <p className="text-muted small">
                Follow updates & blockchain announcements.
              </p>
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
        <h2 className="fw-bold">Start Building Today</h2>
        <p className="mt-2">Everything you need to create on Frequency Chain.</p>
        <button className="btn btn-light mt-3 px-4 py-2 fw-semibold">
          Get Started →
        </button>
      </section>
    </>
  );
}
