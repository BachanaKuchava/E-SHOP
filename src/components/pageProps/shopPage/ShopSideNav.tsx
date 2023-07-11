import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

// icons={false}

const ShopSideNav: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <Category  />
      <Color /> */}
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
