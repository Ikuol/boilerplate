"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import styles from "@/styles";

const Phone = () => {
  return (
    <section className={`${styles.xPaddings} relative py-24`}>
      <div
        className="flex bg-black container w-[1200px]
        items-center justify-center h-[600px] relative"
      >
        <motion.div
          variants={fadeIn("down", "spring", 0.4, 3)}
          initial="hidden"
          whileInView="show"
          className="flex"
        >
          <img
            src="/apple.png"
            alt="apple"
            className=""
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 5)}
          initial="hidden"
          whileInView="show"
          className="absolute bottom-20"
        >
          <img src="/message.png" alt="message" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Phone;
