import React, { FC, useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import axios from "axios";

interface ItemsProps {
  currentItems: {
    id: any;
    img: any;
    title: any;
    price: any;
    item:any;

  }[];
}





const SpecialOffers: FC = () => {
  const [products, setProducts] = useState([]);


  function Items({ currentItems }: ItemsProps) {


    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id} className="w-full">
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                item={item}
                // des={item.des}
              />
            </div>
          ))}
      </>
    );
  }
  async function getItems() {  
  try {
  const resp = await axios.get(`http://localhost:3001/products?skip=0&take=${4}` )
  setProducts(resp.data)
  
  
  
  } catch (error) {
  
  }
  }
  
  useEffect(() => {
  getItems()
  
  }, [])

  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }


  return (
    <div className="w-full pb-20">
      <Heading heading={t("Our BestSaller.1")} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      <Items currentItems={products} />
      </div>
    </div>
  );
};

export default SpecialOffers;
