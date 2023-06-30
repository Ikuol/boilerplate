"use client";

import { handleCheckout } from "@/handleCheckout";

import "react-toastify/dist/ReactToastify.css";

const MakePayment = () => {
  return (
    <div
      className="flex justify-center bg-primary
    items-center min-h-screen"
    >
        <button
          onClick={() => {
            handleCheckout({
              lineItems: [
                {
                  price: "price_1NOk0tFSkmsv69qzSDc3MZpH",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Checkout
        </button>
    </div>
  );
};

export default MakePayment;
