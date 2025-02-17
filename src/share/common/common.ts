import {
  CartHeaderConfig,
  HeaderConfig,
  NavigationItem,
  IntroConfig,
  StatisticItem,
  NewArrivalsConfig,
  DressStyleConfig,
  CartConfig,
  CartProductConfig,
  CartSummaryConfig
} from "./types";
import introImage from "../../../public/images/intro-image.png";
import cartIcon from "../../../public/icons/cart-icon.svg";
import productImage1 from "../../../public/images/product-1.png";
import productImage2 from "../../../public/images/product-2.png";
import productImage3 from "../../../public/images/product-3.png";
import productImage4 from "../../../public/images/product-4.png";
import productImage5 from "../../../public/images/product-5.png";
import productImage6 from "../../../public/images/product-6.png";
import productImage7 from "../../../public/images/product-7.png";
import productImage8 from "../../../public/images/product-8.png";
import dressStyleImage1 from "../../../public/images/casual.png";
import dressStyleImage2 from "../../../public/images/formal.png";
import dressStyleImage3 from "../../../public/images/party.png";
import dressStyleImage4 from "../../../public/images/gym.png";
import deleteIcon from "../../../public/icons/delete-icon.svg"; 


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
  productsInfo: [
    {
      id: 0, // Начинаем с 0
      title: "T-SHIRT WITH TAPE DETAILS",
      image: productImage1,
      lastPrice: "120",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 1,
      title: "SKINNY FIT JEANS",
      image: productImage2,
      lastPrice: "240",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 2,
      title: "CHECKERED SHIRT",
      image: productImage3,
      lastPrice: "208",
      firstPrice: "260",
      discount: "20%",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 3,
      title: "SLEEVE STRIPED T-SHIRTT",
      image: productImage4,
      lastPrice: "112",
      firstPrice: "160",
      discount: "30%",
      rating: 4.5,
      quantity: 0,
    },
  ],
};
export const TOP_SELLING_CONFIG: NewArrivalsConfig = {
  title: "TOP SELLING",
  productsInfo: [
    {
      id: 4,
      title: "VERTICAL STRIPED SHIRT",
      image: productImage5,
      lastPrice: "112",
      firstPrice: "160",
      discount: "30%",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 5,
      title: "COURAGE GRAPHIC T-SHIRT",
      image: productImage6,
      lastPrice: "240",
      firstPrice: "312",
      discount: "30%",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 6,
      title: "LOOSE FIT BERMUDA SHORTS",
      image: productImage7,
      lastPrice: "208",
      firstPrice: "260",
      discount: "20%",
      rating: 4.5,
      quantity: 0,
    },
    {
      id: 7,
      title: "FADED SKINNY JEANS",
      image: productImage8,
      lastPrice: "112",
      firstPrice: "160",
      discount: "30%",
      rating: 4.5,
      quantity: 0,
    },
  ],
};

export const DRESS_STYLE_CONFIG: DressStyleConfig = {
  title: "BROWSE BY DRESS STYLE",
  cardsInfo: [
    {
      cardTitle: "CASUAL",
      cardImage: dressStyleImage1,
    },
    {
      cardTitle: "FORMAL",
      cardImage: dressStyleImage2,
    },
    {
      cardTitle: "PARTY",
      cardImage: dressStyleImage3,
    },
    {
      cardTitle: "GYM",
      cardImage: dressStyleImage4,
    },
  ],
};

const CART_PRODUCT_CONFIG: CartProductConfig = {
  
  deleteIcon: deleteIcon
};
const CART_SUMMARY_CONFIG: CartSummaryConfig = {
 title: "Order Summary", 
 subTotalTitle: "Subtotal",
 deleliveryTitle: "Delivery Fee",
 totalTitle: "Total",
 buttonTitle: "Checkout"
};
export const CART_CONFIG: CartConfig = {
  title: "YOUR CART",
  product: CART_PRODUCT_CONFIG,
  summary: CART_SUMMARY_CONFIG
}