import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<nav className="flex justify-between items-center px-6 py-4 bg-black text-white border-b border-gold">
			<div className="flex items-center space-x-3">
				<img src={logo} alt="WebCreator Logo" className="h-10" />
				<span className="text-xl font-semibold text-gold">WebCreator</span>
			</div>
			<ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
				<li className="hover:text-gold cursor-pointer">{t("nav.home")}</li>
				<li className="hover:text-gold cursor-pointer">{t("nav.services")}</li>
				<li className="hover:text-gold cursor-pointer">{t("nav.whyus")}</li>
				<li className="hover:text-gold cursor-pointer">{t("nav.contact")}</li>
			</ul>
			<div className="flex space-x-2 md:space-x-4 text-sm">
				<button
					type="button"
					onClick={() => changeLanguage("fr")}
					className="hover:text-gold"
				>
					FR
				</button>
				<button
					type="button"
					onClick={() => changeLanguage("en")}
					className="hover:text-gold"
				>
					EN
				</button>
				<button
					type="button"
					onClick={() => changeLanguage("ar")}
					className="hover:text-gold"
				>
					AR
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
// This code defines a Navbar component for a web application using React and Tailwind CSS.
