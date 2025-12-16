import React, { useContext } from "react";
import Individuals from '../../component/aboutFrecX/Individuals';
import { ThemeContext } from "../../ThemeContext";

const Aboutfrec = () => {
  // ✅ Get theme from context
  const { theme } = useContext(ThemeContext);

  // Features array
  const features = [
    { icon: "↕️", bg: "#E6F8E9", title: "Scalable", desc: "Over 530 million transactions with 100% uptime since 2017." },
    { icon: "🛡️", bg: "#EFEAFF", title: "Secure", desc: "350+ applications built on FrequencyChain." },
    { icon: "⚡", bg: "#F3FCE2", title: "Fast", desc: "Trusted by leading global brands." },
    { icon: "💲", bg: "#E4FAF5", title: "Compliant", desc: "Aligned with global standards and regulatory requirements." },
    { icon: "💜", bg: "#F3E9FF", title: "Purpose-led", desc: "Designed to measure and reward real-world impact." },
  ];

  // Items array
  const items = [
    { title: "Prove Your Impact with Confidence", desc: "Prove sustainability and ESG performance with verifiable on-chain data.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
    { title: "Proven Blockchain Solutions", desc: "Technology to manage supply chains, sustainability, and beyond.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
    { title: "Compliance & Confidence", desc: "Built-for-purpose infrastructure aligned with MiCAR and ESMA standards.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
    { title: "Integrate with Ease", desc: "Seamlessly connect systems and blockchain using enterprise-ready APIs.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
    { title: "ESG Tracking", desc: "Build stronger customer relationships through purpose-driven gamification.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
    { title: "Trusted by Global Leaders", desc: "Chosen by global brands to power verified, real-world applications.", img: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg" },
  ];

  return (
    <div>

      {/* ====== SECTION 1: Hero ====== */}
      <section
        className="py-5"
       style={{
          background: theme === "dark" ? "#000000" : "#FADAEB",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* LEFT SIDE TEXT */}
            <div className="col-lg-5 col-md-6 col-12 mb-5 mb-md-0">
              <h1 className="fw-bold mb-3">
                Lorem, ipsum.{" "}
                <span
                  style={{
                    background: theme === "dark" ? "#1a2033" : "#1f1f1f",
                    padding: "6px 12px",
                    borderRadius: "50px",
                    fontSize: "22px",
                  }}
                >
                  🌱
                </span>
              </h1>
              <p className={theme === "dark" ? "text-white-50" : "text-dark-50"} mb-3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit.
              </p>
              <p className={theme === "dark" ? "text-white-50" : "text-dark-50"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum!
              </p>
            </div>

            {/* RIGHT SIDE IMAGES */}
            <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center position-relative">
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

      {/* ====== SECTION 2: Features ====== */}
      <section
        className=""
        data-theme={theme}
      style={{
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
          
        }}
      >
        <div className="container" style={{paddingTop:"200px",paddingBottom:"100px"}}>
          <div className="row text-center justify-content-between">
            {features.map((item, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: item.bg,
                    fontSize: "26px",
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="" style={{ fontSize: "14px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Individuals Component ====== */}
      <Individuals title="For Individuals" theme={theme} />

      {/* ====== SECTION 4 ====== */}
      <section
        className="py-5"
         style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{color: theme === "dark" ? "#ffffff" : "#111111",}}>Why Frequency Chain?</h2>
          <div className="row g-4">
            {/* Row 1 */}
            <div className="col-lg-4">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: theme === "dark" ? "#151A2D" : "#ffffff",
                  color: theme === "dark" ? "#ffffff" : "#111111",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:'column'
                }}
              >
                <h4 className="fw-bold" 
                style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}>
                  Prove Your Impact with Confidence</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7651627/pexels-photo-7651627.jpeg"
                  alt=""
                  className="img-fluid w-100"
                  style={{ height: "330px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: theme === "dark" ? "#151A2D" : "#ffffff",
                  color: theme === "dark" ? "#ffffff" : "#111111",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:'column'
                }}
              >
                <h4 className="fw-bold"
                 style={{ color: theme === "dark" ? "#ffffff" : "#111111", }}
                 >Compliance & Confidence</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row g-4 mt-4">
            <div className="col-lg-4">
              <div className="rounded-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7651803/pexels-photo-7651803.jpeg"
                  alt=""
                  className="img-fluid w-100"
                  style={{ height: "330px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: theme === "dark" ? "#151A2D" : "#ffffff",
                  color: theme === "dark" ? "#ffffff" : "#111111",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:'column'
                }}
              >
                <h4 className="fw-bold " style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}>ESG Tracking</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7688455/pexels-photo-7688455.jpeg"
                  alt=""
                  className="img-fluid w-100"
                  style={{ height: "330px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* ====== SECTION 5: Products ====== */}
      <section
        className="py-5"
       style={{
          background: theme === "dark" ? "#000000" : "#ffff",
          color: theme === "dark" ? "#ffffff" : "#111111",
          transition: "0.3s",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Our Products</h2>
          <div className="row g-4">
            {items.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="rounded-4 shadow-sm overflow-hidden h-100"
                  style={{
                    background: theme === "dark" ? "#151A2D" : "#ffffff",
                    color: theme === "dark" ? "#ffffff" : "#111111",
                  }}
                >
                  <img
                    src={item.img}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt=""
                  />
                  <div className="p-4">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Aboutfrec;
