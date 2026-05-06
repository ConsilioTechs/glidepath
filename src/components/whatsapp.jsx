import React from 'react';
import whatsapp from '../assets/icons/whatsapp.svg';
const WhatsAppButton = () => {
	const openWhatsApp = () => {
		const phoneNumber = '+2348037472400'; // Replace this with the correct phone number format
		const message = `Hey there,%0A
I would like to make a booking. Could you please provide me with more details about room availability, pricing, and any special offers?%0A
Thank you.`;

		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(url, '_blank');
	};

	return (
		<button
			onClick={openWhatsApp}
			className="w-full h-full flex justify-between items-center gap-3 px-[30px] py-[12px] "
		>
			<div>
				<img
					src={whatsapp}
					alt="whatsapp"
				/>
			</div>
			<p>Quick Chat</p>
		</button>
	);
};

export default WhatsAppButton;
