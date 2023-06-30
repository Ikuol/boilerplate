import styles from "@/styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={` px-[15rem] mx-auto flex justify-between items-center gap-8`}
      >
        <div className={`${styles.flexCenter} gap-2`}>
          <h2 className="font-extrabold text-white text-[26px]">omnigpt</h2>
          <img src="/vector.png" alt="arrow" className="w-[13px] h-[13px]" />
        </div>
        <div className={`${styles.flexCenter} gap-5`}>
          <h2
            className="text-white text-[20px]
                cursor-pointer"
          >
            Blog
          </h2>
          <Link
            href="/"
            className="text-white text-[20px]
                cursor-pointer"
          >
            Donation
          </Link>
          <Link
            href="/signin"
            className="text-white text-[20px]
                cursor-pointer"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
