import React from "react";
// import heroImg from "../assets/crypto-events.png"; // replace with your image path
import './AllEvent.css';
import EventBanner from '../../assets/images/event/eventbanner.png';
const CryptoEventsHero = () => {
  return (
    <>
    <section
      className="py-5"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-white">

            {/* Breadcrumb */}
            <p
              className="mb-4"
              style={{
                color: "#8b8b8b",
                letterSpacing: "1px",
                fontSize: "14px"
              }}
            >
              HOME <span className="mx-2">/</span> COMMUNITY{" "}
              <span className="mx-2">/</span>
              <span style={{ color: "#b58cff" }}>EVENTS</span>
            </p>

            {/* Title */}
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                lineHeight: "1.1"
              }}
            >
              Crypto events
              <br />
              2026
            </h1>

            {/* Description */}
            <p
              style={{
                color: "#cfcfcf",
                fontSize: "1.05rem",
                maxWidth: "520px",
                lineHeight: "1.7"
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, mollitia alias. Dolore sapiente ad, voluptatibus minus fugit, laboriosam aliquid recusandae odio nihil ab magni tempore distinctio tempora laudantium soluta odit!
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 col-md-12 text-center mt-5 mt-lg-0">
            <img
              src={EventBanner}
              alt="Crypto Events Illustration"
              className="img-fluid"
              style={{
                maxHeight: "520px"
              }}
            />
          </div>

        </div>
      </div>
    </section>


                      {/* section ------ 2 */}

       {/* ===== MAJOR BLOCKCHAIN CONFERENCES ===== */}
<section className="py-5" style={{ backgroundColor: "#000" }}>
  <div className="container">

    {/* SECTION TITLE */}
    <h2 className="fw-bold text-white mb-5">
      Major blockchain conferences
    </h2>

    <div className="row g-4">

      {/* CARD 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="conference-card">

          <div className="conference-image">
            <img
              src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg"
              alt="ETHDenver"
              className="img-fluid w-100"
            />
          </div>

          <div className="d-flex align-items-center gap-3 mt-4">
            <div className="logo-box">
              <img src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg" alt="ETHDenver logo" />
            </div>

            <div>
              <h5 className="text-white fw-semibold mb-1">ETHDenver</h5>
              <p className="text-muted mb-1">Denver, USA</p>
              <p className="text-muted mb-0">Feb 17 – 21</p>
            </div>
          </div>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="conference-card">

          <div className="conference-image">
            <img
              src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg"
              alt="ETHCC"
              className="img-fluid w-100"
            />
          </div>

          <div className="d-flex align-items-center gap-3 mt-4">
            <div className="logo-box bg-white">
              <img src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg" alt="ETHCC logo" />
            </div>

            <div>
              <h5 className="text-white fw-semibold mb-1">ETHCC</h5>
              <p className="text-muted mb-1">Cannes, France</p>
              <p className="text-muted mb-0">Mar 30 – Apr 2</p>
            </div>
          </div>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="conference-card">

          <div className="conference-image">
            <img
              src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg"
              alt="ETHGlobal Cannes"
              className="img-fluid w-100"
            />
          </div>

          <div className="d-flex align-items-center gap-3 mt-4">
            <div className="logo-box">
              <img src="https://images.pexels.com/photos/6476184/pexels-photo-6476184.jpeg" alt="Cannes logo" />
            </div>

            <div>
              <h5 className="text-white fw-semibold mb-1">
                ETHGlobal Cannes
              </h5>
              <p className="text-muted mb-1">Cannes, France</p>
              <p className="text-muted mb-0">Apr 3 – 5</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

                         {/* SECTION ------ 3 */}

         {/* ===== ETHEREUM COMMUNITY HUBS ===== */}
<section className="py-5" style={{ background: "#000" }}>
  <div className="container">

    {/* TITLE */}
    <h2 className="fw-bold text-white mb-2">
      FrequencyChain community hubs
    </h2>

    <p className="text-muted mb-4" style={{ maxWidth: "720px" }}>
      You can join regular co-working sessions and community events in these
      permanent spaces, perfect for inspired work, learning, connecting, and building.
    </p>

  </div>

  {/* HORIZONTAL SCROLL */}
  <div className="container-fluid px-4">
    <div className="hub-scroll d-flex gap-4">

      {/* CARD 1 */}
      <div className="hub-card london">
        <div className="hub-logo">
  <img
    src="https://images.pexels.com/photos/12192943/pexels-photo-12192943.jpeg"
    alt="London Ethereum Hub"
    className="hub-logo-img"
  />
</div>


        <h4 className="text-white mt-4">London</h4>

        <p>
          A dedicated floor for Ethereum builders, researchers, creators,
          students, and explorers at Encode Club.
        </p>

        <p>
          Join for everyday co-working and regular events.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="hub-card berlin">
        <div className="hub-logo">Berlin<br /><span>ethereum</span></div>

        <h4 className="text-white mt-4">Berlin</h4>

        <p>
          The Ethereum Foundation office opens its doors every Wednesday
          for builders, researchers, creators, students, and explorers.
        </p>

        <p>
          Join for Co-working Wednesdays and regular events.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="hub-card dubai">
        <div className="hub-logo">Dubai<br /><span>ethereum</span></div>

        <h4 className="text-white mt-4">Dubai</h4>

        <p>
          An inspiring space hosted at Hadron Founders Club for founders,
          builders, researchers, and explorers.
        </p>

        <p>
          Join for everyday co-working and regular events.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="hub-card lagos">
        <div className="hub-logo">Lagos<br /><span>ethereum</span></div>

        <h4 className="text-white mt-4">Lagos</h4>

        <p>
          A vibrant community space at Web3Bridge in Lagos for builders,
          founders, researchers, and creatives.
        </p>

        <p>
          Join for everyday co-working and regular events.
        </p>

        <div className="hub-links">
          <a href="#">Cowork sign up ↗</a>
          <a href="#">Meetups ↗</a>
        </div>
      </div>

    </div>
  </div>
</section>
                
               
    </>
  );
};

export default CryptoEventsHero;
