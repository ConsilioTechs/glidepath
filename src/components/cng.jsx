import React from 'react';
import zitazjCng from '../assets/images/bg-cng.png';
import cngg from '../assets/icons/cngg.png';
import quote from '../assets/icons/quote.png';
import expertise from '../assets/icons/expertise.png';

export default function Cng() {
	return (
		<>
			<div
				className="px-[6%] flex lg:flex-row flex-col lg:py-[92px] py-[92px] gap-[2.5rem]"
				id="cng"
			>
				<div className="lg:hidden block">
					<p className="lg:text-[40px] text-[32px] leading-[55px] font-bold">
						CNG <span className="text-[#007BFF]">Conversion</span>
					</p>
					<p className="text-[#303036] lg:text-[24px] text-[16px] font-medium pt-[6px]">
						Save More with CNG Dual-Fuel Conversion
					</p>
				</div>
				<div className="lg:w-[50%]  w-full">
					<img
						src={zitazjCng}
						alt=""
						className=" "
					/>
				</div>
				<div className="flex flex-col lg:w-[50%] w-full justify-center">
					<p className="text-[40px] leading-[55px] font-bold lg:block hidden">
						CNG <span className="text-[#007BFF]">Conversion</span>
					</p>
					<p className="text-[#303036] text-[24px] leading-[40px] font-bold pt-[1rem] lg:block hidden">
						Save More with CNG Dual-Fuel Conversion
					</p>
					<div className="flex gap-4 pt-[2.15rem]">
						<div>
							<img
								src={cngg}
								alt=""
								className="h-[50px] w-[50px]"
							/>
						</div>
						<div className=" flex flex-col font-sans justify-center">
							<p className="lg:text-[20px] text-[16px] leading-[35px]">
								Benefits of CNG
							</p>
							<p className="lg:text-[16px] text-[14px] lg:leading-[35px] leading-[26px]">
								Lower fuel costs, reduced emissions
							</p>
						</div>
					</div>
					<div className="flex gap-4 pt-[2.15rem]">
						<div>
							<img
								src={expertise}
								alt=""
								className="h-[50px] w-[50px]"
							/>
						</div>
						<div className=" flex flex-col font-sans justify-center">
							<p className="lg:text-[20px] text-[16px] leading-[35px]">
								Our Expertise
							</p>
							<p className="lg:text-[16px] text-[14px] lg:leading-[35px] leading-[26px]">
								Professional installation with warranty
							</p>
						</div>
					</div>
					<div className="flex gap-3 pt-[2.15rem]">
						<div>
							<img
								src={quote}
								alt=""
								className="h-[50px] w-[50px]"
							/>
						</div>
						<div className=" flex flex-col font-sans justify-center">
							<p className="lg:text-[20px] text-[16px] leading-[35px]">
								Get a Quote
							</p>
							<p className="lg:text-[16px] text-[14px] lg:leading-[35px] leading-[26px]">
								Form for personalized inquiries
							</p>
						</div>
					</div>

					<button className=" border-[2px] w-fit   rounded-r-full rounded-l-full   mt-[36px] border-[#FF9500] hover:cursor-pointer  flex justify-center items-center ">
						<a className="px-[24px] py-[12px] text-[16px] font-semibold text-[#FF9500]">
							Book an appointment
						</a>
					</button>
				</div>
			</div>
		</>
	);
}
