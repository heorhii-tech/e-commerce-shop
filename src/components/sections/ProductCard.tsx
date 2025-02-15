import { ProductInfo } from "@/share/common/types";
import Image from "next/image";
interface Props {
  config: ProductInfo;
}

const ProductCard = ({ config }: Props) => {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <Image src={config.image} alt="Product" width={300} height={300} />
      </div>
      <div className="product-card__body">
        <p className="product-card__title">{config.title}</p>
        <p className="product-card__rating">{config.rating}</p>
      </div>
      <div className="product-card__footer">
        <div className="product-card__price">
          <p>${config.lastPrice}</p>
          {config.firstPrice && <p className="product-card__first-price">${config.firstPrice}</p>}
         {config.discount && <p className="product-card__discount">-{config.discount}</p>}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
