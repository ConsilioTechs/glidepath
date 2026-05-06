import React from 'react';
import zitajContact from '../assets/images/zitaj-contact.png';

export default function ContactUs() {
	return (
		<>
			<div
				className="flex lg:flex-row flex-col lg:gap-0 gap-[40px] lg:px-[10%] px-[16px] lg:py-[92px] py-[40px] items-stretch bg-[url('/src/assets/images/bg-contact.png')] bg-cover"
				id="contact"
			>
				{/* Left Side (Image) */}
				{/*  bg-[url('/src/assets/images/bg-contact-us.png')]*/}
				<div className="lg:w-[45%] w-full flex ">
					<img
						src={zitajContact}
						alt=""
						className="w-full object-cover rounded-3xl"
					/>
				</div>

				{/* Right Side (Form) */}
				<div className="lg:w-[55%] w-full">
					<div className="w-full lg:p-[48px]  rounded-3xl flex flex-col justify-center h-full">
						<p className="text-[#007BFF] lg:text-[20px] text-[16px] lg:leading-[55%]  font-bold">
							Book an appointment
						</p>
						<p className="text-[#FFFFFF]  lg:text-[32px] text-[24px] lg:leading-[40px] lg:pt-[16px] pt-[8px] font-bold">
							Send us a message
						</p>
						<form className="lg:pt-[36px] pt-[16px] ">
							{/* Input Fields */}
							<div className="mb-[20px] flex lg:flex-row flex-col w-full gap-[20px]">
								<div className="w-full">
									<label className="block text-[#FFFFFF] text-[14px] leading-[20px] mb-[6px]">
										Name
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] bg-inherit border-[#AAAAAA]  border rounded w-full py-[12px] px-[18px] text-[#838E9E]  focus:outline focus:shadow-outline"
										id="name"
										type="text"
										placeholder="Full name"
										name="name"
										required
									/>
								</div>
								<div className="w-full">
									<label className="block text-[#FFFFFF] text-[14px] leading-[20px] mb-[6px]">
										Email
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] bg-inherit border-[#AAAAAA] border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email address"
										name="email"
										required
									/>
								</div>
							</div>

							<div className="mb-[20px] flex lg:flex-row flex-col w-full gap-[20px]">
								<div className="w-full">
									<label className="block text-[#FFFFFF] text-[14px] leading-[20px] mb-[6px]">
										Phone
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] bg-inherit border-[#E6E8EC] border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="phone number"
										type="text"
										placeholder="Phone Number"
										name="phone number"
										required
									/>
								</div>
								<div className="w-full">
									<label className="block text-[#FFFFFF] text-[14px] leading-[20px] mb-[6px]">
										Subjects
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] bg-inherit border-[#AAAAAA] border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="subject"
										type="text"
										placeholder="Subject"
										name="Subject"
										required
									/>
								</div>
							</div>

							<div className="mb-[20px]">
								<label className="block text-[#FFFFFF] text-[14px] leading-[20px] mb-[6px]">
									Message
								</label>
								<textarea
									className="text-[16px] leading-[24px] border-[0.1px] border-[#AAAAAA] bg-inherit h-[120px] resize-none rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline-none focus:shadow-outline"
									id="message"
									placeholder="Tell us about your project..."
									name="message"
									rows="4"
									required
								></textarea>
							</div>

							<button className=" border-[2px]  rounded-r-full rounded-l-full   mt-[36px] border-[#FF9500] hover:cursor-pointer  flex justify-center items-center lg:mx-0 mx-auto">
								<a className="px-[24px] py-[12px] text-[16px] font-semibold text-[#FF9500]">
									Send Message
								</a>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
