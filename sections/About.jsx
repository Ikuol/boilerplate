"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import styles from "@/styles";
import { datas } from "@/constants";
import { DisplayText, TypingText } from "@/components";
import { staggerContainer } from "@/utils/motion";

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
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="absolute z-20
            -left-16 top-10 cursor-pointer"
          >
            <img src="/slack.png" alt="phone-2" className="w-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="flex bg-white w-[118px] h-[118px]
                 rounded-full items-center justify-center absolute
                 z-20 top-[28rem] left-56 cursor-pointer"
          >
            <img
              src="/whatsapp.png"
              alt="whatsapp"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="bg-yellow w-[100px] h-[100px]
                rounded-r-full rounded-tl-full absolute top-20
                left-[17rem] cursor-pointer"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="bg-green w-[100px] h-[100px]
                rounded-r-full rounded-tl-full absolute -left-16
                top-[23rem] cursor-pointer"
          />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="flex relative flex-col"
        >
          <TypingText
            title="The All-in-One"
            textStyles="text-green text-[60px] font-semibold"
          />
          <br />
          <TypingText
            title="Solution for"
            textStyles="text-white text-[60px] font-semibold"
          />
          <br />
          <TypingText
            title="Conversational AI"
            textStyles="text-white text-[60px] font-semibold"
          />
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
