import React, { FC } from "react";

interface Props {
  heading: string;
}

const Heading: FC<Props> = ({ heading }) => {
  return <div className="text-3xl font-semibold pb-6">{heading}</div>;
};

export default Heading;
