"use client";

import getStripe from "@/lib/getStripe";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakePayment = () => {
  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await getStripe();

    const response = await fetch("api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="flex justify-center bg-primary
    items-center min-h-screen"
    >
        <form onSubmit={handleCheckout}>
            
        </form>
        <ToastContainer />
    </div>
  );
};

export default MakePayment;
