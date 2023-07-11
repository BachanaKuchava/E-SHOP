import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 

const ShopNow = () => {
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
      {t("Buy Now.1")}
    </button>
  );
};

export default ShopNow;
