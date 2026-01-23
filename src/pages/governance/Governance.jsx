import React from "react";
import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";

const GovernanceSection = () => {
   const {theme} = useContext(ThemeContext);
  return (
    <>
    <section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
    // minHeight: "70vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div className="container">
    <div className="row align-items-center justify-content-between">

      {/* LEFT CONTENT */}
      <div className="col-lg-6 col-md-7 text-white mb-5 mb-lg-0">
        <h1 className="fw-bold mb-3" style={{ fontSize: "3rem",color: theme === "dark" ? "#ffffff" : "#111111", }}>
          <span className="hero-title">Have your say</span>{" "}
          <span className=" mx-1 text-info"><BsFillRocketTakeoffFill /></span>{" "}
          <span className="hero-title">on the future</span>{" "}
          <span className="mx-1 text-danger"><HiSpeakerphone /></span>{" "}
          
          <span className="hero-title">of FrequencyChain</span>
        </h1>

        <p className="text-secondary fs-5 mt-4" style={{ maxWidth: "520px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vitae possimus animi tempore voluptas ullam labore placeat perspiciatis alias libero.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="col-lg-5 col-md-5">
        <div
          className="position-relative rounded-4 overflow-hidden"
          style={{
            height: "420px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            className="position-absolute bottom-0 w-100 p-4"
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(0,0,0,0.55)",
            }}
          >
            <div className="text-white mb-3 d-flex align-items-center gap-2">
              📊 <span className="fw-semibold">Voting results</span>
            </div>

            {/* Progress Bar */}
            <div className="progress mb-3" style={{ height: "6px" }}>
              <div
                className="progress-bar"
                style={{ width: "79%", backgroundColor: "#fff" }}
              />
            </div>

            {/* Stats */}
            <div className="d-flex justify-content-between text-white small mb-3">
              <span>👍 79%</span>
              <span>🚫 8%</span>
              <span>👎 13%</span>
            </div>

            {/* Button */}
            <button className="btn btn-light w-100 fw-semibold rounded-pill">
              Vote for project
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    {/* SECTION ----- 2 */}

<section className="py-5"
style={{ background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",}}>
  <div className="container">

    {/* TITLE */}
    <div className="row mb-5">
      <div className="col-12">
        <h2
          className="fw-semibold"
          style={{ fontSize: "2.8rem",color: theme === "dark" ? "#ffffff" : "#111111"}}
        >
          About Governance
        </h2>
      </div>
    </div>

    {/* CARDS */}
    <div className="row g-4">

      {/* CARD 1 */}
      <div className="col-lg-4 col-md-6" >
        <div
          className="h-100 p-4 rounded-4"
          style={{
            background: theme === "dark" ? "#001F3D" : "#F5F5F5",
            // background: "#f6f7f9",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div className="mb-4">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "48px",
                height: "48px",
                background: "#0b0e14",
                color: "#b7f36b",
                fontSize: "20px",
              }}
            >
              ✳
            </div>
          </div>

          <h5 className="fw-semibold mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>
            Why community-led Governance?
          </h5>

          <p className="text-secondary mb-0" style={{ lineHeight: "1.7" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam mollitia hic doloribus rerum dolores eos exercitationem sunt ea! Aut repellat autem exercitationem. Voluptas, ea consectetur!
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6">
        <div
          className="h-100 p-4 rounded-4"
          style={{
             background: theme === "dark" ? "#001F3D" : "#F5F5F5",
            // background: "#f6f7f9",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div className="mb-4">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "48px",
                height: "48px",
                background: "#0b0e14",
                color: "#b7f36b",
                fontSize: "20px",
              }}
            >
              ◐
            </div>
          </div>

          <h5 className="fw-semibold mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>
            How can I get involved?
          </h5>

          <p className="text-secondary mb-0" style={{ lineHeight: "1.7" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae ex impedit, enim natus consectetur vero ducimus!
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-12">
        <div
          className="h-100 p-4 rounded-4"
          style={{
             background: theme === "dark" ? "#001F3D" : "#F5F5F5",
            // background: "#f6f7f9",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div className="mb-4">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "48px",
                height: "48px",
                background: "#0b0e14",
                color: "#b7f36b",
                fontSize: "20px",
              }}
            >
              ⬣
            </div>
          </div>

          <h5 className="fw-semibold mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>
            How do I qualify to vote in Governance?
          </h5>

          <p className="text-secondary mb-0" style={{ lineHeight: "1.7" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quibusdam error, velit tempore delectus inventore, deleniti molestias iure non aspernatur impedit, quia ipsa dolore mollitia blanditiis?
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  

      {/* SECTION ------ 3 */}


    <section className="py-5" style={{
      background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
    }}>
  <div className="container">

    <div className="row text-center gy-5">

      {/* ITEM 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column align-items-center px-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "56px",
              height: "56px",
              background: "#e9fbf7",
              color: "#0b0e14",
              fontSize: "22px",
            }}
          >
            ⦿
          </div>

          <h6 className="fw-semibold mb-2">Decentralization</h6>

          <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, nam odio.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column align-items-center px-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "56px",
              height: "56px",
              background: "#eef9dc",
              color: "#0b0e14",
              fontSize: "22px",
            }}
          >
            👁
          </div>

          <h6 className="fw-semibold mb-2">Transparency</h6>

          <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, aliquam?
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column align-items-center px-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "56px",
              height: "56px",
              background: "#f2f1ff",
              color: "#0b0e14",
              fontSize: "22px",
            }}
          >
            ↗
          </div>

          <h6 className="fw-semibold mb-2">Upgrades</h6>

          <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi!
          </p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column align-items-center px-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "56px",
              height: "56px",
              background: "#eaf9ef",
              color: "#0b0e14",
              fontSize: "22px",
            }}
          >
            ⛓
          </div>

          <h6 className="fw-semibold mb-2">Alignment</h6>

          <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, rerum.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


     {/* SECTION ------ 4 */}


    <section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
>
  <div className="container">

    {/* TITLE */}
    <div className="row mb-5">
      <div className="col-12">
        <h2 className="fw-semibold" style={{ fontSize: "2.6rem",color: theme === "dark" ? "#ffffff" : "#111111", }}>
          How Governance works
        </h2>
      </div>
    </div>

    {/* GRID */}
    <div className="row g-4">

      {/* STEP 01 */}
      <div className="col-lg-4">
        <div className="h-100 p-4 rounded-4 step-card">
          <span className="step-badge">01</span>

          <h5 className="fw-semibold mt-4 mb-2" style={{color: theme === "dark" ? "#ffffff" : "#ffffff",}}>Support phase</h5>
          <p className="text-secondary mb-0">
            An idea is shared on Discourse, ideally evolving into a VIP.
            At this stage, the proposal needs to gather support from the
            community.
          </p>
        </div>
      </div>

      {/* STEP 02 */}
      <div className="col-lg-4">
        <div className="h-100 p-4 rounded-4 step-card">
          <span className="step-badge">02</span>

          <h5 className="fw-semibold mt-4 mb-2" style={{color: theme === "dark" ? "#ffffff" : "#ffffff",}}>Proposal creation</h5>
          <p className="text-secondary mb-0">
            A new proposal is created, linking the relevant Discourse
            discussion and related VIPs. Only whitelisted accounts can
            create proposals to protect on-chain governance.
          </p>
        </div>
      </div>

      {/* STEP 03 */}
      <div className="col-lg-4">
        <div className="h-100 p-4 rounded-4 step-card">
          <span className="step-badge">03</span>

          <h5 className="fw-semibold mt-4 mb-2" style={{color: theme === "dark" ? "#ffffff" : "#ffffff",}}>Promotion phase</h5>
          <p className="text-secondary mb-0">
            The new proposal is announced and promoted on social media
            through VeChain’s official channels.
          </p>
        </div>
      </div>

      {/* STEP 04 */}
      <div className="col-lg-6">
        <div className="h-100 p-4 rounded-4 step-card">
          <span className="step-badge">04</span>

          <h5 className="fw-semibold mt-4 mb-2" style={{color: theme === "dark" ? "#ffffff" : "#ffffff",}}>Approval phase</h5>
          <p className="text-secondary mb-0">
            Community members vote on the proposal. If quorum is reached
            and the majority votes in favor, the proposal is approved and
            publicly announced.
          </p>
        </div>
      </div>

      {/* STEP 05 */}
      <div className="col-lg-6">
        <div className="h-100 p-4 rounded-4 step-card">
          <span className="step-badge">05</span>

          <h5 className="fw-semibold mt-4 mb-2">Execution phase</h5>
          <p className="text-secondary mb-0">
            VeChain or designated entities execute the proposal. Once
            completed, it is marked as Executed with proof such as a
            transaction or block explorer link.
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* INLINE PREMIUM STYLES */}
  <style>{`
    .step-card {
      background: radial-gradient(
        120% 120% at 0% 0%,
        #151925 0%,
        #0d1018 60%
      );
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .step-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 30px 70px rgba(0,0,0,0.6);
    }

    .step-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #1b202c;
      color: #b7f36b;
      font-size: 14px;
      font-weight: 600;
    }

    .text-secondary {
      color: #a1a6b3 !important;
      line-height: 1.7;
    }
  `}</style>
</section>


   {/* SECTION ------ 5  */}

 <section
  className="py-5"
  style={{
    background: theme === "dark" ? "#000000" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#111111",
    transition: "0.3s",
  }}
>
  <div className="container">

    {/* HEADER */}
    <div className="row justify-content-center mb-5 text-center">
      <div className="col-lg-8">
        <h2
          className="fw-semibold mb-2"
          style={{ color: theme === "dark" ? "#ffffff" : "#111111" }}
        >
          Governance FAQs – What you need to know
        </h2>
        <p style={{ color: theme === "dark" ? "#b5b5b5" : "#6c757d" }}>
          Get answers to commonly asked questions about governance on FrequencyChain
        </p>
      </div>
    </div>

    {/* FAQ */}
    <div className="row justify-content-center">
      <div className="col-lg-8">

        <div className="accordion premium-faq" id="governanceFaq">

          {[
            {
              q: "What is VeVote?",
              a: "VeVote is the official governance platform that enables the FrequencyChain community to participate in protocol decisions through transparent on-chain voting."
            },
            {
              q: "Who can vote?",
              a: "Voting is open to eligible participants such as token holders, validators, and node operators who meet governance requirements."
            },
            {
              q: "How is voting power calculated?",
              a: "Voting power is based on token stake, node participation, and governance role to ensure fair decision-making."
            },
            {
              q: "Who can submit proposals?",
              a: "Only approved or whitelisted accounts can submit governance proposals to maintain quality and security."
            },
            {
              q: "What is the Quorum?",
              a: "Quorum is the minimum participation threshold required for a proposal to be considered valid."
            },
            {
              q: "What voting options are available?",
              a: "Participants can vote in favor, against, or abstain depending on proposal type."
            },
            {
              q: "How is my voting power applied?",
              a: "Once submitted, voting power is applied proportionally and recorded immutably on-chain."
            },
            {
              q: "Can I change my vote after submitting?",
              a: "Votes are final once recorded on-chain and cannot be modified."
            },
            {
              q: "Are proposals executed automatically?",
              a: "Some proposals execute automatically via smart contracts, while others require off-chain execution."
            },
            {
              q: "What language should proposals be written in?",
              a: "All proposals must be written in English for global accessibility."
            }
          ].map((item, index) => (
            <div className="accordion-item mb-3" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button collapsed ${
                    theme === "dark" ? "dark-accordion-btn" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                >
                  {item.q}
                </button>
              </h2>

              <div
                id={`faq-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#governanceFaq"
              >
                <div
                  className="accordion-body"
                  style={{
                    color: theme === "dark" ? "#d1d1d1" : "#6c757d",
                  }}
                >
                  {item.a}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>

  {/* PREMIUM STYLES */}
  <style>{`
    .premium-faq .accordion-item {
      border: 1px solid ${theme === "dark" ? "#1f1f1f" : "#cfd3dc"};
      border-radius: 12px;
      overflow: hidden;
      background: ${theme === "dark" ? "#0b0b0b" : "#ffffff"};
    }

    .premium-faq .accordion-button {
      padding: 18px 20px;
      font-weight: 500;
      background: transparent;
      box-shadow: none;
    }

    /* 🔥 DARK THEME TEXT FIX */
    .premium-faq .dark-accordion-btn {
      color: #ffffff !important;
    }

    .premium-faq .dark-accordion-btn:not(.collapsed) {
      color: #ffffff !important;
    }

    .premium-faq .accordion-button::after {
      filter: ${theme === "dark" ? "invert(1)" : "none"};
    }

    .premium-faq .accordion-body {
      font-size: 0.95rem;
      line-height: 1.7;
    }
  `}</style>
</section>



   
   {/* SECTION ------ END */}

   

    
    </>
  );
};

export default GovernanceSection;
