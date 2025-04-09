import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	fr: {
		translation: {
			nav: {
				home: "Accueil",
				services: "Services",
				whyus: "Pourquoi nous ?",
				contact: "Contact",
			},
			hero: {
				subtitle: "Payez pour un site web créé en moins d'une semaine.",
				cta: "Créer mon site",
			},
			services: {
				title: "Ce que nous vous offrons",
				site: "Création de sites vitrines sur mesure",
				delivery: "Livraison rapide en moins de 7 jours",
				design: "Design responsive et élégant",
				languages: "Site en français, anglais et arabe",
				support: "Support personnalisé",
			},
			whyus: {
				title: "Pourquoi nous choisir ?",
				experts: "Une équipe d’experts IA à votre service",
				premium: "Un design haut de gamme et sur-mesure",
				allincluded: "Aucun souci technique : on s’occupe de tout",
			},
			contact: {
				title: "Contactez-nous",
				whatsapp: "Discuter sur WhatsApp",
			},
			footer: {
				rights: "Tous droits réservés.",
			},
		},
	},
	en: {
		translation: {
			nav: {
				home: "Home",
				services: "Services",
				whyus: "Why Us",
				contact: "Contact",
			},
			hero: {
				subtitle: "Pay to get your website created in less than a week.",
				cta: "Build my site",
			},
			services: {
				title: "What We Offer",
				site: "Custom business website creation",
				delivery: "Fast delivery in less than 7 days",
				design: "Responsive and elegant design",
				languages: "Site in French, English, and Arabic",
				support: "Personalized support",
			},
			whyus: {
				title: "Why Choose Us?",
				experts: "An AI expert team at your service",
				premium: "High-end and custom design",
				allincluded: "No technical hassle: we take care of everything",
			},
			contact: {
				title: "Contact Us",
				whatsapp: "Chat on WhatsApp",
			},
			footer: {
				rights: "All rights reserved.",
			},
		},
	},
	ar: {
		translation: {
			nav: {
				home: "الرئيسية",
				services: "الخدمات",
				whyus: "لماذا نحن؟",
				contact: "اتصال",
			},
			hero: {
				subtitle: "احصل على موقع إلكتروني في أقل من أسبوع.",
				cta: "أنشئ موقعي",
			},
			services: {
				title: "ماذا نقدم لك",
				site: "إنشاء مواقع احترافية حسب الطلب",
				delivery: "تسليم سريع في أقل من 7 أيام",
				design: "تصميم متجاوب وأنيق",
				languages: "الموقع بالفرنسية والإنجليزية والعربية",
				support: "دعم شخصي",
			},
			whyus: {
				title: "لماذا نحن؟",
				experts: "فريق من خبراء الذكاء الاصطناعي في خدمتك",
				premium: "تصميم فاخر ومخصص",
				allincluded: "لا مشاكل تقنية، نحن نتكفل بكل شيء",
			},
			contact: {
				title: "اتصل بنا",
				whatsapp: "تحدث على واتساب",
			},
			footer: {
				rights: "جميع الحقوق محفوظة.",
			},
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "fr",
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
