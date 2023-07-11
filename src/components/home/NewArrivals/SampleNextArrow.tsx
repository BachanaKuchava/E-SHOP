import React, { FC, MouseEvent } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const SampleNextArrow: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default SampleNextArrow;

