import React from "react";
import { useTranslation } from "react-i18next";

const services = [
	{ key: "site", emoji: "🌐" },
	{ key: "delivery", emoji: "🕒" },
	{ key: "design", emoji: "🎨" },
	{ key: "languages", emoji: "🌍" },
	{ key: "support", emoji: "🤝" },
];

const Services = () => {
	const { t } = useTranslation();

	return (
		<section
			id="services"
			className="py-16 px-4 text-center bg-black text-white"
		>
			<h2 className="text-3xl md:text-4xl font-bold mb-10 text-gold">
				{t("services.title")}
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{services.map((item) => (
					<div
						key={item.key}
						className="border border-gold rounded-lg p-6 hover:bg-gold hover:text-black transition"
					>
						<div className="text-3xl mb-4">{item.emoji}</div>
						<h3 className="text-xl font-semibold">
							{t(`services.${item.key}`)}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
