import { Product, Category } from "./types";

import maleSlateHoodieSet from "./assets/images/zoni_male_slate_hoodie_set_1794775370482.jpg";
import maleWaffleCaramel from "./assets/images/zoni_male_waffle_caramel_1794775371290.jpg";
import femaleBurgundyActivewear from "./assets/images/zoni_female_burgundy_activewear_1794775370108.jpg";
import femaleBlushTracksuit from "./assets/images/zoni_female_blush_tracksuit_1794775371734.jpg";
import maleVarsityBlackAmber from "./assets/images/zoni_male_varsity_black_amber_1794775372729.jpg";
import femaleVarsityMagenta from "./assets/images/zoni_female_varsity_magenta_1794775372882.jpg";
import maleEmeraldTracksuit from "./assets/images/zoni_male_emerald_tracksuit_1794775373249.jpg";
import malePoloBlackCrimson from "./assets/images/zoni_male_polo_black_crimson_1794775373357.jpg";
import femaleEspressoCoord from "./assets/images/zoni_female_espresso_coord_1794775374746.jpg";
import femaleLavenderHoodie from "./assets/images/zoni_female_lavender_hoodie_1794775374838.jpg";
import maleCobaltKit from "./assets/images/zoni_male_cobalt_kit_1794775376242.jpg";
import femaleWhiteGymSet from "./assets/images/zoni_female_white_gym_set_1794775376026.jpg";
import oemFactoryStudio from "./assets/images/zoni_oem_factory_studio_1794775377045.jpg";
import bulkHoodiesShowroom from "./assets/images/zoni_bulk_hoodies_showroom_1794775377089.jpg";
import heroHoodiesBanner from "./assets/images/zoni_hero_hoodies_1794774732215.jpg";
import heroVarsityBanner from "./assets/images/zoni_hero_varsity_1794774732565.jpg";
import heroActivewearBanner from "./assets/images/zoni_hero_activewear_1794774733620.jpg";

export const ZONI_INSTAGRAM_URL = "https://www.instagram.com/zonisport2021/?hl=en";
export const ZONI_WHATSAPP_NUMBER = "923000000000";

export const LOOKBOOK_MEDIA = {
  menFeatured: maleWaffleCaramel,
  menSecondary: maleCobaltKit,
  womenFeatured: femaleBurgundyActivewear,
  womenSecondary: femaleBlushTracksuit,
  showroom: bulkHoodiesShowroom,
  embroidery: oemFactoryStudio,
  heroActivewear: heroActivewearBanner,
  heroHoodies: heroHoodiesBanner,
  heroVarsity: heroVarsityBanner
};

export const ZONI_CRAFT_STAGES = [
  {
    step: "01. Custom Logo & Embroidery",
    image: oemFactoryStudio,
    desc: "High-density chest embroidery, chenille patches & private labels."
  },
  {
    step: "02. Custom Colorways & Fleece",
    image: bulkHoodiesShowroom,
    desc: "Heavyweight 380–450 GSM cotton fleece tailored in Sialkot."
  },
  {
    step: "03. Export Finish & Worldwide Dispatch",
    image: heroActivewearBanner,
    desc: "Bulk production & air cargo delivery for global activewear brands."
  }
];

