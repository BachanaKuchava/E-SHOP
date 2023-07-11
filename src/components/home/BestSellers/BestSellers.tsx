import React, { FC } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers: FC = () => {
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <div className="w-full pb-20">
      <Heading heading={t("Our BestSaller.1")} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          id="1011"
          // img={bestSellerOne}
          title="Flower Base"
          price={35.00}
          item=""

        />
        <Product
          id="1012"
          // img={bestSellerTwo}
          title="New Backpack"
          price={180.00}
          item=""
         
     
        />
        <Product
          id="1013"
          // img={bestSellerThree}
          title="Household materials"
          price={25.00}
          item=""
          
        
        />
        <Product
          id="1014"
          // img={bestSellerFour}
          title="Travel Bag"
          price={220.00}
          item=""
      
        />
      </div>
    </div>
  );
};

export default BestSellers;
