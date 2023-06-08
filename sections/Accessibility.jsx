'use client';

import { Mode, Inclusion } from "@/components";

import styles from "@/styles";
import { inclusions } from "@/constants";

const Accessibility = () => {
  return (
    <section className={`${styles.xPaddings} py-12 relative`}>
        <div className="mx-auto flex flex-col
        items-center justify-center gap-y-10">
            <div className="flex">
                <p className="text-white text-6xl text-center
                font-semibold">
                    <span className="text-green">Accessible </span>
                    pricing <br /> for all users
                </p>
            </div>
            <div className="flex w-[400px] h-full min-h-[600px] rounded-[10px]
            bg-gray-700 flex-col gap-y-6 p-12">
                {/* Todo : make component for this */}
                <div className="flex gap-x-6">
                    <div className="flex w-[150px] h-[30px] bg-gray-600
                    rounded-[5px] text-white p-1 cursor-pointer">
                        Most popular
                    </div>
                    <div className="flex w-[150px] h-[30px] bg-[#dac92b42]
                    rounded-[5px] text-white p-1 cursor-pointer">
                        TEST MODE
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 text-white">
                    <p className="text-2xl font-bold
                    ">
                        Standard
                    </p>
                    <p className="text-xl">
                        Upgrade your productivity with Ai-
                        powered technology.
                    </p>
                    <span className="flex mt-3 items-center gap-x-3">
                        <p className="text-5xl font-[900]">
                            $7
                        </p>
                        <span className="flex flex-col -mt-1">
                            <p>per</p>
                            <p>month</p>
                        </span>
                    </span>
                    <button className="bg-green h-[50px] rounded-[5px]
                    mt-4 text-black text-xl font-semibold">
                        Start trial
                    </button>
                    <div className="flex flex-col gap-y-4">
                        <p className="text-xl font-medium">
                            This includes:
                        </p>
                        {inclusions.map((inclusion) => (
                            <Inclusion
                                key={inclusion.id}
                                text={inclusion.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Accessibility