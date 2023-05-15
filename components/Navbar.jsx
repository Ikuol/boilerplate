'use client';

import styles from "@/styles";

const Navbar = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
        <div className={`container mx-auto flex justify-between items-center gap-8`}>
            <div className={`${styles.flexCenter} gap-2`}>
                <h2 className="font-extrabold text-white text-[26px]">omnigpt</h2>
                <img
                    src="/vector.png"
                    alt="arrow"
                    className="w-[13px] h-[13px]"
                />
            </div>
            <div className={`${styles.flexCenter} gap-5`}>
                <h2 className="text-white text-[20px]
                cursor-pointer"
                >
                    Blog
                </h2>
                <h2 className="text-white text-[20px]
                cursor-pointer"
                >
                    Contact us
                </h2>
                <h2 className="text-white text-[20px]
                cursor-pointer"
                >
                    Sign in
                </h2>
            </div>
        </div>
    </nav>
  )
}

export default Navbar