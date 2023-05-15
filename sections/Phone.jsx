'use client';

import styles from "@/styles";

const Phone = () => {
  return (
    <section className={`${styles.xPaddings} relative py-24`}>
        <div className="flex bg-black container w-[1200px]
        items-center justify-center h-[600px] relative">
            <img
                src="/apple.png"
                alt="apple"
                className="w-full mt-36 h-3/4 object-contain"
            />
            <img
                src="/message.png"
                className="absolute bottom-20"
            />
        </div>
    </section>
  )
}

export default Phone