import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next";

interface ProductBannerProps {
  itemsPerPageFromBanner: (value: number) => void;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  itemsPerPageFromBanner,
}) => {
  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);

  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    gridView?.addEventListener("click", () => {
      setListViewActive(false);
      setGridViewActive(true);
    });

    listView?.addEventListener("click", () => {
      setGridViewActive(false);
      setListViewActive(true);
    });
  }, []);

  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center gap-4">
        <span
          className={`${
            girdViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
        >
          <BsGridFill />
        </span>
        <span
          className={`${
            listViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
        >
          <ImList />
        </span>
      </div>
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">

      </div>
    </div>
  );
};

export default ProductBanner;
