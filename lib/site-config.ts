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

export type MenuCategory = "entrees" | "plats" | "desserts";

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
];

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "pastel",
    category: "entrees",
    name: "Entrée Pastel",
    description: "Pastel doré et croustillant, servi à la pièce.",
    price: "1 ps : 5€",
    image: "/menu/pastel.png",
    popular: true,
  },
  {
    id: "beignet-vermicelle",
    category: "entrees",
    name: "Entrée Beignet aux vermicelles",
    description: "Vermicelles épicées en beignet, texture légère et parfumée.",
    price: "5€",
    image: "/menu/entree_beignet_vermicelle.png",
  },
  {
    id: "beignet-jaune-sucre",
    category: "entrees",
    name: "Entrée Beignet jaune",
    description: "Beignet jaune avec poudre de sucre vanillé.",
    price: "5€",
    image: "/menu/beignets_jaunes_sucre.png",
  },
  {
    id: "choukouya-boeuf",
    category: "entrees",
    name: "Choukouya de bœuf",
    description: "Bœuf assaisonné, oignons et légumes croquants.",
    price: "12€",
    image: "/menu/choukouya_de_boeuf.png",
  },
  {
    id: "salade-boeuf",
    category: "entrees",
    name: "Crudités ou salade viande de bœuf",
    description: "Assiette fraîche avec bœuf, œuf et crudités.",
    price: "13€50",
    image: "/menu/salade_viande_boeuf.png",
  },
  {
    id: "yassa-poulet",
    category: "plats",
    name: "Yassa poulet",
    description: "Poulet, oignons confits, riz et alloco.",
    price: "14€",
    image: "/menu/yassa_poulet.png",
    popular: true,
  },
  {
    id: "mafe-poulet",
    category: "plats",
    name: "Mafé poulet",
    description: "Poulet braisé, sauce mafé, riz et alloco.",
    price: "14€",
    image: "/menu/mafé_poulet.png",
  },
  {
    id: "haricot-poulet",
    category: "plats",
    name: "Haricot au poulet",
    description: "Haricots mijotés, poulet braisé et sauce verte.",
    price: "14€",
    image: "/menu/haricot_poulet.png",
  },
  {
    id: "poulet-braise-alloco",
    category: "plats",
    name: "Poulet braisé Alloco",
    description: "Poulet grillé, alloco et compotée d'oignons.",
    price: "14€",
    image: "/menu/poulet_braisse_alloco.png",
    popular: true,
  },
  {
    id: "dokounou-poisson-dindon",
    category: "plats",
    name: "Dokounou au poisson et dindon",
    description: "Dokounou, poisson, dindon, crevettes et sauce tomate.",
    price: "14€",
    image: "/menu/dokounou_au_poisson.png",
  },
  {
    id: "tchep-poulet",
    category: "plats",
    name: "Tchêp au poulet",
    description: "Riz parfumé, poulet grillé, légumes et alloco.",
    price: "15€",
    image: "/menu/tiep_poulet.png",
  },
  {
    id: "daurade-braisee",
    category: "plats",
    name: "Daurade braisée royale 800g",
    description: "Daurade entière, riz épicé et alloco.",
    price: "24€",
    image: "/menu/daurade_braisse.png",
    popular: true,
  },
  {
    id: "foutou-banane",
    category: "plats",
    name: "Foutou banane au poulet sauce graine",
    description: "Foutou banane, poulet et sauce graine généreuse.",
    price: "18€",
    image: "/menu/foutou_banane.png",
  },
  {
    id: "garba-thon",
    category: "plats",
    name: "Garba au poisson thon",
    description: "Attiéké, poisson thon frit et garniture fraîche.",
    price: "18€",
    image: "/menu/garba_au_poisson_thon.png",
  },
  {
    id: "placali-poulet-tripes",
    category: "plats",
    name: "Placali au poulet et tripes de bœuf",
    description: "Placali, poulet, tripes de bœuf et sauce gombo.",
    price: "18€",
    image: "/menu/placali_au_poulet_tripe_de_boeuf.png",
  },
  {
    id: "soupe-boeuf-tripes",
    category: "plats",
    name: "Soupe au queue de bœuf et tripes",
    description: "Soupe africaine relevée, queue de bœuf et tripes.",
    price: "18€",
    image: "/menu/soupe_africaine_boeuf_tripes.png",
  },
  {
    id: "gateau-chocolat",
    category: "desserts",
    name: "Gâteau au chocolat + crème anglaise",
    description: "Dessert chocolaté, crème anglaise et filet de chocolat.",
    price: "4€50",
    image: "/menu/delice_chocalat_creme_anglaise.png",
    popular: true,
  },
  {
    id: "beignet-sucre",
    category: "desserts",
    name: "Beignet classique au sucre",
    description: "Beignets dorés, roulés dans le sucre.",
    price: "5€",
    image: "/menu/beignet_sucre.png",
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
