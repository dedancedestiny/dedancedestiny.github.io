import React, { useEffect, useState } from "react";
import { loadGalleryData } from "../../utils/loadGalleryData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HeroGallery() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      const csvData = await loadGalleryData();

      const images = import.meta.glob("/src/assets/*", {
        eager: true,
        import: "default"
      });

      const formatted = csvData.map((item) => {

        const match = Object.entries(images).find(([path]) =>
          path.endsWith(item.image.trim())
        );

        return {
          title: item.title.trim(),
          image: match ? match[1] : ""
        };

      });

      setGallery(formatted);

    };

    loadData();

  }, []);

  return (

    <div className="hero-gallery">

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}

        pagination={{
          el: ".hero-pagination",
          clickable: true
        }}

        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >

        {gallery
          .filter(item => item.image)
          .map((item, index) => (

          <SwiperSlide key={index}>

            <div className="gallery-card">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">
                {item.title}
              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* DOTS BELOW */}
      <div className="hero-pagination"></div>

    </div>

  );

}

export default HeroGallery;