'use client';

const DisplayText = ({title, text, active, handleClick}) => {
  return (
    <div className={`${active ? "" : "border-b border-b-white"}
    w-[480px] cursor-pointer`}
    onClick={() => handleClick(!active)}
    >
        <h1 className="text-white font-bold
        text-[30px] mb-10">
            {title}
        </h1>
        <p className="text-sm hidden font-[400] mt-2">
            {text}
        </p>
    </div>
  )
}

export default DisplayText