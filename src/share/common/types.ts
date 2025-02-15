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
    title: string;
    image: StaticImageData;
    
    lastPrice?: string;
    firstPrice?: string;
    discount?: string;
    rating: number;
}
export interface NewArrivalsConfig {
    title: string;
    productsInfo: ProductInfo[];
}