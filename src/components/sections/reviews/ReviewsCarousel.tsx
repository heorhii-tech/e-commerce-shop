import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewsCardConfig } from "@/share/common/types";
import StarRating from "../StarRating";

export function ReviewsCarousel({
  reviewsCards,
}: {
  reviewsCards: ReviewsCardConfig[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1200px] mx-auto px-4"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {reviewsCards.map((reviewCard, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="h-full">
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4 p-4 h-full">
                  <StarRating initialRating={reviewCard.stars} />
                  <p className="text-lg font-medium">
                    {reviewCard.customerName}
                  </p>
                  <p className="text-sm text-gray-600 flex-grow">
                    {reviewCard.review.length > 150
                      ? `${reviewCard.review.slice(0, 150)}...`
                      : reviewCard.review}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden sm:flex">
        <CarouselPrevious className="absolute -left-12 top-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2" />
      </div>
    </Carousel>
  );
}
