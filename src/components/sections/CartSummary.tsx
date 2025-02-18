import { CartSummaryConfig } from "@/share/common/types";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CartSummary = ({
  summary,
  totalPrice,
}: {
  summary: CartSummaryConfig;
  totalPrice: number;
}) => {
  return (
    <div className="cart-summary">
      <h2 className="cart-summary__title">{summary.title}</h2>

      <div className="cart-summary__content">
        <div className="cart-summary__row">
          <p className="cart-summary__text">{summary.subTotalTitle}</p>
          <p className="cart-summary__price">${totalPrice}</p>
        </div>
        <div className="cart-summary__row">
          <p className="cart-summary__text">{summary.deleliveryTitle}</p>
          <p className="cart-summary__price">$15</p>
        </div>
        <Separator className="my-[20px]" />
        <div className="cart-summary__row">
          <p className="cart-summary__text">{summary.totalTitle}</p>
          <p className="cart-summary__price">${totalPrice + 15}</p>
        </div>
      </div>

      <Button className="cart-summary__button rounded-[16px]">
        {summary.buttonTitle}
      </Button>
    </div>
  );
};

export default CartSummary;
