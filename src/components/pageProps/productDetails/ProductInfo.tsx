import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import { useParams } from "react-router-dom";
import axios from "axios";

interface ProductInfoProps {
  productInfo: {
    title: any;
    price: any;
    des: any;
  };
}

const ProductInfo: FC<ProductInfoProps> = ({ productInfo }) => {

  
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.title}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">{t("Be the first to leave a review.1")}.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> 
      </p>
      <button
        
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        {t("Add to Cart.1")}
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> {t("Categories.1")}:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
