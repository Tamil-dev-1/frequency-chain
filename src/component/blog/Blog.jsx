
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function BlogCarousel() {

  const {theme} = useContext(ThemeContext);
  const blogs = [
    {
      img: "https://ethpandaops.io/img/blog/announcing-dasmon.png",
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
    <section className="py-5" >
      <div className="container">
        <h2 className="text-center fw-bold mb-4 hero-title">Recent posts</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {blogs.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="card border-0 premium-card"
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                  background: "",
                  transition: "0.3s",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={item.img}
                  alt="blog"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-4">
                  <small className=""
                   style={{
          color: theme === "dark" ? "#8e8282ff" : "#8d7e7eff",
          transition: "0.3s",
        }}>
                    BY {item.author} — {item.date}
                  </small>

                  <h5 className="fw-semibold mt-2">{item.title}</h5>

                  <a
                    href="#"
                    className="text-primary fw-semibold mt-3 d-inline-block"
                    style={{ textDecoration: "underline" }}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
