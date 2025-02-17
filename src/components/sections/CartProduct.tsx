import { ProductInfo } from "@/share/common/types";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/store/slices/cartSlice";
import { CartProductConfig } from "@/share/common/types";

interface Props {
  config: ProductInfo;
  product: CartProductConfig;

}

const CartProduct = ({ config, product }: Props) => {
  const dispatch = useDispatch();
  const { deleteIcon } = product;
  const disabled = config.quantity <= 1;


  return (
    <div className="cart-product mb-[20px]">
      <div className="cart-product__image">
        <Image
          className="cart-product__image-element"
          src={config.image}
          alt={config.title}
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="cart-product__info">
      
        <div className="cart-product__header">
        <h3 className="cart-product__title">{config.title}</h3>
          <button
            onClick={() => dispatch(removeFromCart(config.id))}
            className="cart-product__remove"
          >
            <Image src={deleteIcon} alt="Delete" width={20} height={20} />
          </button>
         
        </div>
        <div className="cart-product__footer">
          <div className="cart-product__details">
            <p className="cart-product__price">{config.lastPrice} €</p>
            <div className="cart-product__controls">
              <button
              disabled={disabled}
                className={`cart-product__btn ${disabled ? 'text-black cursor-not-allowed' : ''}`}
                onClick={() => dispatch(decreaseQuantity(config.id))}
              >
                −
              </button>
              <p className="cart-product__quantity">{config.quantity}</p>
              <button
                className="cart-product__btn"
                onClick={() => dispatch(increaseQuantity(config.id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
