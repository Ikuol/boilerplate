"use client";

import { supabase } from "@/supabase/supabaseClient";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        window.location = `/dashboard/${user.id}`;
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="text-white text-center font-black text-3xl">
        Log in to OmniGPT
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
        <input
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
          placeholder="Email Address"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <input
          type="password"
          value={password}
          onChange={handleChange(setPassword)}
          placeholder="Password"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white
        h-12 rounded-[5px] font-black"
        >
          Continue
        </button>
      </form>
      <span className="flex justify-center text-white">
        Dont have an account ? &nbsp;
        <Link href="/signup" className="hover:text-green">
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default SignIn;
