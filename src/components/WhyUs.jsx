import React from "react";
import { useTranslation } from "react-i18next";

const reasons = [
	{ key: "experts", emoji: "🤖" },
	{ key: "premium", emoji: "💎" },
	{ key: "allincluded", emoji: "🛠️" },
];

const WhyUs = () => {
	const { t } = useTranslation();

	return (
		<section id="whyus" className="py-16 px-4 text-center bg-black text-white">
			<h2 className="text-3xl md:text-4xl font-bold mb-10 text-gold">
				{t("whyus.title")}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{reasons.map((item) => (
					<div
						key={item.key}
						className="bg-black border border-gold p-6 rounded-lg hover:bg-gold hover:text-black transition"
					>
						<div className="text-4xl mb-4">{item.emoji}</div>
						<p className="text-lg font-medium">{t(`whyus.${item.key}`)}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyUs;
