import React, { FC } from "react";

interface Props {
  text: string;
}

const Badge: FC<Props> = ({ text }) => {
  return (
    <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;