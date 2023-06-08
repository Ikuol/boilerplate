"use client";

import styles from "@/styles";

const Hero = () => {
  return (
    <section className={`${styles.xPaddings} py-24 relative`}>
      <div
        className={`container mx-auto flex max-lg:flex-col
        justify-center gap-x-16 items-end`}
      >
        <div className={`flex-[1.2] flex relative flex-col`}>
          <p className="font-semibold text-white text-[80px] z-10">
            Seamless <br />
            Communication
            <br />
            with OmniGPT
          </p>
          <img
            src="/ellipse.png"
            alt="ellipse"
            className="w-[800px] h-full
                  absolute top-[-45px] object-contain"
          />
          <h2
            className="text-white text-3xl
                font-bold"
          >
            Powered by Chat GPT-4
          </h2>
          <p className="text-white text-[20px]">
            Experience the power of AI language models with OmniGPT.
            <br />
            Our chat platform provides seamless communication
            <br />
            across multiple channels.
          </p>
          <h2 className="text-white text-[20px] font-bold mt-4">
            Try for free! 15-day trial, no credit card required.
          </h2>
          <button
            className="bg-green text-white
                w-[200px] h-[48px] rounded-[5px] mt-4
                cursor-pointer font-semibold"
          >
            Start your free trial
          </button>
        </div>
        <div className={`${styles.flexCenter} gap-12 flex-col`}>
          <div className="flex gap-8 relative">
            <div
              className="bg-yellow w-[300px] h-[100px]
                rounded-l-full rounded-br-full"
            />
            <div
              className="bg-pink w-[100px] h-[100px]
                rounded-full"
            />
            <img
              src="/fauxels.png"
              alt="people"
              className="absolute -top-[3.5rem] left-6 w-[255px]"
            />
          </div>
          <div className="flex gap-8 relative">
            <div
              className="bg-green w-[100px] h-[100px]
                rounded-full"
            />
            <img
              src="/kindel.png"
              alt="people"
              className="absolute -top-[4.3rem] left-[35%] w-[280px]"
            />
            <div
              className="bg-white w-[300px] h-[100px]
                rounded-l-full rounded-r-full"
            />
          </div>
          <div className="flex gap-8">
            <div
              className="bg-pink w-[425px] h-[100px]
                rounded-tl-full rounded-r-full text-end py-3 px-8"
            >
              <p className="text-white">
                @OmniGPT Can you give us
                <br />
                an update on the latest project
                <br />
                status?
              </p>
            </div>
          </div>
          <div className="flex gap-8 relative">
            <div
              className="bg-green w-[300px] h-[100px]
                rounded-l-full rounded-br-full"
            />
            <img
              src="/andrea.png"
              alt="people"
              className="absolute -top-[9.2rem] w-[280px]"
            />
            <div
              className="bg-pink w-[100px] h-[100px]
                rounded-r-full rounded-tl-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
