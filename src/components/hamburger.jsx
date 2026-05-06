import React, { useEffect, useState } from 'react';
import hiClose from '../assets/icons/hiClose.svg';
import { Link as ScrollLink } from 'react-scroll'; // For scrolling within the page
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // For routing to other pages
import logo from '../assets/logo.svg';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const [showCalendly, setShowCalendly] = useState(false);
	const navigate = useNavigate(); // To handle routing

	useEffect(() => {
		setAnimation('animate-fadeSlideDown');
	}, []);

	const handleClose = () => {
		setAnimation('animate-fadeSlideUp');
		setTimeout(() => setIsOpen(false), 500); // Adjust timeout to match animation duration
	};

	const handleShowCalendly = () => {
		setShowCalendly(true);
	};

	const handleHideCalendly = () => {
		setShowCalendly(false);
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			navigate('/');
			handleClose();
			setTimeout(() => {
				if (sectionId) {
					const element = document.getElementById(sectionId);
					if (element) {
						window.scrollTo({
							top: element.offsetTop - 70,
							behavior: 'smooth',
						});
					}
				}
			}, 100); // Delay to ensure route change has completed
		} else {
			navigate(path);
			handleClose();
		}
	};

	return (
		<div className="fixed top-0 left-0 w-[calc(100%-32px)] font-Montserrat ml-[16px] mx-[32px]    z-[10]">
			<div
				className="fixed inset-0 bg-[#3f3c3c] opacity-50"
				onClick={handleClose}
			></div>
			<div
				className={`relative w-full mt-[32px]    transform transition-transform  duration-500 ease-in-out ${animation}`}
			>
				<div className="bg-[#ffffff] backdrop-blur bg-transparent  rounded-md   w-full pt-[70px]   flex flex-col px-[24px]  gap-[40px] pb-[24px]">
					{/* Scroll to Home Section */}
					<ScrollLink
						to="home"
						duration={500}
						smooth={true}
						offset={-70} // Adjust to navbar height
						onClick={() => handleNavigation('/', 'home')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF] mt-[24px]"
					>
						Home
					</ScrollLink>

					{/* Scroll to About Us Section */}
					<ScrollLink
						to="about"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'about')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF]"
					>
						About Us
					</ScrollLink>

					<ScrollLink
						to="services"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'services')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF]"
					>
						Services
					</ScrollLink>
					<ScrollLink
						to="packages"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'packages')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF]"
					>
						Packages
					</ScrollLink>
					<ScrollLink
						to="Testmonies"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'Testmonies')}
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF]"
					>
						Testimonies
					</ScrollLink>
					<ScrollLink
						to="contact"
						className="text-[24px] leading-[22px] cursor-pointer text-[#FFFFFF]"
						onClick={() => handleNavigation('/', 'contact')}
					>
						Contact Us
					</ScrollLink>

					{/* <div className=" mt-[12px]">
						<a className="rounded-md hover:cursor-pointer  text-[#FF9500] text-gradient border-[#FF9500] border-[3px]  py-[12px] text-[16px] font-bold  flex gap-[8px] justify-center items-center ">
							Get a Quote
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
