import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 

const YearProduct = () => {
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <Link to="/shop/(value)">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            {t("Product Of The Year.1")}
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
          {t("Last year this product was sold 567 times and was sent to 43 countries without returns.1")}
          
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
