import Image from "next/image";
import brand1 from "../../../public/images/brand-0.png";
import brand2 from "../../../public/images/brand-1.png";
import brand3 from "../../../public/images/brand-2.png";
import brand4 from "../../../public/images/brand-3.png";
import brand5 from "../../../public/images/brand-4.png";

const BrandSlider = () => {
    
    return (
        <section className="brand-slider">
            <div className="brand-slider container overflow-hidden">
                <div className="brand-slider__wrapper ">
                    <Image src={brand1.src} alt="brand" width={100} height={100} className="w-[50px] sm:w-[100px]" />
                    <Image src={brand2.src} alt="brand" width={100} height={100} className="w-[50px] sm:w-[100px]" />
                    <Image src={brand3.src} alt="brand" width={100} height={100} className="w-[50px] sm:w-[100px]" />
                    <Image src={brand4.src} alt="brand" width={100} height={100} className="w-[50px] sm:w-[100px]" />
                    <Image src={brand5.src} alt="brand" width={100} height={100} className="w-[50px] sm:w-[100px]" />
                    {/* <img src={brand3.src} alt="brand"  className="w-[100px]" />
                    <img src={brand1.src} alt="brand"  className="w-[100px]" />
                    <img src={brand2.src} alt="brand"  className="w-[100px]" />
                    <img src={brand3.src} alt="brand"  className="w-[100px]" />
                    <img src={brand4.src} alt="brand"  className="w-[100px]" />
                    <img src={brand5.src} alt="brand"  className="w-[100px]" />
                    <img src={brand3.src} alt="brand"  className="w-[100px]" /> */}
                </div>
            </div>
        </section>
    )
}

export default BrandSlider; 