import { Product, Category } from "./types";

import heroMaleStreetwear from "./assets/images/zoni_hero_male_streetwear_1794861705554.jpg";
import heroFemaleFitness from "./assets/images/zoni_hero_female_fitness_1794861705996.jpg";
import heroDuoCampaign from "./assets/images/zoni_hero_duo_campaign_1794861705212.jpg";

import prodMaleBlackRedHoodie from "./assets/images/zoni_prod_male_black_red_hoodie_1794861707711.jpg";
import prodMaleRedVarsity from "./assets/images/zoni_prod_male_red_varsity_1794861706925.jpg";
import prodFemaleBlackCrimsonGym from "./assets/images/zoni_prod_female_black_crimson_gym_1794861708144.jpg";
import prodFemaleRedTracksuit from "./assets/images/zoni_prod_female_red_tracksuit_1794861708895.jpg";
import prodMaleStreetOversized from "./assets/images/zoni_prod_male_street_oversized_1794861709761.jpg";
import prodFemaleVarsityBlackRed from "./assets/images/zoni_prod_female_varsity_black_red_1794861709439.jpg";
import prodMaleTricotTracksuit from "./assets/images/zoni_prod_male_tricot_tracksuit_1794861709945.jpg";
import prodFemaleWhiteRedActive from "./assets/images/zoni_prod_female_white_red_active_1794861712554.jpg";
import prodMalePoloRedBlack from "./assets/images/zoni_prod_male_polo_red_black_1794861711799.jpg";
import prodMaleTeamKitRedBlack from "./assets/images/zoni_prod_male_team_kit_red_black_1794861712195.jpg";
import factoryRedBlackEmbroidery from "./assets/images/zoni_factory_red_black_embroidery_1794861711599.jpg";

export const ZONI_INSTAGRAM_URL = "https://www.instagram.com/zonisport2021/?hl=en";
export const ZONI_WHATSAPP_NUMBER = "923000000000";

export const LOOKBOOK_MEDIA = {
  menFeatured: prodMaleStreetOversized,
  menSecondary: prodMaleTeamKitRedBlack,
  womenFeatured: prodFemaleBlackCrimsonGym,
  womenSecondary: prodFemaleRedTracksuit
};

export const ZONI_CRAFT_STAGES = [
  {
    step: "01. Custom Zoni Crest Embroidery",
    image: factoryRedBlackEmbroidery,
    desc: "Multi-head Tajima stitching of custom brand crests on red & black fleece."
  },
  {
    step: "02. Coordinated Men & Women Lines",
    image: heroDuoCampaign,
    desc: "Matched streetwear hoodies, tracksuits, varsity jackets & gym sets."
  },
  {
    step: "03. Athletic Performance Studio",
    image: heroFemaleFitness,
    desc: "High-stretch gym wear & export-grade bulk manufacturing worldwide."
  }
];

