import React from 'react';
import quote from '../assets/images/testimony_quote.svg';
import testimony_one from '../assets/images/testimony_one.png';
import testimony_two from '../assets/images/testimony_two.png';
import testimony_twoo from '../assets/images/testimony_twoo.png';

export default function WhatCustomersSays() {
	const testimonials = [
		{
			name: 'Rebecca L',
			car: 'Toyota Hilux',
			message:
				'Zitaj Auto Repair always delivers outstanding results. Their team is professional, knowledgeable, and honest. I wouldn’t trust anyone else with my car',
		},
		{
			name: 'Ohuns chidi',
			car: 'Toyota Camry',
			message:
				'I was impressed with how quickly they diagnosed and fixed my car. The pricing was fair, and the staff was so friendly. Highly recommend!',
		},
		{
			name: 'Michael A',
			car: 'Mercedes benz',
			message:
				'The technicians here are amazing. They solved an issue other shops couldn’t figure out. I’m a loyal customer',
		},
	];
	return (
		<section
			className="bg-[url('/src/assets/images/bg-testimony.png')] lg:py-[92px] py-[60px] bg-cover"
			id="testimonials"
		>
			{/* Header section */}
			<div className="flex lg:justify-between justify-center  lg:px-[80px]  px-[16px]">
				<h1 className="text-[#303036] lg:text-left text-center  lg:text-[40px] text-[24px] font-bold lg:leading-[55px] leading-[32px]">
					What Customers <br />
					<span className="text-[#007BFF]">Say About Us</span>
				</h1>
				<div className="lg:block hidden">
					<img
						src={quote}
						alt="quote"
						className="w-12 h-12"
					/>
				</div>
			</div>

			{/* Gradient divider line */}
			<div className="h-[2px]  lg:mx-[80px] mx-[16px] bg-gradient-to-r from-[#B57418] to-[#F9F8F5] lg:my-[40px] my-[24px]"></div>

			{/* Testimonial images side-by-side */}
			<div className="flex lg:flex-row flex-col justify-between lg:px-[80px] px-[16px] mt-[40px] mb-[40px] gap-8">
				<div className="lg:block hidden lg:w-1/2 w-full">
					<img
						src={testimony_one}
						alt="testimony_one"
						className="h-full object-contain w-full max-h-[500px]"
					/>
				</div>
				<div className="lg:hidden block lg:w-1/2 w-full">
					<div className=" grid gap-5 ">
						{testimonials.map((t, index) => (
							<div
								key={index}
								className="bg-[#222222]  rounded-lg px-[28px] py-[24px] shadow-md"
							>
								<h3 className="font-medium text-[18px] leading-[35px] text-[#ffffff] ">
									{t.name}
								</h3>
								<p className="font-medium text-[16px] leading-[35px] text-[#DDDDDD]">
									<span className="e">Car type:</span> {t.car}
								</p>
								<div className="h-[1px]   bg-gradient-to-r from-[#B57418] to-[#F9F8F5] lg:my-[40px] my-[24px]"></div>
								<p className="text-[14px] leading-[32px] text-[#cccccc]">
									{t.message}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="lg:block hidden lg:w-1/2 w-full">
					<img
						src={testimony_two}
						alt="testimony_two"
						className="h-full object-contain w-full max-h-[500px]"
					/>
				</div>
				<div className="lg:hidden block lg:w-1/2 w-full">
					<img
						src={testimony_twoo}
						alt="testimony_twoo"
						className="h-full object-contain w-full max-h-[500px]"
					/>
				</div>
			</div>
		</section>
	);
}
