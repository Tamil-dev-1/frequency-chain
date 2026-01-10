
import Hero from '../../component/hero/Hero'
import ComparisonSlider from '../../component/slider/ComparisonSlider';
import Blog from '../../component/blog/Blog';
import './Home.css';
import Events from '../../component/event/Events';
import Demo from '../../assets/images/home/demo.png'
import Demo2 from '../../assets/images/home/demo2.png'
import Demo3 from '../../assets/images/home/demo3.png'
import Demo4 from '../../assets/images/home/demo4.png'
import Demo5 from '../../assets/images/home/demo5.png'
import X from '..//..//assets/images/home/x.png'
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


export default function Home() {

 const {theme} = useContext(ThemeContext);

    const imgStyle = {
    width: "100%",
    maxWidth: "150px",
    height: "auto",
  };

  return (
    <>

    
    <Hero />


      
      {/* <HeroSection /> */}
      
                  {/* SECTION=====2 */}

   <section className="d-flex flex-column align-items-center py-5"
      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
   >
  <div className="container">
    <div className="col-lg-8 mx-auto text-center">
      <h1 className="hero-title" style={{color: theme === "dark"? "#ffff":""}}>Welcome to FrecX</h1>

      <p className="hero-subtitle mt-3"
       style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores est, 
        reiciendis beatae voluptas doloremque consequatur expedita eius odio id!
      </p>

      {/* Button aligned LEFT */}
      <div className="text-center">
        <button className="hero-btn mt-4"
      >Learn More</button>
      </div>
    </div>
  </div>
</section>

                        {/* SECTION ---------  3 */}

<section>
  <div className="container-fluid text-center py-5">
<div className="row mt-5 justify-content-center">

  {/* 1. Pick a wallet */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start" >
      <div
        className=" topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
       
      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
        <i className="bi bi-wallet2 fs-1" style={{ color: '#9357F4', }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{ color: '#9357F4' }}>Pick a wallet</h5>
        <p className="icon-text small m-0">Create accounts & manage assets</p>
      </div>
    </div>
  </div>

  {/* 2. Get ETH */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
       style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
        <i className="bi bi-star fs-1" style={{ color: '#4371EF' }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{color: '#4371EF'}}>Get FrecX</h5>
        <p className="icon-text small m-0">The currency of Ethereum</p>
      </div>
    </div>
  </div>

  {/* 3. Try apps */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
      style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }} >
        <i className="bi bi-phone fs-1 text-success"></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{color:"#92FDDE"}}>Try apps</h5>
        <p className="icon-text small m-0">Finance, gaming, social</p>
      </div>
    </div>
  </div>

  {/* 4. Start building */}
  <div className="col-12 col-sm-6 col-md-3 mb-4">
    <div className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
      <div
        className="topic-icon d-flex justify-content-center align-items-center rounded-4 shadow mb-3 mb-md-0"
       style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}>
        <i className="bi bi-rocket fs-1" style={{ color: '#FF52BD' }}></i>
      </div>
      <div>
        <h5 className="fw-bold" style={{ color: '#FF52BD' }}>Start building</h5>
        <p className="icon-text small m-0">Create your first app</p>
      </div>
    </div>
  </div>

</div>
    </div>
</section>

                   {/* SECTION=====4 */}

 <section className="py-5" style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }} >
      <div className="container">

        {/* TITLE + RIGHT CARD */}
        <div className="row mb-4 align-items-center">
          <div
            className="col-lg-6 mb-3 mb-lg-0"
            data-aos="fade-up"
          >
            <span className="learn-badge px-3 py-1">USE CASE</span>
            <h1 className="fw-bold display-5">
              A new way <br /> to use the internet
            </h1>
          </div>

          <div className="col-lg-6" data-aos="fade-left" >
            <div
              className="gradient-box gradient-1 rounded-2 shadow p-4 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start"
              
            >
              <img
                src={Demo}
                className="img-fluid rounded-3"
                style={imgStyle}
                alt=""
              />

              <div>
                <h4 className="fw-bold mb-2" style={{color: theme === "dark" ? "#ffffff" : "#111111",}}>Crypto without volatility</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">
                  Discover stablecoins →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 CARDS */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
  <div
    className="gradient-box gradient-2 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    {/* IMAGE */}
    <img
      src={Demo3}
      className="img-fluid rounded-3 mb-3"
      style={imgStyle}
      alt=""
    />

    {/* CONTENT */}
    <div>
      <h5
        className="fw-bold mb-2"
        style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}
      >
        A fairer financial system
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Explore DeFi →
      </button>
    </div>
  </div>
