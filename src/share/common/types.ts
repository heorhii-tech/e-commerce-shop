import { StaticImageData } from "next/image";

export interface NavigationItem {
  title: string;
  href: string;
}
export interface CartHeaderConfig {
  icon: string;
  href: string;
}
export interface HeaderConfig {
  navigation: NavigationItem[];
  cart: CartHeaderConfig;
}
export interface IntroConfig {
  title: string;
  subtitle: string;
  buttonTitle: string;
  statistic: StatisticItem[];
  image: StaticImageData;
}
export interface StatisticItem {
  digit: string;
  subtitle: string;
}
export interface ProductInfo {
  id: number;
  title: string;
  image: StaticImageData;
  quantity: number;
  lastPrice?: string;
  firstPrice?: string;
  discount?: string;
  rating: number;
}
export interface NewArrivalsConfig {
  title: string;
  productsInfo: ProductInfo[];
}

export interface DressStyleConfig {
  title: string;
  cardsInfo: CardInfo[];
}
export interface CardInfo {
  cardTitle: string;
  cardImage: StaticImageData;
}

export interface CartProductConfig {
  deleteIcon: string;
}

export interface CartSummaryConfig {
  title: string;
  subTotalTitle: string;
  deleliveryTitle: string;
  totalTitle: string;
  buttonTitle: string;
}
export interface CartConfig {
  title: string;
  product: CartProductConfig;
  summary: CartSummaryConfig;
}
