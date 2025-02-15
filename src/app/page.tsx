import {Intro, NewArrivals} from "@/components/sections/index";
import {INTRO_CONFIG, NEW_ARRIVALS_CONFIG} from "@/share/common/common";

export default function Home() {
  return (
   <div className="home-page mx-auto">
   <Intro config={INTRO_CONFIG} />
   <NewArrivals config={NEW_ARRIVALS_CONFIG} />
   </div>
   );
}
