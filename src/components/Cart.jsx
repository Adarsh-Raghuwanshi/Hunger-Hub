import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";
import { CLOUD_URL } from "../constants";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const totalBill = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold text-4xl border-b-4 mb-10">Total Cart Amount - &#8377;{totalBill}</p>

      {items.map((item, indx) => {
        return (
          <div className="flex w-3xl ml-52 mb-5" key={indx}>
            <img className="w-[25%] border-2" src={CLOUD_URL + item.imgId} />
            <div className="menu-list">{item.name}</div>
            <div className="menu-list">&#8377; {item.price}</div>
            <div className="menu-list bg-amber-600">
              <button
                className="cursor-pointer text-amber-50"
                onClick={() => dispatch(removeItem(item))}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
