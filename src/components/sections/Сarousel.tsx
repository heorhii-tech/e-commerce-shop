import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { ProductInfo } from "@/share/common/types";
import ProductCard from "../sections/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Props {
  config: ProductInfo[];
}

export function CarouselProduct({ config }: Props) {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {config.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <ProductCard config={product} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
