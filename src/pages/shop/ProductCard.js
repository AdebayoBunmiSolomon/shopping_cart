import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/ShopContext";

export const ProductCard = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const { id, productName, price, productImage } = props.data;

  const truncate = (str) => {
    return str.length > 30 ? str.substring(0, 20) + "..." : str;
  };

  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="flex flex-col w-[300px] h-[364px] space-y-7 rounded-lg shadow-lg shadow-zinc-500/50 hover:cursor-pointer overflow-hidden hover:bg-zinc-50">
        <div className="flex flex-row justify-center pt-5">
          <img src={productImage} alt="product" height={200} width={200} />
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <div>
              <div className="flex flex-col space-y-4">
                <h1 className="font-medium text-md">{truncate(productName)}</h1>
                <div className="flex flex-row justify-center">
                  <h1 className="font-normal text-md">$ {price}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-amber-400 text-white pb-0 hover:bg-amber-500 duration-500"
          onClick={() => addToCart(id)}
        >
          {/* Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}&nbsp; */}
          Add to cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : ""}
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};