</div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
  <div
    className="gradient-box gradient-3 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    {/* TEXT */}
    <div className="mb-3">
      <h5 className="fw-bold mb-2">
        The network of networks
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Explore benefits →
      </button>
    </div>

    {/* IMAGE */}
    <img
      src={Demo4}
      className="img-fluid rounded-3 mt-auto"
      style={imgStyle}
      alt=""
    />
  </div>
</div>


          <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="200">
  <div
    className="gradient-box gradient-4 rounded-2 shadow p-4
               d-flex flex-column align-items-center
               text-center h-100"
  >
    {/* IMAGE */}
    <img
      src={Demo5}
      className="img-fluid rounded-3 mb-3"
      style={imgStyle}
      alt=""
    />

    {/* TEXT */}
    <div className='mt-5'>
      <h5 className="fw-bold mb-2">
        Innovative apps
      </h5>

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <button className="btn btn-dark btn-sm rounded-pill px-3">
        Browse apps →
      </button>
    </div>
  </div>
</div>


        </div>

        {/* BOTTOM CARD */}
        <div className="row mt-4">
          <div className="col-12" data-aos="fade-up">
            <div
              className="gradient-box gradient-5 rounded-2 shadow p-4 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start"
              
            >
              <img
                src={Demo2}
                className="img-fluid rounded-3"
                style={{ width: "100%", maxWidth: "250px" }}
                alt=""
              />

              <div>
                <h4 className="fw-bold mb-2"  style={{color: theme === "dark" ? "#ffffff" : "#111111",}}>The internet of assets</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="btn btn-dark btn-sm rounded-pill px-3">
                  More on NFTs →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


                                  {/* SECTION======5 */}
  <section className="eco-wrapper" >
      <div className="container px-1 px-md-5">

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
          
            <h2 className="eco-title mb-5 hero-title">The strongest ecosystem</h2>

            <p className="eco-subtitle" style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}
          >
              Activity from all frecX networks
            </p>

            {/* GRID STATS */}
            <div className="stats-card mt-4">
              <div className="row g-0">

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$147B</div>
                  <div className="stats-text" 
                  style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Value locked in DeFi</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$114.3B</div>
                  <div className="stats-text"
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Value protecting FrecX</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">$0.0018</div>
                  <div className="stats-text" 
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Average transaction cost</div>
                </div>

                <div className="col-12 col-sm-6 stats-item">
                  <div className="stats-value">19.92M</div>
                  <div className="stats-text"
                      style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>Transactions in the last 24h</div>
                </div>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="eco-buttons d-flex flex-wrap gap-3">
              <button className="btn btn-primary px-4 py-2">
                Enterprise FrecX
              </button>

              <button className="btn btn-outline-dark px-4 py-2" style={{ color: theme === "dark" ? "#ffffff" : "#5d5555ff",
          transition: "0.3s",}}>
                More ecosystem resources →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>


                                   {/* SECTION=====6 */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-start">

      {/* LEFT CONTENT (desktop left) */}
      <div className="col-lg-7 order-2 order-lg-1">
        <span className="learn-badge px-3 py-1">LEARN</span>

        <h1 className="fw-bold display-5 mt-3 hero-title">Understand FrecX</h1>

        <p className="mt-2" style={{ color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium dolorum fugit harum, esse unde obcaecati sapiente!.
        </p>

        <h5 className="fw-semibold mt-4">Popular topics</h5>

        <div className="row g-4 mt-2">

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3"
          >
            <div className="topic-icons"  style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ff2fab" : "#ff2fab",
          transition: "0.3s",
        }}>
              <i className="bi bi-gear-fill"></i>
            </div>
            <span className="topic-text hover-underline">What is FrecX?</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icons"

            style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ff2fab" : "#ff2fab",
          transition: "0.3s",
        }}>
              <i className="bi bi-wallet2"></i>
            </div>
            <span className="topic-text hover-underline"
                 style={{
          color: theme === "dark" ? "#ffff" : "#000",
          transition: "0.3s",
        }}>What are crypto wallets?</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icons"
            style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ff2fab" : "#ff2fab",
          transition: "0.3s",
        }}>
              <i className="bi bi-box-fill"></i>
            </div>
            <span className="topic-text hover-underline"
                 style={{
          color: theme === "dark" ? "#ffff" : "#000",
          transition: "0.3s",
        }}>How to start, step by step</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icons"
            
            style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ff2fab" : "#ff2fab",
          transition: "0.3s",
        }}>
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>
            <span className="topic-text hover-underline"
                 style={{
          color: theme === "dark" ? "#ffff" : "#000",
          transition: "0.3s",
        }}>FrecX Whitepaper</span>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 topic-item p-3">
            <div className="topic-icons" 
            style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ff2fab" : "#ff2fab",
          transition: "0.3s",
        }}>
              <i className="bi bi-signpost-split"></i>
            </div>
            <span className="topic-text hover-underline" 
            style={{
          color: theme === "dark" ? "#ffff" : "#000",
          transition: "0.3s",
        }}>FrecX roadmap</span>
          </div>

        </div>

        <button className="btn btn-outline-dark mt-4 px-4 py-2 "
        style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffff" : "#0000",
          transition: "0.3s",
        }}>
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
                                           {/* SECTION=====7 */} 


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
          className="fw-bold mt-3 hero-title"
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
          className="mt-3"

               style={{
          color: theme === "dark" ? "#ffff" : "#6c5f5fff",
          transition: "0.3s",
          fontSize:'20px'
        }}
        >
          Be part of the digital revolution
        </p>

      </div>
    </section>

