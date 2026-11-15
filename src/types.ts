export type SportId =
  | "all"
  | "men"
  | "women"
  | "hoodies"
  | "tracksuits"
  | "varsity-jackets"
  | "activewear"
  | "polos-teamwear";

export type Currency = "PKR" | "USD" | "GBP" | "AED";

export type ProductCategory = "hoodie" | "tracksuit" | "jacket" | "activewear" | "teamwear";

export interface ProductColorSwatch {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  nameUrdu?: string;
  description: string;
  sport: Exclude<SportId, "all" | "men" | "women">;
  gender?: "men" | "women" | "unisex";
  productType: ProductCategory;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImage?: string;
  sizes: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
  badge?: string;
  isCustomizable: boolean;
  inStock?: boolean;
  specifications?: Record<string, string>;
  colors?: string[];
  swatches?: ProductColorSwatch[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
  customName?: string;
  customNumber?: string;
  customTeam?: string;
  customColor?: string;
}

export interface HeroSlide {
  id: number;
  tagline: string;
  title: string;
  subtitle: string;
  image: string;
  accentText: string;
  ctaText: string;
  sportTag?: string;
  stats?: { label: string; value: string }[];
}

export interface Category {
  id: string;
  sportId: SportId;
  name: string;
  nameUrdu: string;
  description: string;
  count: number;
  image: string;
  popularItems?: string[];
}

export interface QuickOrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  whatsappNumber: string;
  paymentMethod?: "cod" | "easypaisa" | "bank" | "card";
  notes?: string;
}

export interface TeamQuoteInquiry {
  clubName: string;
  contactPerson: string;
  phone: string;
  email: string;
  sport: SportId;
  quantity: number;
  customLogosNeeded: boolean;
  budgetRange: "economy" | "pro" | "export";
  deadline: string;
  comments: string;
}
