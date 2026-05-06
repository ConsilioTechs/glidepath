import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import facebook1 from '../assets/icons/facebook1.svg';
import instagram1 from '../assets/icons/instagram1.svg';
import x1 from '../assets/icons/x1.svg';
import linkdin1 from '../assets/icons/linkdin1.svg';
import tiktok1 from '../assets/icons/tiktok1.svg';
import email1 from '../assets/icons/email1.svg';
import emailm from '../assets/icons/emailm.svg';
import img1 from '../assets/icons/img1.png';
import img2 from '../assets/icons/img2.png';
import img3 from '../assets/icons/img3.png';
import img4 from '../assets/icons/img4.png';
import img5 from '../assets/icons/img5.png';
import img6 from '../assets/icons/img6.png';

function Footer() {
	return (
		<div>
			<footer className=" bg-[url('/src/assets/images/glidePath-heroPage.jpg')] text-[#292D32] py-[90px] px-[120px] font-Montserrat lg:block hidden">
				<div className="flex gap-8 justify-between">
					<div className="flex gap-[150px]">
						{/* Stay Connected */}
						<div>
							<h3 className="font-semibold mb-3 text-[20px]">Stay Connected</h3>
							<p className="text-[14px] leading-relaxed">
								HEAD OFFICE: <br />
								306B Samfa Plaza Ndola Cresent, Opposite Grand Ibro Hotel, Wuse Zone 5, FCT - Abuja.

							</p>
							<p className="text-[14px] leading-relaxed mt-5">

								Spintex Plaza, No. 133, Spintex Road, at Coca-Cola Roundabout, Accra. Ghana.

							</p>

							<p className="text-[14px]"><strong>Digital Address:</strong> GZ-203-8156</p>

							<p className="mt-3"> +233 547 466 062, +233 541 224 690</p>
							<div className="mt-3 text-[14px]">
								<p>+234 (0) 707 421 3046
									| +234 (0) 707 421 3047
								</p>
							</div>
							<p className="pt-3">+234 (0) 907 949 1515</p>
							<div className=" gap-4 mt-9 ">
								<div className="text-[16px] font-semibold mb-2 ">
									Follow us on social media
								</div>
								{/*  social icons  */}
								<div className="flex gap-3">
									<a
										href="#"
										aria-label="Facebook"
										className="hover:opacity-80 transition"
									>
										<img
											src={facebook1}
											alt="Facebook"
											className="w-6 h-6 object-contain"
										/>
									</a>
									<a
										href="#"
										aria-label="Instagram"
										className="hover:opacity-80 transition"
									>
										<img
											src={instagram1}
											alt="Instagram"
											className="w-6 h-6 object-contain"
										/>
									</a>
									<a
										href="#"
										aria-label="Twitter"
										className="hover:opacity-80 transition"
									>
										<img
											src={x1}
											alt="Twitter"
											className="w-6 h-6 object-contain"
										/>
									</a>
									<a
										href="#"
										aria-label="LinkedIn"
										className="hover:opacity-80 transition"
									>
										<img
											src={linkdin1}
											alt="LinkedIn"
											className="w-6 h-6 object-contain"
										/>
									</a>
									<a
										href="#"
										aria-label="TikTok"
										className="hover:opacity-80 transition"
									>
										<img
											src={tiktok1}
											alt="TikTok"
											className="w-6 h-6 object-contain"
										/>
									</a>
								</div>
							</div>
						</div>

						{/* Quick Links */}
						<div className="relative">
							<h3 className="font-semibold mb-3 text-[20px]">Glidepath</h3>
							<ul className="space-y-4 text-[14px]">
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">Services</a>
								</li>
								<li>
									<a href="#">Packages</a>
								</li>
								<li>
									<a href="#">Contact Us</a>
								</li>
							</ul>
							{/* Email  */}
							<div className="mt-[100px] text-sm absolute">
								<div className="flex  ">
									<div>
										<img
											src={email1}
											alt="Email"
											className="absolute "
										/>
									</div>

									<div className="ml-[50px]">
										<div className="font-semibold mb-[6px]  text-[24px]">
											Email:
										</div>{' '}
										<a
											href="mailto:info@glidepath.com"
											className="hover:underline text-[#292D32] text-[18px]"
										>
											info@glidepathtravels.com
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Instagram Section */}
						<div>
							<h3 className="font-semibold mb-5 text-[18px]">On Instagram</h3>
							<div className="grid grid-cols-3 gap-4">
								<img
									src={img1}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
								<img
									src={img2}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
								<img
									src={img3}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
								<img
									src={img4}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
								<img
									src={img5}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
								<img
									src={img6}
									alt="travel"
									className="w-16 h-auto rounded-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Contact Form  */}
					<div className="col-span-2 -mt-10">
						<form className="flex flex-col gap-[30px] min-w-[350px]">
							<input
								type="text"
								placeholder="Name"
								className="px-4 py-5 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[20px] placeholder-[#615E5B] outline-none w-full"
							/>
							<input
								type="email"
								placeholder="Email address"
								className="px-4 py-5 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[20px] placeholder-[#615E5B] outline-none w-full"
							/>
							<textarea
								rows="3"
								placeholder="Message"
								className="px-4 py-4 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[20px] placeholder-[#615E5B] outline-none w-full"
							></textarea>
							<button className="bg-[#005B8A] text-[#ffffff] py-4 rounded-3xl font-medium text-[24px] hover:bg-blue-900 transition w-full">
								Send now
							</button>
						</form>
					</div>
				</div>
			</footer>

			{/* mobile section*/}
			<section className="lg:hidden text-[#ffffff] font-Montserrat">
				<footer className="relative py-10 px-[16px] bg-[url('/src/assets/images/contactbgm.png')] bg-cover font-Montserrat">
					<div className="absolute inset-0 bg-[#D5E8F2]/40"></div>
					<div className="flex justify-center items-center mt-10">
						<form className="flex flex-col gap-[20px] w-full max-w-[320px]">
							<input
								type="text"
								placeholder="Name"
								className="px-4 py-4 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[12px] placeholder-[#615E5B] outline-none w-full"
							/>
							<input
								type="email"
								placeholder="Email address"
								className="px-4 py-4 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[12px] placeholder-[#615E5B] outline-none w-full"
							/>
							<textarea
								rows="3"
								placeholder="Message"
								className="px-4 py-4 rounded-3xl bg-[#0077B660] text-[#615E5B] text-[12px] placeholder-[#615E5B] outline-none w-full"
							></textarea>
							<div className="flex justify-center">
								<button className="bg-[#005B8A] text-[#ffffff] py-3 rounded-full font-medium text-[14px] hover:bg-blue-900 transition w-[200px]">
									Send now
								</button>
							</div>
						</form>
					</div>
				</footer>
				<footer className="px-[30px] pb-[20px] bg-[url('/src/assets/images/contactbgm.png')] bg-[#005B8A] font-Montserrat">
					<div className="">
						<div className="flex justify-between py-9">
							<div className="">
								<h3 className="font-semibold mb-3 text-[16px]">Glidepath</h3>
								<ul className="space-y-4 text-[14px]">
									<li>
										<a href="#">About Us</a>
									</li>
									<li>
										<a href="#">Services</a>
									</li>
									<li>
										<a href="#">Packages</a>
									</li>
									<li>
										<a href="#">Contact Us</a>
									</li>
								</ul>
							</div>
							{/* Stay Connected */}
							<div>
								<h3 className="font-semibold mb-3 text-[16px]">
									Stay Connected
								</h3>
								<p className="text-[14px] leading-relaxed">
									HEAD OFFICE: <br />
									306B Samfa Plaza Ndola Cresent, <br /> Opposite Grand Ibro Hotel,<br /> Wuse Zone 5, FCT - Abuja.
								</p>
								<p className="text-[14px] leading-relaxed">
									Spintex Plaza, No. 133,  <br />Spintex Road,  at Coca-Cola <br /> Roundabout, Accra. Ghana.
								</p>

								<p> <strong>Digital Address:</strong> GZ-203-8156</p>

								<div className="mt-3 text-[14px]">
									<p> +233 547 466 062</p>
									<p>+233 541 224 690</p>
									<p> +234 (0) 707 421 3046</p>
									<p>+234 (0) 707 421 3047</p>
									<p>+234 (0) 907 949 1515</p>
								</div>
								<div className=" gap-4 mt-9 ">
									<div className="text-[16px] font-semibold mb-2 ">
										Follow us on social media
									</div>
									{/*  social icons  */}
									<div className="flex gap-3">
										<a
											href="#"
											aria-label="Facebook"
											className="hover:opacity-80 transition"
										>
											<img
												src={facebook1}
												alt="Facebook"
												className="w-6 h-6 object-contain"
											/>
										</a>
										<a
											href="https://www.instagram.com/glidepath.travel"
											aria-label="Instagram"
											className="hover:opacity-80 transition"
										>
											<img
												src={instagram1}
												alt="Instagram"
												className="w-6 h-6 object-contain"
											/>
										</a>
										<a
											href="https://x.com/glidepath_tt"
											aria-label="x"
											className="hover:opacity-80 transition"
										>
											<img
												src={x1}
												alt="Twitter"
												className="w-6 h-6 object-contain"
											/>
										</a>
										<a
											href="#"
											aria-label="LinkedIn"
											className="hover:opacity-80 transition"
										>
											<img
												src={linkdin1}
												alt="LinkedIn"
												className="w-6 h-6 object-contain"
											/>
										</a>
										<a
											href="https://www.tiktok.com/@glidepath.travel"
											aria-label="TikTok"
											className="hover:opacity-80 transition"
										>
											<img
												src={tiktok1}
												alt="TikTok"
												className="w-6 h-6 object-contain"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Email under Glidepath */}
					<div className="mt-[10px] text-sm flex  items-center mb-5 gap-2 ">
						<div>
							<img
								src={emailm}
								alt="Email"
								className=" "
							/>
						</div>
						<div>
							<div>
								<div className="font-semibold  text-[16px]">Email:</div>{' '}
								<a
									href="mailto:info@glidepathtravels.com"
									className="hover:underline text-[#ffffff] text-[12px]"
								>
									info@glidepathtravels.com
								</a>
							</div>
						</div>
					</div>
					{/* Instagram Section */}
					<div className="">
						<h3 className="font-semibold mb-4 text-[14px]">On Instagram</h3>
						<div className="flex gap-2">
							<div>
								<img
									src={img1}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover mb-2"
								/>
								<img
									src={img2}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover"
								/>
							</div>
							<div>
								<img
									src={img3}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover mb-2 "
								/>
								<img
									src={img4}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover"
								/>
							</div>
							<div>
								<img
									src={img5}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover mb-2"
								/>
								<img
									src={img6}
									alt="travel"
									className="w-16 h-16 rounded-full object-cover"
								/>
							</div>
						</div>
					</div>
				</footer>
			</section>
		</div>
	);
}

export default Footer;
