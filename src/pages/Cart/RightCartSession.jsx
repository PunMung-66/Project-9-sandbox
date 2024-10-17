import React from "react";
import { SummaryRow, SummarySection } from "./Summary";
import { useCartContext } from "../../context/CartsContextProvider";
import CartBtn from "./CartBtn";

function RightCartSession() {
  const SHIPPING_FEE = 0;
  const { summaryList, subtotal, isEmptyCart } = useCartContext();
  return (
    <div className="p-6 flex flex-col gap-10 lg:w-1/3">
      <div className="flex flex-col gap-6">
        {/* summary header */}
        <SummaryRow
          name="summary"
          price={`${subtotal.total} items`}
          leftClassname={"text-2xl font-bold text-black"}
          rightClassname={"text-xl font-semi"}
        />
        {/* summary items */}
        <SummarySection>
          {summaryList.map(({ name, sum, quantity }) => (
            <SummaryRow
              key={name}
              name={`${name} ${quantity === 1 ? "" : "X" + quantity}`}
              price={sum}
              leftClassname={isEmptyCart ? "text-secondary-500" : ""}
              rightClassname={
                isEmptyCart ? "text-secondary-500" : "text-secondary-700"
              }
            />
          ))}
        </SummarySection>
        {/* summary shipping */}
        <SummarySection>
          <SummaryRow
            name="subtotal"
            price={subtotal.subtotal}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />{" "}
          <SummaryRow
            name={"shipping fee"}
            price={SHIPPING_FEE === 0 ? "Free" : SHIPPING_FEE}
            leftClassname={isEmptyCart ? "text-secondary-500" : ""}
            rightClassname={
              isEmptyCart ? "text-secondary-500" : "text-secondary-700"
            }
          />
        </SummarySection>
        {/* summary total */}
        <SummaryRow
          name={"Total"}
          price={SHIPPING_FEE + subtotal.subtotal}
          leftClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
          rightClassname={
            isEmptyCart
              ? "font-bold text-xl text-secondary-500"
              : "font-bold text-xl "
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <CartBtn disabled={isEmptyCart} btnLabel="Checkout" />
        <CartBtn
          disabled={isEmptyCart}
          severity="secondary"
          btnLabel="Continue shopping"
        />
      </div>
    </div>
  );
}

export default RightCartSession;
