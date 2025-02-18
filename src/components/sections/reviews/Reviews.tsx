import Title from "../Title";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { ReviewsConfig } from "@/share/common/types";
export const Reviews = ({ config }: { config: ReviewsConfig }) => {
  return (
    <section className="reviews">
      <div className="container reviews-wrapper">
        <Title text={config.title} extraClass="reviews__title" />
        <div className="reviews__cards">
          <ReviewsCarousel reviewsCards={config.reviewsCards} />
        </div>
      </div>
    </section>
  );
};
