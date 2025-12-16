import React from "react";
import { FaSearch } from "react-icons/fa";
import Carousel from '../blog/Carousel'
import BuilderCarousel from "./BuilderCaousel";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import './Blog.css';


export default function Blog() {

  const {theme} = useContext(ThemeContext);
  return (
    <>
                           {/* section --------- 1 */}
    <div className="container py-4">
      <div
        className="d-flex align-items-center gap-3 flex-wrap"
       
      >
        {/* Search Input */}
        <div className="d-flex align-items-center px-3 border rounded"
          style={{ height:'44px', }}
        >
          <FaSearch size={16} color="#3b5cff" className="me-2" />
          <input
            type="text"
            className="form-control border-0 shadow-none p-0 search-input"
            placeholder="Search blog"
            style={{ width: "200px", background: "transparent",color: theme === "dark" ? "#fff" : "#111",}}
          />
        </div>

        {/* Category Dropdown */}
        <select
          className="form-select"
          style={{ width:"180px", height: "44px",color: theme === "dark" ? "#fff" : "#111", background: theme === "dark" ? "transparent" : "transparent" }}
        >
          <option>Category</option>
        </select>

        {/* Services Dropdown */}
        <select
          className="form-select"
          style={{ width: "180px", height: "44px",color: theme === "dark" ? "#fff" : "#111", background: theme === "dark" ? "transparent" : "transparent" }}
        >
          <option>Services</option>
        </select>

        {/* Tags Dropdown */}
        <select
          className="form-select"
          style={{ width: "180px", height: "44px",color: theme === "dark" ? "#fff" : "#111", background: theme === "dark" ? "transparent" : "transparent" }}
        >
          <option>Tags</option>
        </select>

        {/* Search Button */}
        <button
          className="btn"
          style={{
            height: "44px",
            border: "2px solid #3b5cff",
            color: "#3b5cff",
            padding: "0 24px",
            borderRadius: "6px",
          }}
        >
          Search
        </button>

        {/* Clear All */}
        <a
          href="#"
          className="ms-2"
          style={{
            color: "#3b5cff",
            textDecoration: "underline",
            fontWeight: "500",
          }}
        >
          Clear all
        </a>
      </div>
    </div>
                                      {/* section ------- 2 */}


    <div className="container" style={{paddingTop:"100px"}}>

  {/* ================= FEATURED LEFT + TRENDING RIGHT ================= */}
  <div className="row mb-5">

    {/* LEFT FEATURED CARD */}
    <div className="col-lg-7 mb-5">
      <div className="position-relative">

        {/* Main Image */}
        <img
          src="https://images.pexels.com/photos/3970329/pexels-photo-3970329.jpeg"
          className="img-fluid rounded"
          alt="featured"
        />

        {/* Overlay card for Desktop */}
        <div
          className="d-none d-lg-block position-absolute p-4 shadow rounded"
          style={{
            bottom: "-40px",
            left: "40px",
            width: "85%",
            background: theme === "dark" ? "#151A2D" : "#fff",
            color: theme === "dark" ? "#ffff" : "#000000"
          }}
        >
          <h4 className="fw-bold mb-2" style={{color: theme === "dark" ? "#ffff" : "#000000"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima.
          </h4>
          <p className="mb-2" style={{ fontSize: "14px", color: theme === "dark" ? "#a19595ff" : "#000000"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores. Laudantium?
          </p>
          <span className="badge bg-light text-dark me-2">Announcements</span>
          <span className="text-muted small">29 min read</span>
        </div>

        {/* Overlay card for Mobile/Tablet */}
        <div className="d-block d-lg-none mt-3 p-3 bg-white shadow rounded">
          <h4 className="fw-bold mb-2" style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima.
          </h4>
          <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores. Laudantium?
          </p>
          <span className="badge bg-light text-dark me-2">Announcements</span>
          <span className="text-muted small">29 min read</span>
        </div>

      </div>
    </div>

    {/* RIGHT TRENDING LIST */}
    <div className="col-lg-5">
      {/* TRENDING TITLE WITH LINE */}
      <div className="d-flex align-items-center mb-4">
        <h6 className="text-primary fw-bold mb-0 me-3">TRENDING</h6>
        <div className="flex-grow-1" style={{ height: "1px", background: "#E5E7EB" }}></div>
      </div>

      {[ 
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Announcements",
          time: "29 min read"
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Announcements",
          time: "17 min read"
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Announcements",
          time: "11 min read"
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Vision",
          time: "39 min read"
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Announcements",
          time: "41 min read"
        }
      ].map((item, i) => (
        <div key={i} className="mb-4">
          <h6 className="fw-semibold" style={{color: theme === "dark" ? "#6C24E0" : "#001F82"}}>{item.title}</h6>
          <span className="badge text-dark me-2" style={{backgroundColor:'#DFE7FB'}}>{item.tag}</span>
          <span className="text-muted small">{item.time}</span>
          <div className="flex-grow-1" style={{ height: "1px", background: "#E5E7EB", marginTop:'10px' }}></div>
        </div>
      ))}
    </div>
  </div>

  {/* ================= VISION SECTION ================= */}
  {/* VISION TITLE WITH LINE */}
  <div className="d-flex align-items-center mb-4">
    <h6 className="text-primary fw-bold mb-0 me-3">VISION</h6>
    <div className="flex-grow-1" style={{ height: "1px", background: "#E5E7EB" }}></div>
  </div>

  <div className="row">
    {/* LEFT VISION LIST */}
    <div className="col-lg-7 mb-4">
      {[
        {
          img: "https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Vision",
          time: "9 min read"
        },
        {
          img: "https://images.pexels.com/photos/3095621/pexels-photo-3095621.jpeg",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Announcements",
          time: "12 min read"
        },
        {
          img: "https://images.pexels.com/photos/3944460/pexels-photo-3944460.jpeg",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Vision",
          time: "12 min read"
        },
        {
          img: "https://images.pexels.com/photos/3095621/pexels-photo-3095621.jpeg",
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore omnis et rem maiores.",
          tag: "Vision",
          time: "22 min read"
        }
      ].map((item, i) => (
        <div className="d-flex mb-4" key={i}>
          <img
            src={item.img}
            className="rounded me-3"
            width="180"
            height="100"
            alt="vision"
          />
          <div>
            <h6 className="fw-semibold mb-1" style={{color: theme === "dark" ? "#6C24E0" : "#001F82"}}>{item.title}</h6>
            <span className="badge  text-dark me-2" style={{backgroundColor:'#DFE7FB'}}>{item.tag}</span>
            <span className="text-muted small">{item.time}</span>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT NEWSLETTER BOX */}
    <div className="col-lg-5">
      <div className="p-4 rounded shadow-sm" style={{background: theme === "dark" ? "#1C1C1C" : "#fff"}} >
        <h5 className="fw-bold">Subscribe to the Missing Link</h5>
        <input
          className="form-control my-3"
          placeholder="Enter your email address"
        />
        <button className="btn btn-primary w-100 mb-3">Sign up</button>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="agree" />
          <label className="form-check-label small" htmlFor="agree" style={{color: theme === "dark" ? "#918686ff" : "#0c0b0bff"}}>
            Yes, I agree to receive email communications.
          </label>
        </div>
      </div>
    </div>
  </div>

  {/* extra bottom spacing */}
  <div style={{ height: "50px" }}></div>

</div>
  
                               {/* Carousel ------ section */}

                               <Carousel />

                               <BuilderCarousel />



                               {/* RECENT POST SECTION */}
                     <section style={{padding: "60px 0" }}>
      <div className="container d-flex justify-content-center">
        <div style={{ width: "60%" }}>
          <h2 className="text-center mb-5" style={{ color: theme === "dark" ? "#fff" : "#1b2765" }}>
            Most Recent
          </h2>

          {/* First Article */}
          <div className="mb-5">
            <h5 style={{ color: theme === "dark" ? "#fff" : "#1b2765" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sint?
            </h5>
            <div className="mb-3">
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: "#dbe1ff",
                  color: "#1b2765",
                  fontSize: "0.8rem",
                }}
              >
                Vision
              </span>{" "}
              <span className="text-muted" style={{fontSize:'13px'}}>November 21, 2025 · 12 min read</span>
            </div>
            <p style={{ color: "#4a4f63" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae porro obcaecati odit! Ratione alias repudiandae hic illo dignissimos, officia dicta! Eum cumque distinctio blanditiis veritatis voluptate neque voluptates magnam.
            </p>
            <hr style={{ borderColor: "#dfe3f0" }} />
          </div>

          {/* Second Article */}
           <div className="mb-5">
            <h5 style={{ color: theme === "dark" ? "#fff" : "#1b2765" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sint?
            </h5>
            <div className="mb-3">
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: "#dbe1ff",
                  color: "#1b2765",
                  fontSize: "0.8rem",
                }}
              >
                Vision
              </span>{" "}
              <span className="text-muted" style={{fontSize:'13px'}}>November 21, 2025 · 12 min read</span>
            </div>
            <p style={{ color: "#4a4f63" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae porro obcaecati odit! Ratione alias repudiandae hic illo dignissimos, veritatis voluptate neque voluptates magnam.
            </p>
            <hr style={{ borderColor: "#dfe3f0" }} />
          </div>

           {/* Third Article */}
           <div className="mb-5">
            <h5 style={{ color: theme === "dark" ? "#fff" : "#1b2765"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sint?
            </h5>
            <div className="mb-3">
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: "#dbe1ff",
                  color: "#1b2765",
                  fontSize: "0.8rem",
                }}
              >
                Vision
              </span>{" "}
              <span className="text-muted" style={{fontSize:'13px'}}>November 21, 2025 · 12 min read</span>
            </div>
            <p style={{ color: "#4a4f63" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae porro obcaecati odit! Ratione alias repudiandae hic illo dignissimos, 
            </p>
            <hr style={{ borderColor: "#dfe3f0" }} />
          </div>
           <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
        
          <button className="btn btn-outline-primary">Load More</button>
        </div>
        </div>
      </div>
    </section>      


                          {/* NEWS SUBSCRIBTION FORM       */}


                     <section className="py-5" style={{background: theme === "dark" ? "#000000" : "#fff"}}>
      <div className="container text-center">
        {/* Heading */}
        <h2 className="mb-4" style={{ color: theme === "dark" ? "#fff" : "#1a237e", fontWeight: "700" }}>
          Stay updated on the latest FrequencyChain news
        </h2>

        {/* Email input + Button */}
        <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            style={{ maxWidth: "400px" }}
          />
          <button className="btn btn-outline-primary">Sign up</button>
        </div>

        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="newsletterConsent"
          />
          <label
            className="form-check-label ms-2"
            htmlFor="newsletterConsent"
            style={{ fontSize: "0.9rem", color: "#555" }}
          >
            Yes, I agree to receive email communications from FrequencyChain.*
          </label>
        </div>
      </div>
    </section>     
    </>
  );
}
