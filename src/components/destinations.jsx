import React from 'react';
import destination from '../assets/images/GlideDestination.png';
import saudi from '../assets/images/GlideSaudi.png';
import Egypt from '../assets/images/GlideEgypt.png';
import Europe from '../assets/images/GlideEuro.png';

export default function Destinations() {
	return (
		<div>
			<div className="bg-[#F3FAFF] m-w-7xl mx-auto lg:py-12 py-6 lg:pr-[80px]  font-Montserrat">
				<h1 className="text-[24px] lg:text-[48px] font-semibold text-center text-[#005B8A] mb-10  ">
					Our Popular Distinations
				</h1>
				<div className=" flex lg:flex-row flex-col gap-10">
					<div className="lg:w-1/2 w-full lg:block hidden">
						<img
							src={destination}
							alt="destination"
						/>
					</div>
					<div className="lg:w-1/2 w-full px-[16px] ">
						<div className="mb-[42px]">
							<div className="flex justify-between bg-[#ffffff] rounded-lg lg:text-[20px] text-[16px] text-[#000000] font-semibold shadow-xl items-center lg:pr-[80px] pr-[16px]">
								<div className="flex lg:gap-[26px] gap-[16px] items-center">
									<img
										src={saudi}
										alt="saudi"
										className="lg:h-[223px] h-[135px]"
									/>

									<p>Saudi</p>
								</div>
								<div>
									<p>20+ Spots</p>
									<p>2D & 3N</p>
								</div>
							</div>
						</div>
						<div className="mb-[42px]">
							<div className="flex justify-between bg-[#ffffff] rounded-lg g:text-[20px] text-[16px] text-[#000000] font-semibold shadow-xl items-center lg:pr-[80px] pr-[16px]">
								<div className="flex gap-[26px] items-center">
									<img
										src={Egypt}
										alt="Egypt"
										className="lg:h-[223px] h-[135px]"
									/>

									<p>Egypt </p>
								</div>
								<div>
									<p>20+ Spots</p>
									<p>2D & 3N</p>
								</div>
							</div>
						</div>
						<div>
							<div className="flex justify-between bg-[#ffffff] rounded-lg lg:text-[20px] text-[16px] text-[#000000] font-semibold shadow-xl items-center lg:pr-[80px] pr-[16px]">
								<div className="flex gap-[26px] items-center">
									<img
										src={Europe}
										alt="Europe "
										className="lg:h-[223px] h-[135px]"
									/>

									<p>Europe </p>
								</div>
								<div>
									<p>20+ Spots</p>
									<p>2D & 3N</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
