import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

export const CartCard = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 34) + "..." : str;
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg shadow-zinc-700/50 w-[500px] h-[150px] ">
      <div className="flex flex-row gap-10 pt-5 pl-5">
        <div>
          <img src={productImage} alt="product" width={100} height={100} />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="pt-5 font-medium text-md text-zinc-400">
                {truncate(productName)}
              </p>
            </div>
            <div>
              <p className=" font-medium text-sm text-amber-400">${price}</p>
            </div>
            <div>
              <div className="flex flex-row space-x-1">
                <div>
                  <button onClick={() => removeFromCart(id)}>
                    {" "}
                    <FontAwesomeIcon icon={faSquareMinus} />{" "}
                  </button>
                </div>
                <div>
                  <input
                    className=" bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    value={cartItems[id]}
                    onChange={(event) =>
                      updateCartItemCount(Number(event.target.value), id)
                    }
                  />
                </div>
                <div>
                  <button onClick={() => addToCart(id)}>
                    {" "}
                    <FontAwesomeIcon icon={faSquarePlus} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
