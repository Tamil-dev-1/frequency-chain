import React from 'react'
import './ourproduct.css'
import ProductSlider from '../../component/productSlider/ProductSlider'
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


const Ourbrand = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div>
       <section
      className="py-5 round"
      style={{ background: "#0d0f16" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* LEFT SIDE TEXT */}
          <div className="col-lg-5 col-md-6 col-12 text-white mb-5 mb-md-0">
            <h1 className="fw-bold mb-3">
              Build  Secure Manage Make an impact{" "}
              <span
                style={{
                  background: "#1f1f1f",
                  padding: "6px 12px",
                  borderRadius: "50px",
                  fontSize: "22px",
                }}
              >
                🌱
              </span>
            </h1>

            <p className="text-white-50 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit.
            </p>

            <p className="text-white-50">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!
            </p>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center position-relative">

            {/* MAIN IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="people"
              className="img-fluid"
              style={{
                width: "260px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "20px",
                zIndex: 3,
              }}
            />

            {/* BACK IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="forest"
              className="img-fluid d-none d-md-block"
              style={{
                width: "220px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "20px",
                position: "absolute",
                bottom: "-30px",
                right: "-40px",
                zIndex: 1,
              }}
            />

            {/* TOP RIGHT SHAPE */}
            <div
              className="d-none d-md-block"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "4px solid #a3ff75",
                position: "absolute",
                top: "20px",
                right: "-30px",
                borderTop: "none",
                borderLeft: "none",
              }}
            />

            {/* LEFT BOTTOM SHAPE */}
            <div
              className="d-none d-md-block"
              style={{
                width: "60px",
                height: "60px",
                borderLeft: "3px solid #8bc6ff",
                borderBottom: "3px solid #8bc6ff",
                position: "absolute",
                bottom: "10px",
                left: "-20px",
                transform: "rotate(20deg)",
              }}
            />
          </div>

        </div>
      </div>
    </section>

                                {/* SECTION --------- 2 */}

                    <ProductSlider />



                  {/* <div className="container py-5">

      <h1 className="fw-bold mb-4">Our products</h1>

      <div className="row g-4">

      
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img purple-bg">
              <img
                src="https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
                alt="VeWorld"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, doloribus!
              </p>
            </div>
          </div>
        </div>

       
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img blue-bg">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                alt="VeBetter"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 2</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, officia.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-lg-4">
          <div className="product-card">
            <div className="product-img dark-bg">
              <img
                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
                alt="Stargate"
                className="img-fluid product-inner-img"
              />
            </div>

            <div className="product-content">
              <h3 className="fw-bold">Product 3</h3>
              <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quisquam!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>      */}
                               {/* SECTION -------- 3          */}

                <div className="py-5" style={{ backgroundColor: "#0f0f13" }}>
      {/* Title */}
      <h2
        className="text-center mb-5"
        style={{ color: "#fff", fontWeight: 600 }}
      >
        FrequencyChain Stats that drive a difference in the world
      </h2>

      {/* Wrapper 65% width align center */}
      <div className="container" style={{ width: "65%"}}>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#c8baff",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h5 style={{ color: "#232323", fontWeight: 500 }}>
                Rewarded Sustainable Actions
              </h5>
              <h1 style={{ fontWeight: 700 }}>1M</h1>
              {/* <small>/Week</small> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#f3f3f5",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h5 style={{color: theme === "dark" ? "#0F0F13" : "#0F0F13",transition: "0.3s",fontWeight: 500 }}>
                Applications Built
              </h5>
              <h1 style={{color: theme === "dark" ? "#0F0F13" : "#0F0F13",transition: "0.3s", fontWeight: 700 }}>350</h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#f3f3f5",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h5 style={{color: theme === "dark" ? "#0F0F13" : "#0F0F13",transition: "0.3s", fontWeight: 500 }}>
                Total Staked
              </h5>
              <h1 style={{color: theme === "dark" ? "#0F0F13" : "#0F0F13",transition: "0.3s", fontWeight: 700 }}>5.8B</h1>
              {/* <small>VET</small> */}
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#c8baff",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h5 style={{ color: "#232323", fontWeight: 500 }}>
                Rewards Distributed
              </h5>
              <h1 style={{ fontWeight: 700 }}>242.9M</h1>
              {/* <small>VTHO</small> */}
            </div>
          </div>
        </div>
      </div>
    </div>         

                                  {/* SECTION -------- 4       */}

    <div className="py-5">

  {/* Section Title */}
  <h2
    className="text-center hero-title mb-5"
    style={{
      fontWeight: 700,
      fontSize: "clamp(28px, 4vw, 42px)",
      color: "#000",
    }}
  >
    Explore Our Apps
  </h2>

  {/* Responsive Container */}
  <div className="container">
    <div className="row g-4 justify-content-center">

      {/* CARD 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#000",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg"
              alt="App-1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
              background: "#f8f8f8",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{ fontWeight: 600 }}>App-1</h4>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#000",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
              alt="App-2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
              background: "#f8f8f8",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{ fontWeight: 600 }}>App-2</h4>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#0053ff",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              height: "clamp(200px, 30vw, 260px)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
              alt="App-3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="p-4"
            style={{
              background: "#f8f8f8",
              borderRadius: "0 0 24px 24px",
              minHeight: "200px",
            }}
          >
            <h4 style={{ fontWeight: 600 }}>App-3</h4>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
        

                                     {/* SECTION ------- 5          */}

                <div className="d-flex justify-content-center my-5">
      <div
        className="w-75 p-5 position-relative round"
        style={{
          backgroundColor: "#0d5550",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Text */}
        <h2 style={{ fontSize: "38px", fontWeight: 600,color:"#ffff" }}>
          Ready to start making your impact?
        </h2>

        {/* Button */}
        <button
          className="btn btn-light mt-4 px-4 py-2 d-inline-block"
          style={{
            borderRadius: "30px",
            fontWeight: 500,
            fontSize: "16px",
            display:"inline-block",
          }}
        >
          Start building
        </button>

        {/* Decorative curved lines (Right side) */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/7698/7698640.png"
          alt="pattern"
          className="position-absolute"
          style={{
            width: "300px",
            opacity: 0.25,
            right: "-30px",
            top: "10px",
          }}
        />
      </div>
    </div>                        
    </div>
  )
}

export default Ourbrand
