import React, { useEffect, useRef, useState } from 'react';
import Zainab from '../assets/images/Zainab.png';
import Hameed from '../assets/images/Hameed.png';
import Ahmed from '../assets/images/Ahmad.png';
import Fati from '../assets/images/Hameed.png';
import Hassan from '../assets/images/Hameed.png';

const Testimonies = () => {
	const scrollContainerRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const testimonials = [
		{
			id: 1,
			name: 'Zainab K.',
			location: 'Kano',
			text: 'Unforgettable Hajj experience thanks to them. Their guidance, support, and attention to detail made the pilgrimage smooth and worry-free',
			avatar: Zainab,
			color: 'bg-pink-200',
		},
		{
			id: 2,
			name: 'Muhammad Adulhameed',
			location: 'Abuja',
			text: 'Glidepath made my Umrah journey stress free and fulfilling. From flights to hotel booking, everything was perfectly arranged. I felt truly taken care of.',
			avatar: Hameed,
			color: 'bg-orange-200',
		},
		{
			id: 3,
			name: 'Ahmed S.',
			location: 'Lagos',
			text: 'Booking my family vacation to Dubai with Glidepath was the best decision. They handled everything at an amazing price!',
			avatar: Ahmed,
			color: 'bg-gray-700',
		},
		// {
		// 	id: 4,
		// 	name: 'Fatima R.',
		// 	location: 'Port Harcourt',
		// 	text: 'Excellent support and smooth booking. Highly recommended!',
		// 	avatar: Fati,
		// 	color: 'bg-green-200',
		// },
		// {
		// 	id: 5,
		// 	name: 'Hassan T.',
		// 	location: 'Keffi',
		// 	text: 'Very professional and friendly staff. Great value.',
		// 	avatar: Hassan,
		// 	color: 'bg-blue-200',
		// },
	];

	// Make 3 copies for seamless infinite looping
	const extendedTestimonials = [
		...testimonials,
		...testimonials,
		...testimonials,
	];

	// detect screen size
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	// compute card width including gap
	const getCardWidth = () => {
		const container = scrollContainerRef.current;
		if (!container) return 0;
		const firstSlide = container.querySelector('[data-slide]');
		const slideWidth = firstSlide
			? firstSlide.offsetWidth
			: container.offsetWidth;
		const styles = window.getComputedStyle(container);
		const gapValue = parseFloat(styles.columnGap || styles.gap || '0') || 0;
		return slideWidth + gapValue;
	};

	const scrollToSlide = (index, smooth = true) => {
		const container = scrollContainerRef.current;
		if (!container) return;
		const cardWidth = getCardWidth();
		container.scrollTo({
			left: Math.round(cardWidth * index),
			behavior: smooth ? 'smooth' : 'auto',
		});
	};

	// autoplay every 3s
	useEffect(() => {
		const id = setInterval(() => {
			setCurrentSlide(prev => {
				const next = prev + 1;
				scrollToSlide(next);
				return next;
			});
		}, 3000);
		return () => clearInterval(id);
	}, []);

	// initial: start in the middle copy
	useEffect(() => {
		const startIndex = testimonials.length;
		setCurrentSlide(startIndex);
		scrollToSlide(startIndex, false);
	}, []);

	// handle manual scroll (touch/drag)
	const handleScroll = () => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const cardWidth = getCardWidth();
		if (!cardWidth) return;

		const scrollLeft = container.scrollLeft;
		const newIndex = Math.round(scrollLeft / cardWidth);
		const n = testimonials.length;

		if (newIndex < n) {
			// jumped too far left, snap to middle copy
			const corrected = newIndex + n;
			setCurrentSlide(corrected);
			scrollToSlide(corrected, false);
		} else if (newIndex >= n * 2) {
			// jumped too far right, snap to middle copy
			const corrected = newIndex - n;
			setCurrentSlide(corrected);
			scrollToSlide(corrected, false);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	const slidesPerView = isMobile ? 1 : 3;
	const totalPages = Math.ceil(testimonials.length / slidesPerView);

	const getCurrentPage = () => {
		const n = testimonials.length;
		const relativeIndex = (((currentSlide - n) % n) + n) % n;
		return Math.floor(relativeIndex / slidesPerView);
	};

	const handleDotClick = pageIndex => {
		const targetIndex = testimonials.length + pageIndex * slidesPerView;
		setCurrentSlide(targetIndex);
		scrollToSlide(targetIndex);
	};

	return (
		<div
			className="min-h-screen bg-[#F3FAFF] font-Montserrat py-16 px-4"
			id="Testmonies"
		>
			<div className="max-w-7xl mx-auto">
				<h1 className="text-[24px] lg:text-[48px] px-3 font-semibold text-center text-[#005B8A] mb-12">
					What Customers Say About Us
				</h1>

				{/* Wrapper with padding for avatars */}
				<div className="relative lg:pt-12 pt-6">
					{/* Scroll container with clip-path to only hide horizontal overflow */}
					<div
						ref={scrollContainerRef}
						onScroll={handleScroll}
						className="flex snap-x snap-mandatory scrollbar-hide gap-6 md:gap-8 pb-6"
						style={{
							WebkitOverflowScrolling: 'touch',
							overflowX: 'auto',
							overflowY: 'visible',
							marginTop: '-3rem',
							paddingTop: '3rem',
						}}
					>
						{extendedTestimonials.map((testimonial, idx) => (
							<div
								key={`${testimonial.id}-${idx}`}
								data-slide
								className="flex-shrink-0 w-full md:w-1/3 snap-start"
							>
								<div className="relative bg-white rounded-3xl lg:p-8 p-4 pt-16 shadow-lg h-full flex flex-col items-center text-center mx-2">
									{/* Avatar Image - positioned outside the card */}
									<div
										className="absolute left-1/2 -translate-x-1/2"
										style={{ top: '-2.5rem' }}
									>
										<img
											src={testimonial.avatar}
											alt={testimonial.name}
											className="w-20 h-20 rounded-full object-cover shadow-md border-4 border-white"
										/>
									</div>

									{/* Name & Location */}
									<div className="flex justify-center items-center gap-5 mt-6">
										<p className="font-medium text-[16px] text-[#000000]">
											{testimonial.name}
										</p>
										<p className="text-[16px] text-[#000000] font-medium">
											– {testimonial.location}
										</p>
									</div>

									{/* Testimonial Text */}
									<p className="text-[#000000] text-[18px] leading-[28px] mt-4">
										{testimonial.text}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Indicators */}
					<div className="flex justify-center mt-6 gap-3">
						{Array.from({ length: totalPages }).map((_, i) => {
							const active = getCurrentPage() === i;
							return (
								<button
									key={i}
									onClick={() => handleDotClick(i)}
									className={`transition-all duration-300 ease-out rounded-full ${
										active ? 'bg-[#177BA5] w-6 h-2' : 'bg-black w-2 h-2'
									}`}
								/>
							);
						})}
					</div>
				</div>
			</div>

			<style>{`
				.scrollbar-hide::-webkit-scrollbar { 
					display: none; 
				}
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>
		</div>
	);
};

export default Testimonies;
