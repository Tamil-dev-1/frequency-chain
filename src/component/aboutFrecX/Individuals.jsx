import React from 'react'

const Individuals = () => {
  return (
    <div>
                          <section className="py-5 bg-white">
      <div className="container">

        {/* Title */}
        <h2 className="fw-bold mb-4">Why Frequency Chain?</h2>

        {/* Tabs */}
        <div className="d-flex gap-2 mb-4">
          <button className="btn btn-dark rounded-pill px-4">For Individuals</button>
          <button className="btn btn-light rounded-pill px-4">For Businesses</button>
        </div>

        {/* Row 1 */}
        <div className="row g-4">

          {/* Left Big Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
                className="w-100"
                style={{ height: "240px", objectFit: "cover" }}
                alt="bike"
              />

              <div className="p-4">
                <h4 className="fw-semibold">
                  Earn Rewards and Make a Positive Impact
                </h4>
                <p className="text-muted">
                  Turn everyday sustainable actions into rewards with real, tradable value.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-lg-row flex-column">

              {/* Text Left */}
              <div className="p-4 flex-grow-1">
                <h4 className="fw-semibold">Track and Prove Your Positive Impact</h4>
                <p className="text-muted">
                  See your contributions verified and build transparent proof of your efforts.
                </p>
              </div>

              {/* Image Right */}
              <img
                src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg"
                className="w-100"
                style={{
                  height: "240px",
                  objectFit: "cover",
                }}
                alt="wind"
              />
            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="row g-4 mt-2">

          {/* Left Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-lg-row flex-column">

              {/* Image Left */}
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                className="w-100"
                style={{
                  height: "240px",
                  objectFit: "cover",
                }}
                alt="laptop"
              />

              {/* Text Right */}
              <div className="p-4 flex-grow-1">
                <h4 className="fw-semibold">Built for Mainstream Adoption</h4>
                <p className="text-muted">
                  Connect with millions of people working toward measurable progress.
                </p>
              </div>

            </div>
          </div>

          {/* Right Big Card */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

              <img
                src="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg"
                className="w-100"
                style={{ height: "240px", objectFit: "cover" }}
                alt="group"
              />

              <div className="p-4">
                <h4 className="fw-semibold">Simple and Accessible Technology</h4>
                <p className="text-muted">
                  Get started easily through VeWorld and VeBetter, no crypto experience required.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Individuals
