"use client";

import { useState } from "react";

import styles from "@/styles";
import { datas } from "@/constants";
import { DisplayText } from "@/components";

const About = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={`${styles.xPaddings} py-12 relative`}>
      <div
        className="mx-auto flex max-lg:flex-col
        justify-center items-center gap-x-52"
      >
        <div className="flex relative">
          <img
            src="/rectangle.png"
            alt="phone-2"
            className="w-full h-full z-10"
          />
          <img
            src="/slack.png"
            alt="phone-2"
            className="absolute z-20
                    -left-16 top-10"
          />
          <div
            className="flex bg-white w-[118px] h-[118px]
                 rounded-full items-center justify-center absolute
                 z-20 top-[28rem] left-56"
          >
            <img
              src="/whatsapp.png"
              alt="whatsapp"
              className="object-contain"
            />
          </div>
          <div
            className="bg-yellow w-[100px] h-[100px]
                rounded-r-full rounded-tl-full absolute top-20
                left-[17rem]"
          />
          <div
            className="bg-green w-[100px] h-[100px]
                rounded-r-full rounded-tl-full absolute -left-16
                top-[23rem]"
          />
        </div>
        <div className="flex relative flex-col gap-y-3">
          <p className="text-white text-[60px] font-semibold">
            <span className="text-green">The All-in-One</span>
            <br />
            Solution for
            <br />
            Conversational AI
          </p>
          {datas.map((data) => {
            return (
              <DisplayText
                key={data.id}
                {...data}
                active={active}
                handleClick={setActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
