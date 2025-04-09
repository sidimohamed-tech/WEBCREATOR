import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-black text-white">
			<h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold">
				WebCreator
			</h1>
			<p className="text-lg md:text-2xl mb-6 max-w-2xl">
				{t("hero.subtitle", {
					defaultValue: "Payez pour un site web créé en moins d'une semaine.",
				})}
			</p>
			<a
				href="https://wa.me/22220913944"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
			>
				{t("hero.cta", { defaultValue: "Créer mon site" })}
			</a>
		</section>
	);
};

export default Hero;
