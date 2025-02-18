import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { ProductInfo } from "@/share/common/types";
import Image from "next/image";
import StarRating from "./StarRating";
import ConfirmationDialog from "./ConfirmationDialog";

interface Props {
  config: ProductInfo;
}

const ProductCard = ({ config }: Props) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(config)); // Добавляем товар в корзину
    setIsDialogOpen(true);
  };

  return (
    <div className="product-card">
      <div className="product-card__header">
        <Image
          className="product-card__image"
          src={config.image}
          alt="Product"
          width={300}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="product-card__content">
        <div className="product-card__body">
          <p className="product-card__title">{config.title}</p>
          <StarRating initialRating={config.rating} />
        </div>
        <div className="product-card__footer">
          <div className="product-card__price">
            <p className="product-card__price-current">${config.lastPrice}</p>
            {config.firstPrice && (
              <p className="product-card__price-old">
                ${config.firstPrice}
                <span className="line-through"></span>
              </p>
            )}
            {config.discount && (
              <p className="product-card__price-discount">-{config.discount}</p>
            )}
          </div>

          {/* Кнопка добавления в корзину */}
          <button onClick={handleAddToCart} className="product-card__action">
            +
          </button>

          {/* Диалоговое окно */}

          <ConfirmationDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onConfirm={() => setIsDialogOpen(false)}
            config={config}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
