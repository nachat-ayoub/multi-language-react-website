import image_ar from "../assets/image_ar.jpg";
import image_en from "../assets/image_en.jpg";
import image_fr from "../assets/image_fr.jpg";

const site_data = {
  ar: {
    isRTL: true,
    routes: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
    ],
    welcom: {
      home: "أهلا ومرحبا بكم في الصفحة الرئيسية!",
      about: "أهلا ومرحبا بكم في صفحة من نحن!",
    },
    error_404: "الصفحة غير موجودة",
    image: image_ar,
  },
  fr: {
    isRTL: false,
    routes: [
      { name: "accueil", path: "/" },
      { name: "à propos de nous", path: "/about" },
    ],
    welcom: {
      home: "Bonjour et bienvenue sur la page d'accueil!",
      about: "Bonjour et bienvenue sur la page à propos de nous!",
    },
    error_404: "Page non trouvée",
    image: image_fr,
  },
  en: {
    isRTL: false,
    routes: [
      { name: "home", path: "/" },
      { name: "about us", path: "/about" },
    ],
    welcom: {
      home: "Hello and welcome to the home page!",
      about: "Hello and welcome to the about us page!",
    },
    error_404: "page not found",
    image: image_en,
  },
};

export { site_data };
