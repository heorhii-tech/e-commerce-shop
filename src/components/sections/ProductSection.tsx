"use client";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { NewArrivalsConfig } from "@/share/common/types";
import { useLayout } from "@/components/hooks/useLaout";
import { CarouselProduct } from "./Сarousel";

export const ProductSection = ({ config }: { config: NewArrivalsConfig }) => {
  const { mediaQueryConfig } = useLayout();
  const { isSm } = mediaQueryConfig;
  return (
    <section id='shop' className="new-arrivals">
      <div className="container new-arrivals-wrapper">
        <Title text={config.title} extraClass="new-arrivals__title" />
        {isSm ? (
          <CarouselProduct config={config.productsInfo} />
        ) : (
          <div className="new-arrivals__products">
            {config.productsInfo.map((product, index) => (
              <ProductCard key={index} config={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
