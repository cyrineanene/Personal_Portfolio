import { CERTIFICATES } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Certificates / Badges
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {CERTIFICATES.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 rounded-xl border border-neutral-700 text-center shadow-lg shadow-purple-400/30 w-full rounded-xl bg-neutral-900 bg-opacity-10">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold">{certificate.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">{certificate.date}</p>
              <p className="text-sm text-neutral-400 mt-2">{certificate.issuer}</p>
              <p className="text-sm text-neutral-400 mt-2">{certificate.description}</p>
              <div className="mt-4">
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
                <a
                  href={certificate.credlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-blue-400 hover:underline"
                >
                  View on Credly
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev after:text-purple-500 after:opacity-50 hover:after:opacity-100"></div>
        <div className="swiper-button-next after:text-purple-500 after:opacity-50 hover:after:opacity-100"></div>
      </Swiper>
    </div>
  );
};

export default Certificates;