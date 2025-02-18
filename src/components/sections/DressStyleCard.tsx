import { CardInfo } from "../../share/common/types";
interface DressStyleCardProps {
  config: CardInfo;
  extraClass?: string;
}
const DressStyleCard = ({ config, extraClass }: DressStyleCardProps) => {
  return (
    <div
      className={`dress-style__card card${extraClass}`}
      style={{ backgroundImage: `url(${config.cardImage.src})` }}
    >
      <h2 className="dress-style__card-title">{config.cardTitle}</h2>
    </div>
  );
};
export default DressStyleCard;
