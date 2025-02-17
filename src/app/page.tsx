import {Intro, ProductSection, DressStyle} from "@/components/sections/index";
import {INTRO_CONFIG, NEW_ARRIVALS_CONFIG, TOP_SELLING_CONFIG, DRESS_STYLE_CONFIG} from "@/share/common/common";

export default function Home() {
  return (
   <div className="home-page mx-auto">
   <Intro config={INTRO_CONFIG} />
   <ProductSection config={NEW_ARRIVALS_CONFIG} />
   <ProductSection config={TOP_SELLING_CONFIG} />
   <DressStyle config={DRESS_STYLE_CONFIG} />
   </div>
   );
}
