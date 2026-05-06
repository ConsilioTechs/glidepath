import React from 'react';
import Hajj from '../assets/images/GlideHajj.png';
import Umrah from '../assets/images/GlideUmrah.png';
import Hotel from '../assets/images/GlideHotel.png';
import Ticket from '../assets/images/GlideTicket.png';
import Tours from '../assets/images/GlideTours.png';
import Vacation from '../assets/images/GlideVacation.png';
import Offers from './offers';

export default function Packages() {
	const offers = [
		{
			title: 'Hajj',
			location: 'Completed',
			duration: '5 Days - 10 Days',
			price: '₦8.99m/Person',
			image: Hajj,
			tag: 'Hajj',
		},
		{
			title: 'Umrah',
			location: 'Completed',
			duration: '7 Days',
			price: '₦2.49m/Person',
			image: Umrah,
			tag: 'Umrah',
		},
		{
			title: 'Hotel Reservation',
			location: 'Instant',
			duration: '3 Days',
			price: '₦-/Person',
			image: Hotel,
			tag: 'Hotel Reservation',
		},
		{
			title: 'Group Tours',
			location: 'Completed',
			duration: '5 Days - 10 Days',
			price: '₦2.79/Person',
			image: Tours,
			tag: 'Group Tours',
		},
		{
			title: 'Ticket Booking',
			location: 'Instant',
			duration: '1 Way',
			price: '₦-/Person',
			image: Ticket,
			tag: 'Ticket Booking',
		},
		{
			title: 'Vacation Packages',
			location: 'Completed',
			duration: '5 Days - 10 Days',
			price: '₦-/Person',
			image: Vacation,
			tag: 'Vacation Packages',
		},
	];

	const handleConsultClick = offer => {
		// Format the message with package details
		const message = `Hello! I'm interested in consulting about the ${offer.tag} package.\n\nPackage Details:\n- Package: ${offer.tag}\n- Duration: ${offer.duration}\n- Price: ${offer.price}\n- Location: ${offer.location}\n\nPlease provide me with more information.`;

		// Encode the message for URL
		const encodedMessage = encodeURIComponent(message);

		// Create WhatsApp URL
		const whatsappUrl = `https://wa.me/2347074213046?text=${encodedMessage}`;

		// Open WhatsApp in a new tab
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div
			className="relative min-h-screen font-Montserrat bg-cover bg-center lg:pt-[100px] py-16 "
			id="packages"
		>
			<div className="relative  max-w-6xl mx-auto">
				<h2 className="text-[#DBC087] text-[24px] lg:text-5xl font-bold text-center lg:mb-[70px] mb-[30px]">
					Upcoming Offers
				</h2>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{offers.map((offer, index) => (
						<div
							key={index}
							className="bg-[#ffffff] rounded-3xl overflow-hidden shadow-xl flex flex-col"
						>
							{/* Tag Badge */}
							<div className=" pt-[32px] pb-[24px]  text-center">
								<span className="text-[#292D32]  text-[24px] font-semibold">
									{offer.tag}
								</span>
							</div>
							{/* Image Section */}
							<div className=" h-[239px] lg:px-[32px] px-[16px]">
								<img
									src={offer.image}
									alt={offer.title}
									className="w-full h-full rounded-3xl object-cover"
								/>
							</div>

							{/* Content Section */}
							<div className="p-5 flex flex-col flex-grow">
								{/* Location & Duration */}
								<div className="flex items-center justify-center gap-4  text-gray-500 mb-3">
									<div className="flex items-center bg-[#96B8CD]/20 text-[14px] font-medium px-4 py-1 text-[#005B8A] rounded-3xl gap-1">
										<span>{offer.location}</span>
									</div>
									<div className="flex items-center  font-medium gap-1">
										<span>{offer.duration}</span>
									</div>
								</div>

								<div className="flex">
									{/* Price */}
									<div className="mb-4  flex-grow justify-center items-center">
										<p className="lg:text-[20px] text-[16px]  font-medium text-gray-900">
											{offer.price}
										</p>
									</div>

									{/* Book Now Button */}
									<button
										onClick={() => handleConsultClick(offer)}
										className="w-fit bg-[#005B8A] hover:bg-[#164670] text-white font-medium py-[8px] px-4 rounded-full transition-colors"
									>
										Consult
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<Offers />
			</div>
		</div>
	);
}