<ComparisonSlider />

                         {/* BUILD THE COMMUNITY */}

     <section className="py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-6 col-md-12">

        {/* Tag */}
        <span
          className="px-3 py-1 rounded-pill fw-semibold d-inline-block"
          style={{
            background: "#f0e5ff",
            fontSize: "12px",
            color: "#7b44d6",
          }}
        >
          FREQUENCYCHAIN.ORG COMMUNITY
        </span>

        <h1 className="fw-bold mt-3 hero-title"
            style={{ fontSize: "clamp(28px, 4vw, 50px)" }}>
          Built by the community
        </h1>

        <p className=" mt-3" 
             style={{
          color: theme === "dark" ? "#ffffff" : "#5a5353ff",
          transition: "0.3s",
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos nemo dolor quas?
        </p>

        <p     style={{
          color: theme === "dark" ? "#ffffff" : "#5a5353ff",
          transition: "0.3s",
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit, saepe deserunt voluptate ipsam aliquid.
        </p>

        <p className="mb-4"     style={{
          color: theme === "dark" ? "#ffffff" : "#5a5353ff",
          transition: "0.3s",
        }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, consectetur.
        </p>

        {/* BUTTONS RESPONSIVE WRAP */}
        <div className="d-flex flex-wrap align-items-center gap-3">

          <button
            className="btn fw-semibold text-white"
            style={{
              background: "#7b44d6",
              padding: "10px 22px",
              borderRadius: "10px",
            }}
          >
            More on frequencychain.org →
          </button>

          {/* Icon Buttons */}
          <button
            className="btn btn-light shadow-sm d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              border:'1px solid gray'
            }}
          >
            <i className="bi bi-discord" style={{ fontSize: "22px",}}></i>
          </button>

          <button
            className="btn btn-light shadow-sm d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
                border:'1px solid gray'
            }}
          >
            <i className="bi bi-github" style={{ fontSize: "22px" }}></i>
          </button>

        </div>

        {/* NEXT CALLS CARD */}
        <div
          className="p-4 rounded-4 mt-5 shadow-sm w-100"
          style={{
            border: "1px solid #eee",
            maxWidth: "100%", // Full width on mobile
          }}
        >
          <h6 className="fw-semibold d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-calendar3"></i> Next calls
          </h6>

          {/* Item 1 */}
          <div className="d-flex justify-content-between align-items-start py-3 border-bottom flex-wrap gap-3">
            <div className="flex-grow-1">
              <p className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
                QA session - frequencychain.org portal
              </p>
              <p className="small mb-0"     style={{
          color: theme === "dark" ? "#989292ff" : "#5a5353ff",
          transition: "0.3s",
        }}>
                December 10, 2025 at 5:45 PM
              </p>
            </div>

            <button className="btn btn-sm btn-outline-primary">
              Add to calendar
            </button>
          </div>

          {/* Item 2 */}
          <div className="d-flex justify-content-between align-items-start py-3 flex-wrap gap-3">
            <div className="flex-grow-1">
              <p className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
                frequencychain.org Community - December 2025
              </p>
              <p className="small mb-0"     style={{
          color: theme === "dark" ? "#989292ff" : "#5a5353ff",
          transition: "0.3s",
        }}>
                December 18, 2025 at 5:00 PM
              </p>
            </div>

            <button className="btn btn-sm btn-outline-primary">
              Add to calendar
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 text-center">
        <img
          src="https://images.pexels.com/photos/8370751/pexels-photo-8370751.jpeg"
          alt="Community illustration"
          className="img-fluid rounded-4 shadow-sm community-img"
          style={{
            width: "100%",
            maxWidth: "500px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  </div>
</section>

   <Blog />
   <Events />

                           {/* JOIN FRECX SECTION */}



 <section className="py-5 gradient-box"
      // style={{
      //   background: "linear-gradient(180deg, #E8DDFD 0%, white 100%)",
      //   borderRadius: "24px",
      // }}
    >
      <div className="container text-center">

        {/* Title */}
        <h1 className="fw-bold mb-4 hero-title" >
          Join frequencychain.org
        </h1>

        <p className="mb-5" style={{ fontSize: "17px", maxWidth: "700px", margin: "0 auto" }}>
          This website is open source with hundreds of community contributors.
          You can propose edits to any of the content on this site.
        </p>

        {/* Content Grid */}
        <div className="row justify-content-center gy-5 mt-4">

          {/* How to Contribute */}
          <div className="col-md-5 d-flex">
            <div className="d-flex align-items-start gap-3 text-start">
              <div
                
                className="d-flex justify-content-center align-items-center topic-icon" 
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="icon"
                  width="38"
                />
              </div>

              <div>
                <h5 className="fw-bold text-success">How to contribute</h5>
                <p className=" mb-0"
                 style={{
           color: theme === "dark" ? "#ffff" : "#766464ff",
          transition: "0.3s",
        }}>
                  Find out all the different ways you can help ethereum.org grow and be better.
                </p>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-md-5 d-flex">
            <div className="d-flex align-items-start gap-3 text-start">
              <div
                className="d-flex justify-content-center align-items-center topic-icon"
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  width="38"
                />
              </div>

              <div>
                <h5 className="fw-bold" style={{color:'#4371F2'}}>GitHub</h5>
                <p className="mb-0"
                 style={{
           color: theme === "dark" ? "#ffff" : "#766464ff",
          transition: "0.3s",
        }}>
                  Contribute to code, design, articles, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Discord */}
          <div className="col-md-5 d-flex">
            <div className="d-flex align-items-start gap-3 text-start">
              <div className="d-flex justify-content-center align-items-center topic-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                  alt="discord"
                  width="38"
                />
              </div>

              <div>
                <h5 className="fw-bold" style={{color:'#9357F4'}}>Discord</h5>
                <p className=" mb-0" 
                 style={{
           color: theme === "dark" ? "#ffff" : "#766464ff",
          transition: "0.3s",
        }}>
                  To ask questions, coordinate contribution and join community calls.
                </p>
              </div>
            </div>
          </div>

          {/* X (Twitter) */}
          <div className="col-md-5 d-flex">
            <div className="d-flex align-items-start gap-3 text-start">
              <div className="d-flex justify-content-center align-items-center topic-icon">
                <img
                  src={X}
                  alt="x"
                  width="38"
                />
              </div>

              <div>
                <h5 className="fw-bold" style={{color:'#FF52BD'}}>X</h5>
                <p className=" mb-0" 
                 style={{
           color: theme === "dark" ? "#ffff" : "#766464ff",
          transition: "0.3s",
        }}>
                  To keep up with our updates and important news.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
