"use client";

import { useState } from "react";
import { supabase } from "@/supabase/supabaseClient";
import Link from "next/link";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "http://localhost:3000/signin",
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="text-white text-center font-black text-3xl">
        Sign up to OmniGPT
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
        <input
          type="text"
          value={username}
          onChange={handleChange(setUsername)}
          placeholder="Username"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
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
        <input
          type="password"
          value={confirmpassword}
          onChange={handleChange(setConfirmPassword)}
          placeholder="Confirm Password"
          className="outline-none border w-full min-w-[350px]
            border-gray-400 bg-primary text-white pl-3
            rounded-[5px] h-12"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white
        h-12 rounded-[5px] font-black"
        >
          Sign Up
        </button>
      </form>
      <span className="flex justify-center text-white">
        Have an account ? &nbsp;
        <Link href="/signin" className="hover:text-green">
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default SignUp;
