import "animate.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WinterHeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/WinterSlides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to load slides:", err));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 py-6 md:py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[300px] md:h-[500px] flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/70"></div>
              <div className="relative z-10 text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg opacity-90 animate__animated animate__fadeInUp">
                  {slide.desc}
                </p>
                <button className="btn btn-primary mt-5 animate__animated animate__fadeInUp">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WinterHeroSlider;
