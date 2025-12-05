import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Blog.css';
export default function Blog() {
  const posts = [
    {
      img: "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg",
      title: "Solidity 0.8.31 Release Announcement",
      date: "December 3, 2025",
      category: "SOLIDITY LANG BLOG",
      solidLogo: true,
    },
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      title: "Allocation Update - Q3 2025",
      date: "December 2, 2025",
      category: "ETHEREUM FOUNDATION BLOG",
    },
    {
      img: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      title: "Plinko PIR tutorial",
      date: "November 25, 2025",
      category: "VITALIK BUTERIN'S WEBSITE",
    },
    {
      img: "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg",
      title: "New Research on Scalability",
      date: "November 21, 2025",
      category: "ETHEREUM RESEARCH",
    },
  ];

  // Group posts into chunks of 3
  const chunk = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  const slides = chunk(posts, 3);

  return (
    <section className="py-5">
      <div className="container">

        {/* Section Title */}
        <h2 className="fw-bold" style={{ fontSize: "42px" }}>
          Recent posts
        </h2>
        <p className="text-muted fs-5 mb-4">
          The latest blog posts and updates from the community
        </p>

        {/* Bootstrap Carousel */}
        <div id="recentPostsCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            {slides.map((slide, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className="row g-4">
                  {slide.map((post, i) => (
                    <div className="col-lg-4 col-md-6" key={i}>
                      <div className="p-2">

                        {/* Image */}
                        <div
                          className="mb-3 d-flex justify-content-center align-items-center"
                          style={{
                            background: post.solidLogo ? "transparent" : "#f5f5ff",
                            borderRadius: "16px",
                            height: "200px",
                          }}
                        >
                          <img
                            src={post.img}
                            alt={post.title}
                            className="carousel-card-img"
                            style={{
                              width: post.solidLogo ? "55%" : "100%",
                              objectFit: post.solidLogo ? "contain" : "cover",
                            }}
                          />
                        </div>

                        {/* Title */}
                        <h5 className="fw-bold">{post.title}</h5>

                        {/* Date */}
                        <p className="fst-italic text-muted mb-1">{post.date}</p>

                        {/* Category */}
                        <small className="text-muted fw-semibold">
                          {post.category}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* Controls */}
          <div className="text-center mt-3">
            <button
              className="carousel-control-prev position-relative d-inline me-3"
              type="button"
              data-bs-target="#recentPostsCarousel"
              data-bs-slide="prev"
              style={{ width: "40px" }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button
              className="carousel-control-next position-relative d-inline"
              type="button"
              data-bs-target="#recentPostsCarousel"
              data-bs-slide="next"
              style={{ width: "40px" }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
