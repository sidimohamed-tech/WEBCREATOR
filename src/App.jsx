import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./i18n";

function App() {
	return (
		<div className="bg-black text-white font-sans">
			<Navbar />
			<Hero />
			<Services />
			<WhyUs />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