export const DEPARTMENT_CARDS: Category[] = [
  {
    id: "hoodies",
    sportId: "hoodies",
    name: "Custom Hoodies",
    nameUrdu: "",
    description: "Heavyweight fleece & waffle sets",
    count: 4,
    image: maleSlateHoodieSet
  },
  {
    id: "activewear",
    sportId: "activewear",
    name: "Women's Activewear",
    nameUrdu: "",
    description: "Seamless compression gym co-ords",
    count: 3,
    image: femaleBurgundyActivewear
  },
  {
    id: "varsity-jackets",
    sportId: "varsity-jackets",
    name: "Varsity & Outerwear",
    nameUrdu: "",
    description: "Chenille wool & contrast bombers",
    count: 2,
    image: maleVarsityBlackAmber
  },
  {
    id: "tracksuits",
    sportId: "tracksuits",
    name: "Tracksuits & Team Kits",
    nameUrdu: "",
    description: "Striped tricot & fleece sets",
    count: 4,
    image: maleEmeraldTracksuit
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "zoni-male-slate-hoodie-set",
    name: "Slate & Rust Lined Fleece Hoodie Set",
    description: "Redesigned Zoni Sport signature heavyweight slate-navy pullover hoodie with contrast burnt-orange hood lining and tapered joggers.",
    sport: "hoodies",
    gender: "men",
    productType: "tracksuit",
    category: "hoodies",
    price: 0,
    image: maleSlateHoodieSet,
    secondaryImage: heroHoodiesBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-burgundy-activewear",
    name: "Burgundy Seamless Bra & Legging Set",
    description: "4-way stretch high-compression seamless gym sports bra and high-waisted sculpted leggings in deep wine burgundy.",
    sport: "activewear",
    gender: "women",
    productType: "activewear",
    category: "activewear",
    price: 0,
    image: femaleBurgundyActivewear,
    secondaryImage: femaleWhiteGymSet,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-waffle-caramel-set",
    name: "Cream Waffle & Caramel Suede Hoodie Set",
    description: "Textured waffle-knit pullover hoodie featuring caramel suede shoulder and elbow panels paired with matching cargo waffle joggers.",
    sport: "hoodies",
    gender: "men",
    productType: "tracksuit",
    category: "hoodies",
    price: 0,
    image: maleWaffleCaramel,
    secondaryImage: maleSlateHoodieSet,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-blush-tracksuit",
    name: "Blush Cropped Zip Hoodie & Jogger Set",
    description: "Soft blush-pink cropped full-zip fleece jacket paired with relaxed high-rise cuffed joggers.",
    sport: "tracksuits",
    gender: "women",
    productType: "tracksuit",
    category: "tracksuits",
    price: 0,
    image: femaleBlushTracksuit,
    secondaryImage: femaleEspressoCoord,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-varsity-black-amber",
    name: "Black & Amber Leather-Sleeve Varsity Jacket",
    description: "Heavyweight black Melton wool-body varsity letterman jacket with mustard-amber sleeves, striped ribbing, and Z chest crest.",
    sport: "varsity-jackets",
    gender: "men",
    productType: "jacket",
    category: "varsity-jackets",
    price: 0,
    image: maleVarsityBlackAmber,
    secondaryImage: heroVarsityBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-varsity-magenta",
    name: "Magenta & White Varsity Bomber Set",
    description: "Vibrant magenta and crisp white snap-front varsity bomber jacket styled with matching athletic joggers.",
    sport: "varsity-jackets",
    gender: "women",
    productType: "jacket",
    category: "varsity-jackets",
    price: 0,
    image: femaleVarsityMagenta,
    secondaryImage: heroVarsityBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-emerald-tracksuit",
    name: "Forest Emerald Triple-Stripe Tracksuit",
    description: "Deep forest emerald full-zip poly-tricot athletic tracksuit with crisp white shoulder and leg stripes.",
    sport: "tracksuits",
    gender: "men",
    productType: "tracksuit",
    category: "tracksuits",
    price: 0,
    image: maleEmeraldTracksuit,
    secondaryImage: heroVarsityBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-espresso-coord",
    name: "Espresso Oversized Zip Fleece Co-ord",
    description: "Rich chocolate espresso full-zip fleece hoodie and matching wide-leg lounge sweatpants.",
    sport: "tracksuits",
    gender: "women",
    productType: "tracksuit",
    category: "tracksuits",
    price: 0,
    image: femaleEspressoCoord,
    secondaryImage: femaleBlushTracksuit,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-polo-black-crimson",
    name: "Black & Crimson Raglan Performance Polo",
    description: "Moisture-wicking black and crimson shoulder-panel club polo with white collar tipping and training shorts.",
    sport: "polos-teamwear",
    gender: "men",
    productType: "teamwear",
    category: "polos-teamwear",
    price: 0,
    image: malePoloBlackCrimson,
    secondaryImage: heroActivewearBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-lavender-hoodie",
    name: "Lilac Lavender Fleece Pullover Hoodie",
    description: "Pastel lilac heavyweight brushed cotton fleece hoodie paired with optic-white cuffed joggers.",
    sport: "hoodies",
    gender: "women",
    productType: "hoodie",
    category: "hoodies",
    price: 0,
    image: femaleLavenderHoodie,
    secondaryImage: bulkHoodiesShowroom,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-male-cobalt-kit",
    name: "Cobalt Mesh Training Jersey & Pant Kit",
    description: "Breathable cobalt blue hexagonal micro-mesh training jersey with black tapered performance track pants.",
    sport: "polos-teamwear",
    gender: "men",
    productType: "teamwear",
    category: "polos-teamwear",
    price: 0,
    image: maleCobaltKit,
    secondaryImage: heroActivewearBanner,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  },
  {
    id: "zoni-female-white-gym-set",
    name: "Optic White Bra & Navy Sculpt Leggings",
    description: "Seamless optic white racerback sports bra styled with high-rise deep navy compression leggings.",
    sport: "activewear",
    gender: "women",
    productType: "activewear",
    category: "activewear",
    price: 0,
    image: femaleWhiteGymSet,
    secondaryImage: femaleBurgundyActivewear,
    sizes: [],
    features: [],
    rating: 5.0,
    reviewsCount: 0,
    isCustomizable: true,
    inStock: true
  }
];
