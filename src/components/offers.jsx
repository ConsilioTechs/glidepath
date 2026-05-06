import React from 'react';
import icon1 from '../assets/icons/Glides1.svg';
import icon2 from '../assets/icons/Glides2.svg';
import icon3 from '../assets/icons/Glides3.svg';
import icon4 from '../assets/icons/Glides4.svg';

export default function Offers() {
	const stats = [
		{
			number: '15+',
			label: 'Years of Experience',
			icon: icon1,
		},
		{
			number: '15k+',
			label: 'Happy Travelers',
			icon: icon2,
		},
		{
			number: '650+',
			label: 'Places Visited',
			icon: icon3,
		},
		{
			number: '2k+',
			label: 'Travel History',
			icon: icon4,
		},
	];

	return (
		<div className=" pt-24">
			<div className="max-w-6xl mx-auto">
				{/* Text Content - Centered */}
				<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
					<div className="space-y-6 lg:space-y-8">
						<h2 className="text-[24px] lg:text-[48px] leading-[29px] lg:leading-[59px] font-bold text-[#DBC087]">
							We always try to give you the best service
						</h2>
						<p className="text-[#ffffff] text-[14px] lg:text-[24px] leading-relaxed mx-auto">
							We always try to make our customer Happy. We provide all kind of
							facilities. Your satisfaction is our main priority.
						</p>
					</div>
				</div>

				{/* Stats Grid - Positioned below */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#005B8A] transition-all duration-300 group text-center"
						>
							<div className="flex flex-col items-center justify-center  gap-3 mb-3">
								<img
									src={stat.icon}
									alt=""
									className='text-[#005B8A] group-hover:scale-110 transition-transform duration-300"'
								/>

								<div className="text-2xl lg:text-[36px] font-bold text-[#000000]">
									{stat.number}
								</div>
							</div>
							<div className="text-sm lg:text-[20px] text-[#000000]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
