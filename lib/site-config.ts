export const siteConfig = {
  name: "Dabali d'Afrique",
  shortName: "Dabali",
  tagline: "Les saveurs de l'Afrique, à Toulouse.",
  description:
    "Restaurant africain et traiteur à Toulouse. Cuisine ouest-africaine, plats à emporter et service traiteur pour vos événements.",
  phone: "05 61 00 00 00",
  phoneHref: "tel:+33561000000",
  address: "71 avenue de Muret, Toulouse",
  hours: [
    "Mardi – Samedi : 12h – 14h30 & 19h – 22h30",
    "Dimanche : 12h – 15h",
    "Fermé le lundi",
  ],
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "La Carte", href: "#carte" },
    { label: "Traiteur", href: "#traiteur" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type MenuCategory = "entrees" | "plats" | "desserts" | "boissons";

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "alloco",
    category: "entrees",
    name: "Alloco & Sauce",
    description: "Plantain frit, piment, oignons",
    price: "8€",
    popular: true,
  },
  {
    id: "pastels",
    category: "entrees",
    name: "Pastels de Poisson",
    description: "Beignets croustillants, sauce tomate épicée",
    price: "9€",
  },
  {
    id: "attiéké",
    category: "entrees",
    name: "Attiéké & Poisson",
    description: "Semoule de manioc, poisson braisé",
    price: "12€",
  },
  {
    id: "yassa",
    category: "plats",
    name: "Poulet Yassa",
    description: "Mariné citron-oignon, riz parfumé",
    price: "14€",
    popular: true,
  },
  {
    id: "mafé",
    category: "plats",
    name: "Mafé de Bœuf",
    description: "Sauce arachide, légumes, riz blanc",
    price: "15€",
  },
  {
    id: "jollof",
    category: "plats",
    name: "Riz Jollof",
    description: "Riz épicé, poulet grillé, légumes",
    price: "13€",
    popular: true,
  },
  {
    id: "thieb",
    category: "plats",
    name: "Thieboudienne",
    description: "Riz au poisson, légumes, sauce tomate",
    price: "16€",
  },
  {
    id: "banane",
    category: "desserts",
    name: "Banane Flambée",
    description: "Banane caramélisée, vanille",
    price: "6€",
  },
  {
    id: "beignets",
    category: "desserts",
    name: "Beignets Sucrés",
    description: "Pâte légère, sucre glace",
    price: "5€",
  },
  {
    id: "bissap",
    category: "boissons",
    name: "Bissap Maison",
    description: "Infusion d'hibiscus, menthe",
    price: "4€",
    popular: true,
  },
  {
    id: "gingembre",
    category: "boissons",
    name: "Jus de Gingembre",
    description: "Frais, légèrement piquant",
    price: "4€",
  },
];

export const services = [
  {
    id: "restaurant",
    title: "Au restaurant",
    description:
      "Savourez nos spécialités dans une ambiance chaleureuse, au cœur de Toulouse.",
    icon: "utensils" as const,
  },
  {
    id: "emporter",
    title: "À emporter",
    description:
      "Commandez vos plats préférés et récupérez-les prêts à déguster.",
    icon: "shopping-bag" as const,
  },
  {
    id: "traiteur",
    title: "Service traiteur",
    description:
      "Mariages, anniversaires, événements corporate — nous sublimons vos moments.",
    icon: "party-popper" as const,
  },
];

export const cateringTags = [
  { label: "Mariages", icon: "heart" as const },
  { label: "Corporate", icon: "briefcase" as const },
  { label: "Anniversaires", icon: "cake" as const },
];
