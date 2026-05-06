import React from 'react';
import HeroSection from '../heroSection.jsx';
import About from '../about.jsx';
import CoreServices from '../coreServices.jsx';

import Nav from '../nav.jsx';
import Kingz from '../kingz.jsx';
import Kingz1 from '../kingz1.jsx';
import Kingz2 from '../kingz2.jsx';

import Packages from '../packages.jsx';
import Destinations from '../destinations.jsx';
import Testimonies from '../testmonies.jsx';

const Home = () => {
	return (
		<>
			<div className="font-satoshi">
				<HeroSection />
				<About />
				<CoreServices />
				<Destinations />
				<Testimonies />
				<Kingz />
				<Kingz1 />
				<Kingz2 />

				{/* <FindUs /> */}
			</div>
		</>
	);
};

export default Home;
