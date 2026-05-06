import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/glidePath-logo.svg';
import hiOpen from '../assets/icons/Glide-Burger.svg';
import hiClose from '../assets/icons/Glide-BurgerC.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hamburger from './hamburger.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [isSticky, setIsSticky] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const sections = [
		'home',
		'about',
		'services',
		'packages',
		'Testmonies',
		'contact us',
	];

	useEffect(() => {
		if (location.pathname === '/contact') {
			setActiveSection('contact');
		} else {
			setActiveSection('home');
		}
	}, [location]);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);

			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sections]);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					smooth: true,
					offset: -70,
					duration: 500,
				});
				setActiveSection(section);
			}, 100);
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	const activeStyle = {
		fontWeight: 'bold',
		fontSize: '20px',
		position: 'relative',
		color: '#92C8FF',
	};

	const inactiveStyle = {
		color: '#000000',
		fontWeight: 'normal',
		fontSize: '20px',
	};

	const underlineStyle = {
		content: '""',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: '-4px',
		height: '2px',
		backgroundColor: '#fffff',
	};

	return (
		<>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}

			<nav
				className={`${
					isSticky
						? 'fixed top-0 left-0 right-0 z-50 shadow-md lg:mt-0 mt-[32px] '
						: 'relative z-50 lg:mt-[0px] mt-[0px] '
				} bg-[#ffffff]  rounded-lg backdrop-blur-md lg:mx-[80px] mx-[16px]  transition-all duration-300 `}
			>
				<div className="max-w-[1400px] mx-auto px-[20px] sm:px-[40px] lg:px-[48px]">
					<div className="flex justify-between items-center h-16 lg:h-20">
						{/* Logo */}
						<div>
							<a href="#">
								<img
									src={logo}
									alt="Logo"
									className="lg:w-[199px] w-[126px]"
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								/>
							</a>
						</div>

						{/* Mobile toggle */}
						<button
							className="lg:hidden text-[#ffffff] flex justify-between items-center"
							onClick={handleOpen}
						>
							<img
								src={isOpen ? hiClose : hiOpen}
								alt="Menu"
							/>
						</button>

						<div className="hidden lg:flex items-center space-x-8">
							{sections.map(section => (
								<button
									key={section}
									onClick={() => scrollToSection(section)}
									className="cursor-pointer relative"
									style={
										activeSection === section ? activeStyle : inactiveStyle
									}
								>
									{section === 'cng'
										? 'CNG Conversion'
										: section.charAt(0).toUpperCase() + section.slice(1)}
									{activeSection === section && <span style={underlineStyle} />}
								</button>
							))}
						</div>
						<button className="lg:block hidden bg-[#0077B6] rounded-lg px-[57px] py-[8px]">
							<a
								href="tel:+2348012345678"
								className="text-[16px] font-semibold text-[#FFFFFF]"
							>
								Book Now
							</a>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
