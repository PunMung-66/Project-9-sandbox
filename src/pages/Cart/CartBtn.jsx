import React from "react";

const BTN_SEVERITY = {
  primary:
    "bg-secondary-900 text-white hover:bg-primary-500 hover:text-secondary-900 active:text-primary-700 active:bg-secondary-900 disabled:bg-secondary-300 disabled:text-secondary-500",
  secondary:
    "border border-secondary-300 bg-white text-secondary-900 hover:border-primary-500 active:border-primary-700 disabled:border-secondary-300 disabled:bg-secondary-100 disabled:text-secondary-500",
};

function CartBtn({ disabled, btnLabel, onClick, severity = "primary", width }) {
  return (
    <button
      style={{
        height: "54px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width ?? "100%",
      }}
      className={`px-2.5 py-2 w-full ${BTN_SEVERITY[severity]}`}
      {...{ disabled, onClick }}
    >
      {btnLabel}
    </button>
  );
}

export default CartBtn;