export const DEPARTMENT_CARDS: Category[] = [
  {
    id: "hoodies",
    sportId: "hoodies",
    name: "Streetwear & Hoodies",
    nameUrdu: "",
    description: "Red & black fleece sets with Zoni crest",
    count: 3,
    image: prodMaleBlackRedHoodie
  },
  {
    id: "activewear",
    sportId: "activewear",
    name: "Gym & Fitness Wear",
    nameUrdu: "",
    description: "Seamless sports bras & compression leggings",
    count: 3,
    image: prodFemaleBlackCrimsonGym
  },
  {
    id: "varsity-jackets",
    sportId: "varsity-jackets",
    name: "Varsity & Outerwear",
    nameUrdu: "",
    description: "Crimson & black letterman bombers",
    count: 2,
    image: prodMaleRedVarsity
  },
  {
    id: "tracksuits",
    sportId: "tracksuits",
    name: "Sports Tracksuits & Kits",
    nameUrdu: "",
    description: "Full-zip tricot & matchday kits",
    count: 4,
    image: prodMaleTricotTracksuit
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "zoni-male-black-red-hoodie",
    name: "Black & Crimson Zoni Fleece Hoodie Set",
    description: "Heavyweight jet-black cotton fleece hoodie with crimson hood lining and Zoni chest & thigh embroidery.",
    sport: "hoodies",
    gender: "men",
    productType: "tracksuit",
    category: "hoodies",
    price: 0,
    image: prodMaleBlackRedHoodie,
    secondaryImage: heroMaleStreetwear,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-black-crimson-gym",
    name: "Black & Crimson Zoni Seamless Gym Set",
    description: "Sculpted matte black sports bra and high-rise compression leggings finished with crimson contour piping and Zoni logo.",
    sport: "activewear",
    gender: "women",
    productType: "activewear",
    category: "activewear",
    price: 0,
    image: prodFemaleBlackCrimsonGym,
    secondaryImage: heroFemaleFitness,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-red-varsity",
    name: "Crimson & Black Zoni Leather Varsity Jacket",
    description: "Melton wool crimson varsity letterman jacket with jet-black sleeves and embroidered Zoni crest.",
    sport: "varsity-jackets",
    gender: "men",
    productType: "jacket",
    category: "varsity-jackets",
    price: 0,
    image: prodMaleRedVarsity,
    secondaryImage: prodFemaleVarsityBlackRed,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-red-tracksuit",
    name: "Crimson Zip Hoodie & Black Jogger Tracksuit",
    description: "Cropped crimson full-zip fleece jacket paired with red-piped black joggers stamped with Zoni branding.",
    sport: "tracksuits",
    gender: "women",
    productType: "tracksuit",
    category: "tracksuits",
    price: 0,
    image: prodFemaleRedTracksuit,
    secondaryImage: heroDuoCampaign,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-street-oversized",
    name: "Charcoal Oversized Zoni Streetwear Set",
    description: "Boxy drop-shoulder fleece hoodie featuring oversized Zoni Sports Wear chest print and wide-leg sweatpants.",
    sport: "hoodies",
    gender: "men",
    productType: "tracksuit",
    category: "hoodies",
    price: 0,
    image: prodMaleStreetOversized,
    secondaryImage: prodMaleBlackRedHoodie,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-varsity-black-red",
    name: "Jet-Black & Crimson Varsity Bomber Set",
    description: "Black varsity jacket with satin crimson sleeves, striped ribbed trim, and Zoni chest emblem.",
    sport: "varsity-jackets",
    gender: "women",
    productType: "jacket",
    category: "varsity-jackets",
    price: 0,
    image: prodFemaleVarsityBlackRed,
    secondaryImage: heroDuoCampaign,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-tricot-tracksuit",
    name: "Black & Crimson Triple-Stripe Tricot Tracksuit",
    description: "Full-zip black poly-tricot athletic tracksuit with red-and-white sleeve & leg stripes and Zoni chest crest.",
    sport: "tracksuits",
    gender: "men",
    productType: "tracksuit",
    category: "tracksuits",
    price: 0,
    image: prodMaleTricotTracksuit,
    secondaryImage: heroMaleStreetwear,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-white-red-active",
    name: "Optic White & Crimson Fitness Bra Set",
    description: "White racerback seamless sports bra displaying the Zoni red-and-black crest paired with crimson-trimmed leggings.",
    sport: "activewear",
    gender: "women",
    productType: "activewear",
    category: "activewear",
    price: 0,
    image: prodFemaleWhiteRedActive,
    secondaryImage: prodFemaleBlackCrimsonGym,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-polo-red-black",
    name: "Black & Crimson Raglan Zoni Team Polo",
    description: "Moisture-wicking black and crimson raglan performance polo shirt with white collar tipping and Zoni embroidery.",
    sport: "polos-teamwear",
    gender: "men",
    productType: "teamwear",
    category: "polos-teamwear",
    price: 0,
    image: prodMalePoloRedBlack,
    secondaryImage: prodMaleTeamKitRedBlack,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-team-kit-red-black",
    name: "Scarlet Geometric Sublimated Team Kit",
    description: "Breathable scarlet and black geometric training jersey and tapered track pants branded with Zoni Sports Wear.",
    sport: "polos-teamwear",
    gender: "men",
    productType: "teamwear",
    category: "polos-teamwear",
    price: 0,
    image: prodMaleTeamKitRedBlack,
    secondaryImage: prodMalePoloRedBlack,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-hero-capsule-men",
    name: "Zoni Pro Raglan Streetwear Tracksuit",
    description: "Black and crimson paneled streetwear tracksuit featuring bold chest Zoni Sports Wear print.",
    sport: "hoodies",
    gender: "men",
    productType: "tracksuit",
    category: "hoodies",
    price: 0,
    image: heroMaleStreetwear,
    secondaryImage: prodMaleBlackRedHoodie,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-hero-capsule-women",
    name: "Zoni Cropped Track Jacket & Gym Co-ord",
    description: "3-piece matte black & crimson cropped zip track jacket, seamless sports bra, and high-rise leggings.",
    sport: "activewear",
    gender: "women",
    productType: "activewear",
    category: "activewear",
    price: 0,
    image: heroFemaleFitness,
    secondaryImage: prodFemaleBlackCrimsonGym,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  }
];
