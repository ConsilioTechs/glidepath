import React from 'react';

export default function FindUs() {
	return (
		<div>
			<div className="bg-[#FFFEFA]">
				<h6 className="text-center text-[#007BFF] font-light lg:text-[20px] text-[16px] leading-[36px] lg:pt-[80px] pt-[40px]">
					Find us with Ease
				</h6>
				<p className="text-center font-semibold lg:text-[36px] text-[20px] text-[#292929] lg:px-[459px] px-[16px]">
					Conveniently Located Just 10 Minutes from the Airport
				</p>

				<div>
					<div className="w-[100%] h-[520px] mt-[40px]">
						<iframe
							width="100%"
							height="100%"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							src="https://www.google.com/maps?q=Zitaj+Automobile+Ltd,+Abuja&output=embed"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
