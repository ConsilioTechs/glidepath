import React from 'react';
import brand1 from '../assets/brands/brand1.svg';
import brand2 from '../assets/brands/brand2.svg';
import brand3 from '../assets/brands/brand3.svg';
import brand4 from '../assets/brands/brand4.svg';
import brand5 from '../assets/brands/brand5.svg';
import brand6 from '../assets/brands/brand6.svg';
import brand7 from '../assets/brands/brand7.svg';
import brand8 from '../assets/brands/brand8.svg';

export default function Brand() {
	const brands = [
		brand1,
		brand2,
		brand3,
		brand4,
		brand5,
		brand6,
		brand7,
		brand8,
	];

	// Render one brand row
	const BrandRow = () => (
		<div className="flex shrink-0 gap-10 ">
			{brands.map((brand, index) => (
				<img
					key={index}
					src={brand}
					alt={`brand-${index}`}
					className="w-[100px] h-[100px] object-contain rounded-full  p-3"
				/>
			))}
		</div>
	);

	return (
		<div className="bg-black py-20 overflow-hidden w-full relative">
			<h2 className="text-center text-white lg:text-[28px] mb-4">
				~Top Brands~
			</h2>

			<div className="relative w-full h-28 overflow-hidden">
				<div className="flex w-max animate-marquee absolute left-0 top-0">
					<BrandRow />
					<BrandRow />
				</div>
			</div>
		</div>
	);
}
