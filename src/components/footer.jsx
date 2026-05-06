import React from 'react';
import footer_logo from '../assets//logofooter.svg';
import { Link } from 'react-scroll';
import linkedin from '../assets/icons/zitaj-linkedin.svg';
import twitter from '../assets/icons/zitaj-twitter.svg';
import facebook from '../assets/icons/zitaj-facebook.svg';
import instagram from '../assets/icons/zitaj-instagram.svg';
import logo from '../assets/icons/zitaj-footerl.svg';
import { scroller } from 'react-scroll';

import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
	const scrollToSection = section => {
		scroller.scrollTo(section, {
			smooth: true,
			offset: -70, // Adjust this offset as needed for your navbar/footer height
			duration: 500,
		});
	};
	return (
		<footer className="bg-[#132F4D] lg:py-[50px] font-satoshi py-[75px]">
			<div className="flex flex-col px-[32px] items-center">
				<div className=" cursor-pointer  gap-[16px] flex">
					<a
						href="#
"
					>
						<img
							src={facebook}
							alt="facebook"
							className="h-[44px] w-[44px]"
						/>
					</a>
					<a href="#">
						<img
							src={twitter}
							alt="twitter"
							className="h-[44px] w-[44px]"
						/>
					</a>
					<a href="#">
						<img
							src={linkedin}
							alt="linkedin"
							className="h-[44px] w-[44px]"
						/>
					</a>
					<a href="#">
						<img
							src={instagram}
							alt="instagram"
							className="h-[44px] w-[44px]"
						/>
					</a>
				</div>
				<div className="pt-[41px] text-center">
					<h1 className="text-[16px] font-bold text-[#FFFFFF]">
						Address: Plot C15, Sabon Lugbe, by Aco Estate, Airport Road
					</h1>
					<p className="text-[16px] py-[20px] font-bold text-[#FFFFFF] ">
						Phone: +234 811 100 8429
					</p>
					<p className="text-[16px] font-medium text-[#A9A9A9]">
						© 2024 Zitaj Automobile. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
