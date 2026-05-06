import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/pages/home'; // Create a new Home component to manage all sections

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
