import React, { useState, useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import CarImage from '../assets/images/zitaj-auto-4.png';

export default function About() {
	return (
		<div>
			<div
				className="px-[16px] lg:px-[120px] w-full font-Montserrat  py-[50px]  bg-[url('/src/assets/images/glidePath-heroPage.jpg')] "
				id="about"
			>
				<h1 className="lg:text-[32px] text-[14px] lg:leading-[39px] text-[#00000] font-bold">
					About Us
				</h1>
				<p className="lg:text-[20px] text-[14px] lg:leading-[39px]  text-[#00000] lg:pt-[35px] pt-[18px]">
					At Glidepath Travel & Tours, we are dedicated to making every journey
					seamless, memorable, and fulfilling. Whether it’s a spiritual
					pilgrimage, a family vacation, or a corporate trip, our mission is to
					provide trusted travel solutions tailored to your needs. With years of
					experience in Hajj, Umrah, ticket booking, hotel reservations, group
					tours, and vacation packages, we ensure our clients enjoy comfort,
					affordability, and peace of mind throughout their travels. What sets
					us apart is our commitment to excellence, attention to detail, and
					customer-first approach. From the moment you plan your trip until your
					safe return, we walk with you every step of the way.
				</p>
			</div>
		</div>
	);
}
