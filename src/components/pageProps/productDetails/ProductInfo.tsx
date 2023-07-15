import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";

interface ProductInfoProps {
  title: string;
  price: number;
  description: string;
  category: string;
}

interface Props {
  title: string;
  id: string;
  price: number;
  item:any;

 
}

const ProductInfo = ( props:any) => {

  const {productInfo} = props
  console.log(productInfo);
  

  const {addItem} = useCart();




  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo?.title}</h2>
      <p className="text-xl font-semibold">${productInfo?.price}</p>
      <p className="text-base text-gray-600">{productInfo?.des}</p>
      <p className="text-sm">{t("Be the first to leave a review.1")}.</p>
      <button
      onClick={() =>
        {  
            addItem(productInfo)
          }
          }
      
        
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        {t("Add to Cart.1")}
      </button>
    </div>
  );
};

export default ProductInfo;
