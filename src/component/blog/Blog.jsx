import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogCarousel() {
  const { theme } = useContext(ThemeContext);

  const blogs = [
    {
      img: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      author: "John Doe",
      date: "14 Jan, 2024",
      title: "Premium UI trends that will shape the next decade",
    },
    {
      img: "https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg",
      author: "Sarah Smith",
      date: "22 Feb, 2024",
      title: "How modern branding works in a digital-first world",
    },
    {
      img: "https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg",
      author: "Anoop Kumar",
      date: "05 Mar, 2024",
      title: "Building scalable web apps with React & Cloud",
    },
    {
      img: "https://images.pexels.com/photos/8369764/pexels-photo-8369764.jpeg",
      author: "Emily Carter",
      date: "20 Mar, 2024",
      title: "Why storytelling matters for product design",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 hero-title">
          Recent Posts
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {blogs.map((item, i) => (
            <SwiperSlide key={i} className="h-100">
              <div className="card blog-card h-100 d-flex flex-column border-0">

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt="blog"
                  className="w-100 blog-img"
                />

                {/* CONTENT */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <small
                    style={{
                      color:
                        theme === "dark"
                          ? "#8e8282"
                          : "#8d7e7e",
                    }}
                  >
                    BY {item.author} — {item.date}
                  </small>

                  <h5 className="fw-semibold mt-2 blog-title">
                    {item.title}
                  </h5>

                  {/* PUSH TO BOTTOM */}
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="text-primary fw-semibold"
                      style={{ textDecoration: "underline" }}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
