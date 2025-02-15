"use client";
import Title from "../sections/Title";
import ProductCard from "../sections/ProductCard";
import { NewArrivalsConfig } from "@/share/common/types";
import { useLayout } from "@/components/hooks/useLaout";
import { CarouselProduct } from "./Сarousel";

export const NewArrivals = ({ config }: { config: NewArrivalsConfig }) => {
  const { mediaQueryConfig } = useLayout();
  const { isSm } = mediaQueryConfig;
  return (
    <section className="new-arrivals">
      <div className="container">
        <Title text={config.title} />
        {isSm ? (
          <CarouselProduct config={config.productsInfo} />
        ) : (
          <div>
            {config.productsInfo.map((product, index) => (
              <ProductCard key={index} config={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
