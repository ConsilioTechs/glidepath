import React, { useRef, useEffect } from 'react';
import Packages from './packages';
import hajj from '../assets/images/Glide-Hajj.jpg';
import umrah from '../assets/images/Glide-Umrah.png';
import Hotel from '../assets/images/Glide-Hotel.png';
import Ticket from '../assets/images/Glide-Ticket.png';
import Tours from '../assets/images/Glide-Tours.png';
import vacation from '../assets/images/Glide-Vacation.png';

export default function ServicesSlider() {
	const swiperRef = useRef(null);

	const services = [
		{
			title: 'Hajj',
			description:
				'Experience a well-organized and spiritually fulfilling Hajj journey with our carefully planned packages, guided support, and reliable arrangements.',
			image: hajj,
		},
		{
			title: 'Umrah',
			description:
				'We provide affordable and convenient Umrah packages designed to give you peace of mind and comfort throughout your sacred pilgrimage.',
			image: umrah,
		},
		{
			title: 'Hotel Reservations',
			description:
				'Enjoy a wide range of hotel options worldwide, from budget-friendly to luxury, ensuring comfort that fits your travel needs.',
			image: Hotel,
		},
		{
			title: 'Ticket Booking',
			description:
				'From local to international destinations, we handle your flight reservations at competitive prices with smooth and hassle-free booking.',
			image: Ticket,
		},
		{
			title: 'Group Tours',
			description:
				'Discover the world with friends, family, or colleagues through our exciting group tour packages, customized for memorable shared experiences.',
			image: Tours,
		},
		{
			title: 'Vacation Packages',
			description:
				'Escape to your dream destinations with tailored vacation plans that combine relaxation, adventure, and unforgettable memories.',
			image: vacation,
		},
	];

	useEffect(() => {
		// Load Swiper CSS
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
		document.head.appendChild(link);

		// Load Swiper JS
		const script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
		script.async = true;

		script.onload = () => {
			// Initialize Swiper after script loads
			const Swiper = window.Swiper;

			swiperRef.current = new Swiper('.swiper', {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
			});
		};

		document.body.appendChild(script);

		return () => {
			if (swiperRef.current) {
				swiperRef.current.destroy();
			}
			document.head.removeChild(link);
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="bg-[url('/src/assets/images/GlideService.png')] bg-cover bg-no-repeat lg:pt-[150px] py-[30px] px-4 font-Montserrat">
			<h2
				className="text-[#DBC087] text-[24px] lg:text-5xl font-bold text-center lg:mb-[70px] mb-[30px]"
				id="services"
			>
				Our Services
			</h2>

			<div className="max-w-7xl mx-auto">
				<div className="swiper">
					<div className="swiper-wrapper">
						{services.map((service, index) => (
							<div
								key={index}
								className="swiper-slide"
							>
								<div className=" rounded-2xl overflow-hidden  h-full">
									<div className="relative h-56 lg:h-[500px] overflow-hidden">
										<img
											src={service.image}
											alt={service.title}
											className="w-full rounded-2xl h-full object-cover"
										/>
									</div>
									<div className="mt-[45px]">
										<h3 className="text-[16px] lg:text-[26px]  font-semibold text-[#F3FAFF] text-center mb-3 lg:mb-[30px]">
											{service.title}
										</h3>
										<p className="text-[#F3FAFF] text-[14px] font-medium lg:text-[#ffffff] lg:leading-[29px] text-center leading-relaxed">
											{service.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Pagination Dots */}
					{/* <div className="swiper-pagination mt-8"></div> */}
				</div>
			</div>

			<style jsx>{`
				.swiper-pagination-bullet {
					width: 12px;
					height: 12px;
					background: rgba(255, 255, 255, 0.5);
					opacity: 1;
					transition: all 0.3s ease;
				}

				.swiper-pagination-bullet-active {
					background: #dbc087;
					width: 32px;
					border-radius: 6px;
				}

				.swiper-pagination-bullet:hover {
					background: rgba(255, 255, 255, 0.75);
				}
			`}</style>

			<Packages />
		</div>
	);
}
