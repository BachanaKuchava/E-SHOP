import React, { FC, MouseEvent } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface Props {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const SamplePrevArrow: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default SamplePrevArrow;
