import axios from "axios";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next";
export function CreateProduct(props: any) {
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }

  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  async function createProduct() {
    try {
      const resp = await axios.post(
        `http://localhost:3001/products`,
        {
          title: title,
          description: desc,
          price: +price,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ACCESSTOKEN")}`,
          },
        }
      );
      if(resp) {
        setTile('')
        setDesc('')
        setPrice('')
        setCategory('')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full justify-between items-center  flex gap-5 p-5 rounded-xl max-lg:flex-col">
      <div className="w-2/4 flex flex-col gap-3 max-lg:w-full">
        <div className="w-full">
        <label htmlFor="default-input" 
        className="block mb-2 text-sm font-medium text-white ">{t("Enter Title.1")}</label>
        <input type="text"  value={title} onChange={(e) => setTile(e.target.value)} 
        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div>
        <label htmlFor="default-input" 
        className="block mb-2 text-sm font-medium text-white ">{t("Enter Description.1")}</label>
        <input type="text"  value={desc} onChange={(e) => setDesc(e.target.value)} 
        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>
        <div>
        <label htmlFor="default-input" 
        className="block mb-2 text-sm font-medium text-white ">{t("Enter Price.1")}</label>
        <input type="text"  value={price} onChange={(e) => setPrice(e.target.value)} 
        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>
        <div>
        <label htmlFor="default-input" 
        className="block mb-2 text-sm font-medium text-white ">{t("Enter Category.1")}</label>
        <input type="text"  value={category} onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>
      </div>
      <button type="button" onClick={() => createProduct()} 
      className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300     rounded-lg">{t("Create.1")}</button>

    </div>
  );
}






