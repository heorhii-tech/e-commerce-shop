import { CartHeaderConfig, HeaderConfig, NavigationItem, IntroConfig, StatisticItem,NewArrivalsConfig } from "./types";
import introImage from "../../../public/images/intro-image.png"
import cartIcon from "../../../public/icons/cart-icon.svg";
import productImage1 from "../../../public/images/product-1.png"
import productImage2 from "../../../public/images/product-2.png"
import productImage3 from "../../../public/images/product-3.png"
import productImage4 from "../../../public/images/product-4.png"
const NAVIGATION_CONFIG: NavigationItem[] = [
  { title: "HOME", href: "/" },
  { title: "ON SALE", href: "/" },
  { title: "NEW ARRIVALS", href: "/" },
  { title: "BEST BRANDS", href: "/" },
];
const CART_HEADER_CONFIG: CartHeaderConfig = {
  icon: cartIcon,

  href: "/cart",
};
export const HEADER_CONFIG: HeaderConfig = {
  navigation: NAVIGATION_CONFIG,
  cart: CART_HEADER_CONFIG,
};
export const INTRO_STATISTIC: StatisticItem[] = [
  {
    digit: "200+",
    subtitle: "International Brands",
  },
  {
    digit: "2.000+",
    subtitle: "High-Quality Products",
  },
  {
    digit: "30.000+",
    subtitle: "Happy Customers",
  },
];

export const INTRO_CONFIG: IntroConfig = {
  title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
  subtitle:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  buttonTitle: "SHOP NOW",
  statistic: INTRO_STATISTIC,
  image: introImage,
};

export const NEW_ARRIVALS_CONFIG: NewArrivalsConfig = {
  title: "NEW ARRIVALS",
  productsInfo:[
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    image: productImage1,
    lastPrice: "120",
    rating: 4.5,
    
  },
  {
    title: "SKINNY FIT JEANS",
    image: productImage2,
    lastPrice: "240",
    rating: 4.5,
    
  },
  {
    title: "CHECKERED SHIRT",
    image: productImage3,
    lastPrice: "208",
    firstPrice: "260",
    discount: "20%",
    rating: 4.5,
    
  },
  {
    title: "SLEEVE STRIPED T-SHIRTT",
    image: productImage4,
    lastPrice: "112",
    firstPrice: "160",
    discount: "30%",
    rating: 4.5,
    
  }     
  ]
}