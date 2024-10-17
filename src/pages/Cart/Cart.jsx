import React from "react";
import { useCartContext } from "../../context/CartsContextProvider";
import ContainerSlot from "../../components/ContainerSlot";
import RightCartSession from "./RightCartSession";
import LeftCartSession from "./LeftCartSession";

function Cart() {
  const { isEmptyCart, isLoading } = useCartContext();
  if (isLoading) return <div>loading...</div>;
  return (
    <section className="px-4 lg:px-16 xl:px-32 pt-6 lg:pt-10 pb-16 lg:pb-20 flex flex-col gap-10 lg:gap-12 xl:gap-20">
      <div className="flex flex-col gap-10">
        <h5>My cart</h5>
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* left section */}
          <LeftCartSession />
          {/* right section */}
          <RightCartSession />
        </div>
      </div>
      {!isEmptyCart && (
        <ContainerSlot containerLabel="people also like these"></ContainerSlot>
      )}
    </section>
  );
}

export default Cart;
