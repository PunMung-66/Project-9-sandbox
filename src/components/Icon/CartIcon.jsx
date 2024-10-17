import React from "react";
import { useCartContext } from "../../context/CartsContextProvider";

function CartIcon() {
  const { isEmptyCart } = useCartContext();
  return (
    <>
      {!isEmptyCart && (
        <div className="w-1.5 aspect-square rounded-full bg-danger absolute z-10 translate-x-2 -translate-y-2"></div>
      )}
      <svg
        className="relative"
        width="29"
        height="24"
        viewBox="0 0 29 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5002 11.3H25.3002L22.9002 20.7C22.5002 22.1 21.2002 23.1 19.8002 23.1H9.30017C7.80017 23.1 6.5002 22.1 6.2002 20.7L3.80017 11.3H12.5002M18.5002 19.8L19.3002 14.6M9.7002 14.6L10.5002 19.8M14.5002 14.6V19.8M25.4002 11.3C26.5002 11.3 27.3002 10.4 27.3002 9.40005C27.3002 8.30005 26.4002 7.50005 25.4002 7.50005H3.60019C2.50019 7.50005 1.7002 8.40005 1.7002 9.40005C1.7002 10.5 2.60019 11.3 3.60019 11.3M6.50018 7.50005L10.1002 1.30005M22.6002 7.50005L19.0002 1.30005"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default CartIcon;
