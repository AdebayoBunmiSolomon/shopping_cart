import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/ShopContext";

export const NavBar = () => {
  const { countOfCartItems } = useContext(ShopContext);
  return (
    <div>
      <header className="bg-[black] h-[70px] text-[white] fixed w-[100%] top-0 left-0 right-0">
        <div className="flex flex-row space-x-4 justify-end pr-3 pt-5">
          <div>
            <p className="hover:text-zinc-400 text-lg duration-500">
              <Link to="/">Shop</Link>
            </p>
          </div>
          <div>
            <Link to="/cart">
              <div className="flex flex-row">
                <div>
                  <p className="text-amber-400 hover:text-zinc-400 text-lg duration-500">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                </div>
                <div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white">
                    {countOfCartItems}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
