import { RiShoppingBasketLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <Link to="/cart">
        <RiShoppingBasketLine />
      </Link>
      <span>2</span>
    </div>
  );
};
