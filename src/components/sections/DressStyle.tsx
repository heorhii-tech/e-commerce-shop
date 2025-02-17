import Title from "../sections/Title";
import { DressStyleConfig } from "../../share/common/types";
import DressStyleCard from "../sections/DressStyleCard";

export const DressStyle = ({ config }: { config: DressStyleConfig }) => {
  const { title, cardsInfo } = config;
  return (
    <section className="dress-style">
      <div className="container ">
        <div className="dress-style__wrapper">
          <Title text={title} extraClass="dress-style__title" />
          <div className="dress-style__cards">
            {cardsInfo.map((card, index) => (
              <DressStyleCard key={index} config={card} extraClass={`${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
