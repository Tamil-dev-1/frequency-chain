import React from "react";
import './Event.css'
export default function Events() {
  const events = [
    {
      banner:
        "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
      title: "Frec Riyadh",
      date: "February 1–28, 2026",
      location: "RIYADH, KSA",
      badge: "View on YouTube →",
      badgeColor: "trans",
      bigText: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      banner:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      title: "FrecConf",
      date: "June 8–10, 2026",
      location: "NEW YORK, USA",
      badge: "Get Tickets",
      badgeColor: "#FFD500",
      bigText: "Lorem",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="fw-bold mb-2 hero-title">Events</h1>
        <p className="text-muted mb-5" style={{ maxWidth: "550px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, asperiores.
        </p>

        {/* Row */}
        <div className="row g-5">
          {events.map((item, i) => (
            <div className="col-lg-6" key={i}>
              {/* Banner */}
              <div
                className="p-4 d-flex flex-column justify-content-end"
                style={{
                  height: "240px",
                  borderRadius: "20px",
                  backgroundImage: `url(${item.banner})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  position: "relative",
                }}
              >
                {/* Large Text */}
                <h3
                  className="fw-bold"
                  style={{
                    whiteSpace: "pre-line",
                    lineHeight: "1.2",
                    maxWidth: "75%",
                  }}
                >
                  {item.bigText}
                </h3>

                {/* Badge Button */}
                <button
                  className="btn btn-sm mt-3 fw-semibold"
                  style={{
                    background: item.badgeColor,
                    borderRadius: "50px",
                    padding: "6px 18px",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.badge}
                </button>
              </div>

              {/* Title */}
              <h4 className="fw-bold mt-3">{item.title}</h4>

              {/* Date */}
              <p className="text-muted fst-italic mb-1">{item.date}</p>

              {/* Location */}
              <small className="text-uppercase text-secondary fw-semibold">
                {item.location}
              </small>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <button
            className="btn fw-semibold px-4 py-2"
            style={{
              background: "#7A3EF3",
              color: "#fff",
              borderRadius: "0px",
            }}
          >
            See all events →
          </button>
        </div>
      </div>
    </section>
  );
}
