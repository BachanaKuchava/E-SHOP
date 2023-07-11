import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18next";
import { AuthContext } from "../../auth/context/AuthContext";
import { useCart } from "react-use-cart";

const SpecialCase = () => {
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  const products = useSelector((state:any) => state.orebiReducer.products);
  const { status } = useContext(AuthContext);
  const {totalItems} = useCart()
  // console.log(status);
  
  // let link = "/signin "
  // useEffect(() => {
  //   if (status === "authorized" && localStorage.getItem("ACCESSTOKEN")) {
  //     link="/profile"
     
      
  //   }
  // }, [status])
  //  console.log(link);
  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      {

    
      <Link to={status === "authorized" ? "/profile" : "/signin"} >
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">{t("Profile.1")}</p>
        </div>
      </Link>  

      }
      <Link to="/cart">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">{t("Buy Now.1")}</p>
          {totalItems > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {totalItems}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
