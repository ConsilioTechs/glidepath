import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';

import 'swiper/css';
import slide1 from '../assets/images/home_1.png';
import slide2 from '../assets/images/home_2.png';
import slide3 from '../assets/images/home_3.png';
import glideVideo from '../assets/glidePathVidd.mp4';
import tiktok from '../assets/icons/Glide-Tiktok.svg';
import fb from '../assets/icons/Glide-Facebook.svg';
import twitter from '../assets/icons/Glide-X.svg';
import linkedin from '../assets/icons/Glide-LinkedIn.svg';
import instagram from '../assets/icons/Glide-Instagram.svg';
import Nav from './nav';

const slides = [
	{
		image: slide1,
		title: (
			<>
				<div className="hidden lg:block">
					Drive with Confidence,&nbsp;
					<span className="text-[#278FFF]">Reliable Repairs Guaranteed!</span>
				</div>
				<div className="lg:hidden block">
					<p>Drive with Confidence</p>
					<p className="text-[#278FFF]">Reliable Repairs</p>
					<p className="text-[#278FFF]">Guaranteed!</p>
				</div>
			</>
		),
		subtitle:
			'Welcome to Zitaj, your trusted partner for top-quality automobile repair and maintenances',
	},
	{
		image: slide2,
		title: (
			<>
				Certified Professionals&nbsp;
				<span className="text-[#278FFF]">With Years Experience</span>
			</>
		),
		subtitle:
			'At Zitaj Auto Repair, we bring your vehicle back to peak performance with expert diagnostics, skilled technicians, and unmatched customer service.',
	},
	{
		image: slide3,
		title: (
			<>
				Modern Equipment For&nbsp;
				<span className="text-[#278FFF]">Accurate diagnosis and repairs</span>
			</>
		),
		subtitle:
			' From routine oil changes to complex engine repairs, we ensure your ride is smooth, safe, and reliable. Drive with confidence because your car deserves the best!',
	},
];

// Animation configs
const imageVariants = {
	initial: { opacity: 0, scale: 1.1, x: 60 },
	animate: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: { duration: 1.2, ease: 'easeOut' },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		x: -60,
		transition: { duration: 1, ease: 'easeIn' },
	},
};

const textVariants = {
	initial: { opacity: 0, x: -50 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 1, delay: 0.4, ease: 'easeOut' },
	},
	exit: { opacity: 0, x: 50, transition: { duration: 0.8, ease: 'easeIn' } },
};

