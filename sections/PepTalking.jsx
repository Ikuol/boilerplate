"use client";

import styles from "@/styles";
import { opinions } from "@/constants";
import DisplayOpinion from "@/components/DisplayOpinion";

const PepTalking = () => {
  return (
    <section className={`${styles.xPaddings} ${styles.yPaddings} relative`}>
      <div
        className="container flex flex-col
        gap-y-16"
      >
        <h2 className="text-white capitalize text-6xl font-semibold">
          see what people
          <br />
          Are <span className="text-green capitalize">saying about us</span>
        </h2>
        <img
          src="/yellowstar.png"
          alt="yellow-star"
          className="absolute right-1/3"
        />
        <img
          src="/pinkstar.png"
          alt="pink-star"
          className="absolute top-36 right-1/4"
        />
        <div className="flex items-center justify-center gap-x-12">
          {opinions.map((opinion) => (
            <DisplayOpinion key={opinion.id} {...opinion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PepTalking;
