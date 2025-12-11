import React from "react";
import './StakeEarn.css';
import Img1 from '../../assets/images/ourproduct/img1.jpg'
import { Coins, Gift } from "lucide-react";
const StakeEarn = () => {
  return (
    <>
      <section
      className="py-5"
      style={{ background: "#0D0F14", color: "#fff" }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6">

            <h1
              className="fw-semibold mb-4"
              style={{
                fontSize: "2.4rem",     // reduced text size
                lineHeight: "1.3"
              }}
            >
              Stake FrecX <Coins size={34} color="#9A86FD" /> earn rewards{" "}
              <Gift size={34} color="#A0FFB3" /> <br />
              and shape the future
            </h1>

            <p
              className="mb-4"
              style={{ fontSize: "1rem", color: "#c9c9c9" }}  // reduced text
            >
              Staking through StarGate lets you earn FREC rewards by securing the VeChain network.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3">
              <button
                className="btn px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #6B5BFF, #9D4CF5)",
                  color: "#fff",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem"     // reduced
                }}
              >
                Start Staking
              </button>

              <button
                className="btn px-4 py-2"
                style={{
                  background: "#1E1F24",
                  color: "#fff",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "0.9rem"     // reduced
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
              alt="stake"
              className="img-fluid"
              style={{
                borderRadius: "24px",
                width: "100%",
                maxWidth: "520px",
              }}
            />
          </div>

        </div>
      </div>
    </section>

                                        {/* SECTION ============= 2 */}



                                         <section className="py-5">
      <div className="container text-center mt-5">

        {/* TITLE */}
        <h2 className="fw-bold mb-5 text-start">Staking Stats</h2>

        {/* ROW */}
        <div className="row g-4 justify-content-center">

          {/* CARD 1 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#c8c5ff",   // light lavender
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Total Staked
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem" }}>
                7B+
                <span style={{ fontSize: "1rem", marginLeft: "6px" }}>Lorem</span>
              </h1>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#f5f5ff",   // very light lavender
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Total Wallets
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem" }}>
                15500+
              </h1>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#c8c5ff",
                borderRadius: "20px",
              }}
            >
              <p className="mb-1" style={{ fontSize: "1rem", color: "#333" }}>
                Rewards Distributed
              </p>

              <h1 className="fw-bold m-0" style={{ fontSize: "2.8rem" }}>
                1.7B
                <span style={{ fontSize: "1rem", marginLeft: "6px" }}>Lorem</span>
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>



                                       {/* SECTION ======== 3 */}

                     <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src={Img1} 
              alt="coins"
              className="img-fluid stake-img"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Why Stake?</h2>

            <div className="stake-line mb-4"></div>

            <h4 className="fw-semibold">Earn rewards</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos.
            </p>

            <h4 className="fw-semibold mt-4">Participate in governance</h4>
            <p className="text-muted">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore id quae iste provident officiis!
            </p>

            <h4 className="fw-semibold mt-4">Ecosystem advantages</h4>
            <p className="text-muted">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum labore culpa! Deserunt, quibusdam quasi!
            </p>
          </div>

        </div>
      </div>
    </section>


                                         {/* SECTION ====== 4   */}


                                     <section className="py-5 bg-white">
      <div className="container text-center">

        <h2 className="fw-bold mb-4 premium-title">
          Learn More About Staking
        </h2>

        {/* FIXED Video Box */}
        <div className="video-box mx-auto mb-4">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/HYf3SPQpaNE"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <button className="btn premium-btn px-4 py-2">
          Explore More
        </button>

      </div>
    </section>        


                              {/* SECTION ===== 5 */}



                                                <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src='https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg' 
              alt="coins"
              className="img-fluid round-corner stake-img rounded-top-end rounded-bottom-start shadow"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">How to Get Started</h2>

            <div className="stake-line mb-4"></div>

            <h4 className="fw-semibold">Connect your wallet</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos.
            </p>

            <h4 className="fw-semibold mt-4">Stake Frec</h4>
            <p className="text-muted">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore id quae iste provident officiis!
            </p>

            <h4 className="fw-semibold mt-4">Earn rewards</h4>
            <p className="text-muted">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum labore culpa! Deserunt, quibusdam quasi!
            </p>

            <div className="d-flex gap-3">
             <button className="btn premium-btn px-4 py-2">
          Start Stacking
        </button>

         <button className="btn premium-btn px-4 py-2">
          Learn More
        </button>
           </div>
          </div>
           
           
        </div>
      </div>
    </section>

                                       {/* SECTION ======= 6 */}

                                       <section className="py-5">
      <div className="container">

        <div className="row text-center justify-content-between">

          {/* 1 — Choose NFT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="icon-circle mb-3" style={{ background: "#E5F5D9" }}>
              <i className="bi bi-camera" />
            </div>
            <h5 className="fw-bold">Choose your NFT</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </div>

          {/* 2 — Earn rewards */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="icon-circle mb-3" style={{ background: "#EFEAFF" }}>
              <i className="bi bi-gift" />
            </div>
            <h5 className="fw-bold">Earn rewards</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </div>

          {/* 3 — Ecosystem */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="icon-circle mb-3" style={{ background: "#DFF6E4" }}>
              <i className="bi bi-arrow-left-right" />
            </div>
            <h5 className="fw-bold">Ecosystem</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </div>

          {/* 4 — Governance */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="icon-circle mb-3" style={{ background: "#E0FAF9" }}>
              <i className="bi bi-diagram-3" />
            </div>
            <h5 className="fw-bold">Governance</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi.
            </p>
          </div>

        </div>

      </div>
    </section>


                               {/* SECTION ========= 7 */}



                               <section className="py-5">
      <div className="container">

        <div className="earn-card mx-auto p-5 d-flex justify-content-between align-items-center">
          
          {/* LEFT TEXT */}
          <div className="content-area">
            <h2 className="earn-title mb-4">
              Start earning by securing the FrequencyChain blockchain
            </h2>

            <div className="d-flex gap-3">
              <button className="btn btn-primary stake-btn">Stake FrecX</button>
              <button className="btn btn-dark buy-btn">Buy FrecX</button>
            </div>
          </div>

          {/* RIGHT DECORATION */}
          <div className="decor-area">
            <div className="decor-lines"></div>
          </div>

        </div>

      </div>
    </section>



    </>
  );
};

export default StakeEarn;
