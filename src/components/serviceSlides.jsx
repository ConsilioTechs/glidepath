import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
import slide4 from '../assets/images/slide4.png';
import slide5 from '../assets/images/slide5.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Sample images array
const images = [slide1, slide2, slide3, slide4, slide5];

export default function ServiceSlides() {
	// Function to determine the margin-top based on slide index
	const getMarginClass = index => {
		return index % 2 === 0 ? 'mt-10' : 'mt-20'; // Even slides: mt-10, Odd slides: mt-20
	};

	return (
		<>
			<div className="swiper-container">
				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2500, // Autoplay delay (in milliseconds)
						disableOnInteraction: false, // Continue autoplay after interactions
					}}
					modules={[Pagination, Autoplay]}
					breakpoints={{
						// When screen width is >= 640px, show 1 slide
						640: {
							slidesPerView: 1,
						},
						// When screen width is >= 768px, show 2 slides
						768: {
							slidesPerView: 2,
						},
						// When screen width is >= 1024px, show 3 slides
						1024: {
							slidesPerView: 3,
						},
					}}
					className="mySwiper"
				>
					{images.map((image, index) => (
						<SwiperSlide
							key={index}
							className={`h-[380px] ${getMarginClass(index)}`}
						>
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="h-full w-full object-cover rounded-lg"
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Swiper Pagination */}
				<div className="custom-pagination swiper-pagination"></div>
			</div>
		</>
	);
}
