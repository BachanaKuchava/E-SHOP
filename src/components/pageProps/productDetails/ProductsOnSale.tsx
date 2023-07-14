import React, { useEffect, useState } from "react";
import { SplOfferData } from "../../../constants";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import axios from "axios";


;



const ProductsOnSale = (props:any) => {
  const {category} = props
  console.log(category);
  
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  console.log(products);
  
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }



  async function SimilarProducts() {
    try {
      const resp = await axios.get(`http://localhost:3001/products?take=4&category=${category}`)
        setProducts(resp.data);
        
    } catch (error) {
      
    }

 
    
  }
  useEffect(() => {
    SimilarProducts();
  }, [category])
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        {t("Similar Products.1")}
      </h3>
      <div className="flex flex-col gap-2">
        {products.map((item:any) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src='https://1.bp.blogspot.com/-CY6Dp8YzhYU/UUtV35dxZeI/AAAAAAAAAGg/rhdO471T3kw/s1600/bestin-product-range.jpg' />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.title}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
