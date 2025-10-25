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

  const loopEnabled = slides.length > 1;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-2 md:mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={loopEnabled}
        className="rounded md:rounded-xl overflow-hidden shadow-lg"
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
              <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/80"></div>
              <div className="relative z-10 text-center px-4 md:w-2/3">

                <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>

                <p className="text-xs md:text-lg opacity-90 animate__animated animate__fadeInUp">
                  {slide.desc}
                </p>

                <button className="btn btn-primary btn-xs md:btn-md mt-5 md:mt-8 animate__animated animate__fadeInUp">
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
