import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../assets/dance1.jpeg";
import img2 from "../../assets/dance2.jpeg";
import img3 from "../../assets/dance3.jpeg";
import img4 from "../../assets/dance4.jpeg";

function HeroSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="hero-swiper"
    >
      <SwiperSlide>
        <div className="hero-slide">
          <img src={img1} alt="Dance Performance" />
          <div className="overlay"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <img src={img2} alt="Kids Dance Class" />
          <div className="overlay"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <img src={img3} alt="Zumba Session" />
          <div className="overlay"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <img src={img4} alt="Wedding Choreography" />
          <div className="overlay"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;