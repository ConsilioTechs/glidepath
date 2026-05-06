import React from 'react';
import free_consult from '../assets/icons/Consultation.png';
import ServiceSlides from './serviceSlides';

export default function Services() {
	return (
		<>
			<div
				className="lg:px-[156px] bg-[#F8F9F6] px-[16px] lg:pt-[80px] pt-[40px] "
				id="services"
			>
				<div>
					<h1 className="text-center text-[16px]  leading-[48px] text-[#FF9500] font-extrabold">
						Our Portfolios
					</h1>
					<p className="text-gradient text-[32px] lg:leading-[58px] leading-[38px] font-extrabold text-center">
						Explore our Impactful Work
					</p>
					<p className="text-[20px] leading-[30px] lg:mt-[0px] mt-[32px] text-[#1D1B20] text-center lg:px-[100px]">
						Explore how we transform ideas into impactful solutions through our
						diverse portfolio of successful projects. Our work reflects a
						commitment to innovation, quality, and excellence, showcasing our
						ability to tackle complex challenges and deliver results that exceed
						expectations.
					</p>
					<div>
						<ServiceSlides />
					</div>
				</div>
			</div>
		</>
	);
}
