"use client";

const FreeTrial = ({ title, text }) => {
  return (
    <div
      className="w-[1050px] h-[328px] bg-green rounded-[10px]
    flex px-24 items-center justify-between"
    >
      <div className="flex flex-col gap-y-4">
        <p className="text-5xl font-semibold">
          Experience the OnmiGPT <br />
          Difference Today!
        </p>
        <p className="text-2xl font-normal">
          Sign up for a 15-Day Free Trial
          <br />
          and Transform the Way You Collaborate.
        </p>
      </div>
      <button
        className="bg-black text-white text-[16px]
        text-center w-[192px] h-[48px] rounded-[5px]"
      >
        Start your free trial
      </button>
    </div>
  );
};

export default FreeTrial;