export default function HeroSlider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						videoRef.current?.play();
						setIsPlaying(true);
					} else {
						videoRef.current?.pause();
						setIsPlaying(false);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	const togglePlayPause = () => {
		if (isPlaying) {
			videoRef.current?.pause();
			setIsPlaying(false);
		} else {
			videoRef.current?.play();
			setIsPlaying(true);
		}
	};

	return (
		<>
			<section
				className="w-full lg:h-screen  bg-[url('/src/assets/images/glidePath-heroPage.jpg')] lg:pt-[32px]  overflow-hidden"
				id="home"
			>
				<Nav />

				<div className="lg:min-h-screen flex items-center justify-center lg:-mt-[40px] mt-[30px]">
					<div className="lg:w-[870px] w-[246px] text-center">
						{/* Main Heading */}
						<div className="flex flex-col items-center justify-center mb-[50px] px-4">
							<h1 className="text-4xl lg:text-[100px] font-MissLeGatees lg:tracking-wide self-start text-[#0077B6]">
								{'Your Journey,'.split('').map((char, index) => (
									<span
										key={index}
										className="inline-block animate-fadeIn"
										style={{
											animationDelay: `${index * 0.1}s`,
											animationFillMode: 'forwards',
											opacity: 0,
										}}
									>
										{char === ' ' ? '\u00A0' : char}
									</span>
								))}
							</h1>
							<h1 className="text-4xl lg:text-[100px] font-MissLeGatees lg:tracking-wide text-[#DBC087] self-end mt-4 lg:mt-[100px]">
								{'Our Priority'.split('').map((char, index) => (
									<span
										key={index}
										className="inline-block animate-fadeIn"
										style={{
											animationDelay: `${(index + 14) * 0.1}s`,
											animationFillMode: 'forwards',
											opacity: 0,
										}}
									>
										{char === ' ' ? '\u00A0' : char}
									</span>
								))}
							</h1>
						</div>

						{/* Subtitle */}
						<p
							className="text-[14px] lg:text-[36px] lg:leading-[44px] leading-[17px] text-center font-Montserrat italic text-[#000000] mb-8 sm:mb-10 lg:pt-10  animate-fadeIn"
							style={{
								animationDelay: '2.6s',
								animationFillMode: 'forwards',
								opacity: 0,
							}}
						>
							Trusted travel solutions for Hajj, Umrah,
							<br className="hidden sm:block" />
							<span className="block sm:inline"> and global destinations.</span>
						</p>

						{/* CTA Button */}
						<div
							className="flex justify-center items-center px-4 lg:mb-0 mb-[15px] animate-fadeIn"
							style={{
								animationDelay: '3s',
								animationFillMode: 'forwards',
								opacity: 0,
							}}
						>
							<a
								href="https://wa.me/2347074213046?text=Hello%20I%20want%20to%20plan%20a%20trip"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button
									className="bg-[#0077B6] text-[#ffffff] font-semibold lg:py-[19px] lg:px-[98px] py-[14px] px-[35px] sm:px-8 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm sm:text-base"
									style={{ backgroundColor: '#0B7FAF' }}
								>
									Plan My Trip | Contact Us
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-[url('/src/assets/images/glidePath-heroPage.jpg')]">
				<div className="relative lg:pl-[80px]  flex w-screen">
					<div className="relative w-full">
						<video
							ref={videoRef}
							src={glideVideo}
							className="w-full rounded-lg"
							muted
							loop
							playsInline
						/>
						<button
							onClick={togglePlayPause}
							className="absolute inset-0 flex items-center justify-center text-white text-6xl cursor-pointer transition border-none bg-transparent hover:bg-black hover:bg-opacity-20"
						>
							{isPlaying ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-gray-300"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-gray-300"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M5 3v18l15-9L5 3z" />
								</svg>
							)}
						</button>

						{/* Social icons container - mobile only, positioned at right */}
						<div className="lg:hidden fixed right-0 top-1/3 z-50 bg-[#ffffff]/80 shadow-xl rounded-l-3xl flex flex-col items-center justify-center p-2 space-y-2">
							<a
								href="https://www.instagram.com/glidepath.travel"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={instagram}
									alt="instagram"
									className="w-[25px] h-[25px]"
								/>
							</a>

							<a
								href="https://www.facebook.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={fb}
									alt="facebook"
									className="w-[25px] h-[25px]"
								/>
							</a>

							<a
								href="https://x.com/glidepath_tt"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={twitter}
									alt="twitter"
									className="w-[25px] h-[25px]"
								/>
							</a>

							<a
								href="https://www.linkedin.com/in/yourusername"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={linkedin}
									alt="linkedin"
									className="w-[25px] h-[25px]"
								/>
							</a>

							<a
								href="https://www.tiktok.com/@glidepath.travel"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={tiktok}
									alt="tiktok"
									className="w-[25px] h-[25px]"
								/>
							</a>
						</div>
					</div>

					{/* Social icons container - desktop only */}
					{/* Social icons container - desktop only */}
					{/* Social icons container - desktop only, fixed to right side of screen */}
					<div className="hidden lg:flex fixed right-0 top-1/4 z-50 bg-[#ffffff]/80 shadow-xl rounded-l-3xl flex-col items-center justify-center h-fit p-5 space-y-3 transition-all duration-300 hover:bg-white hover:shadow-2xl">
						<a
							href="https://www.instagram.com/glidepath.travel"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={instagram}
								alt="instagram"
								className="w-[73px] h-[73px]"
							/>
						</a>

						<a
							href="https://www.facebook.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={fb}
								alt="facebook"
								className="w-[73px] h-[73px]"
							/>
						</a>

						<a
							href="https://x.com/glidepath_tt"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={twitter}
								alt="twitter"
								className="w-[73px] h-[73px]"
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linkedin}
								alt="linkedin"
								className="w-[73px] h-[73px]"
							/>
						</a>

						<a
							href="https://www.tiktok.com/@glidepath.travel"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={tiktok}
								alt="tiktok"
								className="w-[73px] h-[73px]"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
