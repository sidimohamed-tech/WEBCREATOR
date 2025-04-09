import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section
			id="contact"
			className="py-16 px-4 text-center bg-black text-white"
		>
			<h2 className="text-3xl md:text-4xl font-bold mb-10 text-gold">
				{t("contact.title")}
			</h2>
			<div className="space-y-6 text-lg">
				<p>
					📧{" "}
					<a
						href="mailto:sidimed.sidimed.147@gmail.com"
						className="text-gold underline hover:text-white transition"
					>
						sidimed.sidimed.147@gmail.com
					</a>
				</p>
				<p>
					📱{" "}
					<a
						href="https://wa.me/22220913944"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gold underline hover:text-white transition"
					>
						{t("contact.whatsapp")}
					</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;
