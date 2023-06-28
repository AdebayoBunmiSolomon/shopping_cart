import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { CartCard } from "./CartCard";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import gify from "../../assets/gify.gif";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const continueShopping = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-row justify-center mt-20">
      <div>
        <div className="flex flex-row justify-start">
          <h1 className="text-5xl font-medium">
            Cart<span className="text-zinc-400"> -</span>{" "}
            <span className="text-amber-400">
              Items
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </h1>
        </div>
        {totalAmount > 0 ? (
          <>
            <div className="space-y-5 mt-10 h-[900px] w-[700px] overflow-y-scroll">
              {PRODUCTS.map((Product) => {
                if (cartItems[Product.id] !== 0) {
                  return <CartCard data={Product} />;
                }
              })}
            </div>
            <div className="flex flex-col space-y-3 mb-7">
              <div className="flex flex-row justify-center">
                <p>Subtotal: ${totalAmount}</p>
              </div>
              <div className="flex flex-row space-x-5 justify-center">
                <button
                  className="bg-amber-400 text-white h-[40px] w-[200px] rounded-md  hover:bg-amber-500 duration-500"
                  onClick={continueShopping}
                >
                  Continue shopping
                </button>
                <button className="bg-red-500 text-white h-[40px] w-[200px] rounded-md  hover:bg-red-600 duration-500">
                  Checkout shop
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <p className="mt-7 text-black font-medium text-md">
              Sorry, no cart items. Go back to shop{" "}
            </p>
            <div className="flex flex-row justify-center mt-3">
              <img
                src={gify}
                alt="gif"
                width={45}
                height={45}
                className="justify-center"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
