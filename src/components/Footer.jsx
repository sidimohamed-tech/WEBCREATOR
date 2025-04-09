import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="bg-black text-white py-6 text-center border-t border-gold">
			<p className="text-sm">
				&copy; {year} WebCreator. {t("footer.rights")}
			</p>
		</footer>
	);
};

export default Footer;
