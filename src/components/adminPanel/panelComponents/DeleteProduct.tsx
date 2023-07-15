import axios from 'axios';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next";
interface Props { }

function CreateProduct(props: Props) {
    const { t } = useTranslation();
    function handleClick(lang:any) {  
      i18n.changeLanguage(lang);
    }
  
    const { } = props
    const [productId, setProductId] = useState('')
    async function handleDeleteProduct() {
        try {
            const resp = await axios.delete(`http://localhost:3001/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESSTOKEN")}`
                }
            })
        setProductId('');

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>


            <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Enter ID.1")}</label>
                <input type="text"  value={productId} onChange={(e) => setProductId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <br />
                <button type="button" onClick={() => handleDeleteProduct()} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("Delete.1")}</button>
                
            </div>


        </>
    )
}

export default CreateProduct
