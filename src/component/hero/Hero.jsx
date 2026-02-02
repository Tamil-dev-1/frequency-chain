import { motion } from "framer-motion";
import FcLogoCoin from "../../assets/images/herocoin/fcCoin.webp";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const HeroSection = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section
      style={{
        position: "relative",
        // minHeight: "100vh",
        // background: "#000",
        overflow: "hidden",
        background: theme === "dark" ? "#000000" : "linear-gradient(146deg, rgba(0,0,0,1) 0%, rgba(18,108,250,1) 50%, rgba(105,69,197,1) 100%)",
      color: theme === "dark" ? "#ffffff" : "#111111",
      transition: "0.3s",
      }}
    >
      {/* 🌌 BACKGROUND GLOWS */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, #00f7ff55, transparent 70%)",
          top: "-120px",
          left: "-120px",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        animate={{ x: [0, -120, 80, 0], y: [0, 100, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, #6f00ff55, transparent 70%)",
          bottom: "-160px",
          right: "-160px",
          filter: "blur(80px)",
        }}
      />

      {/* 🌟 MAIN WRAPPER */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="row w-100 align-items-center"
          style={{ rowGap: "40px" }}
        >
          {/* 📝 LEFT CONTENT */}
          <motion.div
            className="col-12 col-md-6 col-lg-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: "#fff" }}
          >
            <h1 className="display-4 fw-bold mb-3">
              Powering the Future of <br />
              <span style={{ color: "#00f7ff" }}>Blockchain</span>
            </h1>

            <p className="text-light fs-5 mb-4">
              Secure • Decentralized • Scalable
              <br />
              Build the next generation of Web3.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-info btn-lg px-4">
                Get Started
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Whitepaper
              </button>
            </div>
          </motion.div>

          {/* 🪙 RIGHT COIN */}
          <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
            <motion.div
              animate={{
                rotateY: 360, // ✅ NORMAL ROTATION (NO FLIP)
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "320px",
                height: "320px",
                perspective: "1200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.img
                src={FcLogoCoin}
                alt="FrequencyChain Coin"
                 loading="lazy"
                decoding="async"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  filter:
                    "drop-shadow(0 30px 60px rgba(0,247,255,0.45))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🎞️ GRAIN OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default HeroSection;
