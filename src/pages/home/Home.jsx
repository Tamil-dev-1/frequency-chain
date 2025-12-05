
import Hero from '../../component/hero/Hero'
import ComparisonSlider from '../../component/slider/ComparisonSlider';
// import HeroSection from '../../component/hero/HeroSection'
import Blog from '../../component/blog/Blog';
import './Home.css';
export default function Home() {

   
  return (
    <>
      <Hero />
      {/* <HeroSection /> */}
      
                  {/* SECTION=====2 */}

   <section className="hero-section d-flex flex-column align-items-center">
  <div className="container">
    <div className="col-lg-8 mx-auto text-center">
      <h1 className="hero-title">Welcome to FrecX</h1>

      <p className="hero-subtitle mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores est, 
        reiciendis beatae voluptas doloremque consequatur expedita eius odio id!
      </p>

      {/* Button aligned LEFT */}
      <div className="text-center">
        <button className="hero-btn mt-4">Learn More</button>
      </div>
    </div>
  </div>
                <div className="container text-center py-5">


<div className="row mt-5 justify-content-center">

  {/* 1. Pick a wallet */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
        style={{
          width: "80px",
          height: "80px",
          background: "transparent",
        }}
      >
        <i className="bi bi-wallet2 fs-1" style={{ color: '#9357F4' }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{ color: '#9357F4' }}>Pick a wallet</h5>
        <p className="text-muted small m-0">Create accounts & manage assets</p>
      </div>
    </div>
  </div>

  {/* 2. Get ETH */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
        style={{
          width: "80px",
          height: "80px",
          background: "transparent",
          cursor: "pointer"
        }}
      >
        <i className="bi bi-star fs-1" style={{ color: '#4371EF' }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{ color: '#4371EF' }}>Get FrecX</h5>
        <p className="text-muted small m-0">The currency of Ethereum</p>
      </div>
    </div>
  </div>

  {/* 3. Try apps */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
        style={{
          width: "80px",
          height: "80px",
          background: "transparent",
        }}
      >
        <i className="bi bi-phone fs-1 text-success"></i>
      </div>
      <div>
        <h5 className="fw-bold text-success">Try apps</h5>
        <p className="text-muted small m-0">Finance, gaming, social</p>
      </div>
    </div>
  </div>

  {/* 4. Start building */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
        style={{
          width: "80px",
          height: "80px",
          background: "transparent",
        }}
      >
        <i className="bi bi-rocket fs-1" style={{ color: '#FF52BD' }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{ color: '#FF52BD' }}>Start building</h5>
        <p className="text-muted small m-0">Create your first app</p>
      </div>
    </div>
  </div>

</div>
    </div>
</section>

                   {/* SECTION=====3 */}

    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-5 mb-4">
            <span className="badge  text-primary fw-semibold px-3 py-2 usecase-badge">
              USE CASES
            </span>

            <h1 className="display-4 fw-bold mt-3">
              A new way <br /> to use the <br /> internet
            </h1>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-7">
            <div className="usecase-card d-flex align-items-center gap-4 p-4 p-md-5">

              {/* IMAGE LEFT - ALWAYS LEFT */}
              <div className="usecase-img-box">
                <img
                  src="https://images.pexels.com/photos/7567591/pexels-photo-7567591.jpeg"
                  alt="use-case"
                  className="img-fluid"
                />
              </div>

              {/* TEXT RIGHT */}
              <div className="usecase-text">
                <h3 className="fw-bold mb-3">Crypto without volatility</h3>
                <p className="text-muted mb-4">
                  Stablecoins are currencies that maintain stable value.
                  Their price matches the U.S. dollar or other steady assets.
                </p>

                <button className="btn btn-outline-dark px-4 py-2">
                  Discover stablecoins →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

                                  {/* SECTION======4 */}
  <section className="eco-wrapper">
      <div className="container-fluid px-4 px-md-5">

        <div className="row align-items-center gy-5">

          {/* LEFT IMAGE */}
          <div className="col-12 col-lg-6">
            <img
              src="https://images.pexels.com/photos/6766086/pexels-photo-6766086.jpeg"
              className="img-fluid w-75 eco-image"
              alt="ecosystem"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-12 col-lg-6 ps-lg-5 d-flex flex-column justify-content-center">

            <span className="eco-label mb-5">ACTIVITY</span>

            <h2 className="eco-title mb-5">The strongest ecosystem</h2>

            <p className="eco-subtitle">
              Activity from all frecX networks
            </p>

            {/* GRID STATS */}
            <div className="stats-card mt-4">
              <div className="row g-0">

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$147B</div>
                  <div className="stats-text">Value locked in DeFi</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$114.3B</div>
                  <div className="stats-text">Value protecting FrecX</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$0.0018</div>
                  <div className="stats-text">Average transaction cost</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">19.92M</div>
                  <div className="stats-text">Transactions in the last 24h</div>
                </div>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="eco-buttons d-flex flex-wrap gap-3">
              <button className="btn btn-primary px-4 py-2">
                Enterprise FrecX
              </button>

              <button className="btn btn-outline-dark px-4 py-2">
                More ecosystem resources →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>


                                   {/* SECTION=====5 */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-start">

      {/* LEFT CONTENT (desktop left) */}
      <div className="col-lg-7 order-2 order-lg-1">
        <span className="learn-badge px-3 py-1">LEARN</span>

        <h1 className="fw-bold display-5 mt-3">Understand FrecX</h1>

        <p className="text-muted mt-2">
          Crypto can feel overwhelming. Don’t worry, these materials are designed
          to help you understand Ethereum in just a few minutes.
        </p>

        <h5 className="fw-semibold mt-4">Popular topics</h5>

        <div className="row g-4 mt-2">

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icon">
              <i className="bi bi-gear-fill"></i>
            </div>
            <span className="topic-text hover-underline">What is FrecX?</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icon">
              <i className="bi bi-wallet2"></i>
            </div>
            <span className="topic-text hover-underline">What are crypto wallets?</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icon">
              <i className="bi bi-box-fill"></i>
            </div>
            <span className="topic-text hover-underline">How to start, step by step</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icon">
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>
            <span className="topic-text hover-underline">FrecX Whitepaper</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icon">
              <i className="bi bi-signpost-split"></i>
            </div>
            <span className="topic-text hover-underline">FrecX roadmap</span>
          </div>

        </div>

        <button className="btn btn-outline-dark mt-4 px-4 py-2">
          Other topics →
        </button>
      </div>

      {/* RIGHT IMAGE (desktop right, mobile top) */}
      <div className="col-lg-5 order-1 order-lg-2 mb-4 mb-lg-0">
        <img
          src="https://images.pexels.com/photos/8919505/pexels-photo-8919505.jpeg"
          alt="Learn FrecX"
          className="img-fluid learn-img"
        />
      </div>

    </div>
  </div>
</section>
                                           {/* SECTION=====6 */} 


  <section className="py-5">
      <div className="container text-center">

        {/* Badge */}
        <span
          className="px-3 py-1"
          style={{
            background: "#efe4ff",
            color: "#7c3aed",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          VALUES
        </span>

        {/* Main Heading */}
        <h1
          className="fw-bold mt-3"
          style={{
            fontSize: "52px",
            lineHeight: "1.2",
            fontWeight: "800",
          }}
        >
          The internet is changing
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted mt-3"
          style={{
            fontSize: "20px",
          }}
        >
          Be part of the digital revolution
        </p>

      </div>
    </section>

<ComparisonSlider />
   <Blog />
    </>
  );
}
