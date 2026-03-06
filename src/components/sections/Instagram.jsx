import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Instagram.css";

const Instagram = () => {

const posts = [
"https://www.instagram.com/reel/DTavjEwkytZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
"https://www.instagram.com/reel/DSKa6mKD-tM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
"https://www.instagram.com/reel/DVOHHlkD3ST/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
"https://www.instagram.com/p/DVeqRyRE8lU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
];

return (

<section className="instagram-section">

<div className="instagram-container">

<h2 className="instagram-title">
Follow Our Dance Journey
</h2>

<p className="instagram-subtitle">
Watch our latest dance performances, student choreography,
and behind-the-scenes moments from DE Dance Destiny dance academy in Chennai.
</p>

<Swiper
modules={[Pagination, Autoplay]}
spaceBetween={30}
slidesPerView={3}
pagination={{ clickable: true }}
autoplay={{ delay: 3500 }}
breakpoints={{
320: { slidesPerView: 1 },
768: { slidesPerView: 2 },
1024: { slidesPerView: 3 }
}}
className="instagram-slider"
>

{posts.map((url, index) => (

<SwiperSlide key={index}>

<div className="instagram-card">
<InstagramEmbed url={url} width="100%" />
</div>

</SwiperSlide>

))}

</Swiper>

<a
href="https://www.instagram.com/dedancedestiny_omr/"
target="_blank"
rel="noopener noreferrer"
className="instagram-button"
>

Follow @dedancedestiny_omr

</a>

</div>

</section>

);

};

export default Instagram;