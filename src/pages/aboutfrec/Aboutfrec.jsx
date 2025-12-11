import React from 'react'
import Individuals from '../../component/aboutFrecX/Individuals';

const Aboutfrec = () => {


  const features = [
    {
      icon: "↕️",
      bg: "#E6F8E9",
      title: "Scalable",
      desc: "Over 530 million transactions with 100% uptime since 2017."
    },
    {
      icon: "🛡️",
      bg: "#EFEAFF",
      title: "Secure",
      desc: "350+ applications built on VeChain."
    },
    {
      icon: "⚡",
      bg: "#F3FCE2",
      title: "Fast",
      desc: "Trusted by leading global brands."
    },
    {
      icon: "💲",
      bg: "#E4FAF5",
      title: "Compliant",
      desc: "Aligned with global standards and regulatory requirements."
    },
    {
      icon: "💜",
      bg: "#F3E9FF",
      title: "Purpose-led",
      desc: "Designed to measure and reward real-world impact."
    }
  ];




   const items = [
    {
      title: "Prove Your Impact with Confidence",
      desc: "Prove sustainability and ESG performance with verifiable on-chain data.",
      img: "/images/prove.jpg",
    },
    {
      title: "Proven Blockchain Solutions",
      desc: "Technology to manage supply chains, sustainability, and beyond.",
      img: "/images/bot.png",
    },
    {
      title: "Compliance & Confidence",
      desc: "Built-for-purpose infrastructure aligned with MiCAR and ESMA standards.",
      img: "/images/compliance.jpg",
    },
    {
      title: "Integrate with Ease",
      desc: "Seamlessly connect systems and blockchain using enterprise-ready APIs.",
      img: "/images/desk.jpg",
    },
    {
      title: "ESG Tracking",
      desc: "Build stronger customer relationships through purpose-driven gamification.",
      img: "/images/esg.jpg",
    },
    {
      title: "Trusted by Global Leaders",
      desc: "Chosen by global brands to power verified, real-world applications.",
      img: "/images/leader.jpg",
    },
  ];
  return (
    <div>
      <section
      className="py-5"
      style={{ background: "#0d0f16" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* LEFT SIDE TEXT */}
          <div className="col-lg-5 col-md-6 col-12 text-white mb-5 mb-md-0">
            <h1 className="fw-bold mb-3">
              Lorem, ipsum.{" "}
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

                  {/* SECTION =========  2 */}

    <section className="py-5 bg-white">
      <div className="container">

        <div className="row text-center justify-content-between">

          {features.map((item, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4"
            >
              {/* ICON */}
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

              {/* TITLE */}
              <h5 className="fw-semibold mb-2">{item.title}</h5>

              {/* DESCRIPTION */}
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>



                         {/* SECTION ====== 3 */}                    

     <Individuals  title="For Individuals" />            
        

                            {/* SECTION ====== 4 */}
<section style={{ background: "#0B0D12" }} className="py-5">
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">
          Why Frequency Chain?
        </h2>

        {/* ROW 1 */}
        <div className="row g-4">

          {/* BOX 1 - TEXT ONLY */}
          <div className="col-lg-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "#181B21", color: "#fff" }}
            >
              <h4 className="fw-bold">Prove Your Impact with Confidence</h4>
              <p className="mt-2">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?
              </p>
            </div>
          </div>

          {/* BOX 2 - IMAGE ONLY */}
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

          {/* BOX 3 - TEXT ONLY */}
          <div className="col-lg-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "#181B21", color: "#fff" }}
            >
              <h4 className="fw-bold">Compliance & Confidence</h4>
              <p className="mt-2">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row g-4 mt-4">

          {/* BOX 4 - IMAGE ONLY */}
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

          {/* BOX 5 - TEXT ONLY */}
          <div className="col-lg-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "#181B21", color: "#fff" }}
            >
              <h4 className="fw-bold">ESG Tracking</h4>
              <p className="mt-2">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, rem?
              </p>
            </div>
          </div>

          {/* BOX 6 - IMAGE ONLY */}
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
                                 {/* SECTION ===== 5 */}


                                  <section className="py-5">
      <div className="container">

        {/* TITLE */}
        <h2 className="fw-bold mb-4">Our products</h2>

        {/* ROW */}
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="https://frequencyev.com/wp-content/uploads/2025/04/Section-6-other-image-1.png"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product1</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="/https://frequencyev.com/wp-content/uploads/2025/04/Section-6-other-image-4.png"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product2</h5>
                <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="/images/stargate.jpg"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product3</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="/images/maas.jpg"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product4</h5>
                <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="/images/vorj.jpg"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product5</h5>
                <p className="mb-0">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!
                </p>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="col-lg-4 col-md-6">
            <div className="rounded-4 shadow-sm overflow-hidden bg-white h-100">
              <img
                src="/images/pop.jpg"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="p-4">
                <h5 className="fw-bold">Product5</h5>
                <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae itaque quos possimus!
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

export default Aboutfrec
