"use client";
import { FreeTrial } from ".";
import styles from "@/styles";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col gap-y-8 py-12">
        <FreeTrial />
        <div className="flex justify-between items-baseline">
          <div className={`${styles.flexCenter} gap-2`}>
            <h2 className="font-extrabold text-white text-[26px]">omnigpt</h2>
            <img src="/vector.png" alt="arrow" className="w-[13px] h-[13px]" />
          </div>
          <div className="flex flex-col gap-y-3">
            {[...Array(5)].map((p, index) => (
              <p className="text-white" key={index}>
                Lorem Ipsum
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-green font-semibold text-[16px] leading-4">
              LOREM IPSUM DOLAR
            </p>
            {[...Array(3)].map((p, index) => (
              <p className="text-white" key={index}>
                Lorem Ipsum
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {[...Array(1)].map((p, index) => (
              <p className="text-white" key={index}>
                Lorem Ipsum
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
