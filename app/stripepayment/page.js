"use client";

import { handleCheckout } from "@/lib/handleCheckout";

import { Option } from "@/components";
import { freeOptions, paidOptions } from "@/constants";

const MakePayment = () => {
  return (
    <div
      className="flex flex-col justify-center h-auto text-white
    items-center border w-[600px] mx-auto mt-64"
    >
      <div
        className="flex border-b w-full h-[45px] items-center
      pl-4"
      >
        Your plan
      </div>
      <div className="flex p-4">
        <div className="flex flex-col gap-y-4 border-r px-2">
          <h1 className="font-extrabold">Free plan</h1>
          <button
            className="text-black rounded-[5px] bg-gray-400
          font-bold h-[40px] cursor-not-allowed w-full"
          >
            Your current plan
          </button>
          {freeOptions.map((freeOption) => (
            <Option key={freeOption.id} color="#fff" {...freeOption} />
          ))}
        </div>
        <div className="flex flex-col gap-y-4 px-2">
          <h1 className="font-extrabold">OmniGPT Plus (USD $20/mo)</h1>
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
            className="text-white rounded-md bg-green w-full
          font-bold h-[40px]"
          >
            Upgrade plan
          </button>
          {paidOptions.map((paidOption) => (
            <Option key={paidOption.id} color="#1FC77E" {...paidOption} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
