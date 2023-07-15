
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next";
export function ChangeProduct() {

  const [id, setId] = useState("");
  const [displaytitle, setDisplayTitle] = useState(false);
  const [displaydesc, setDisplayDesc] = useState(false);
  const [displayprice, setDisplayPrice] = useState(false);
  type TLoginForm = {
    title: string;
    description: string;
    price: number;
  };
  const {
    register,
    handleSubmit,
    reset
  } = useForm<TLoginForm>();
  async function changeProduct(data: TLoginForm) {
    try {
      await axios.put(`http://localhost:3001/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESSTOKEN")}`,
        },
      });
      reset()
      setId('')
    } catch (error) {
      console.log(error);
    }
  }
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }
  return (
    <div className="w-full bg-neutral-800 rounded-xl p-5 flex flex-col gap-5 justify-between">
      <div className="flex gap-5 max-sm:flex-col">
        <div className="flex gap-3">
          <label htmlFor="title">{t("Enter Title.1")}</label>
          <input
            type="checkbox"
            onChange={() => setDisplayTitle(!displaytitle)}
            name="title"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="desc">{t("Enter Description.1")}</label>
          <input
            type="checkbox"
            onChange={() => setDisplayDesc(!displaydesc)}
            name="desc"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="price">{t("Enter Price.1")}</label>
          <input
            type="checkbox"
            onChange={() => setDisplayPrice(!displayprice)}
            name="price"
          />
        </div>
      </div>
      
      <form
        action="#"
        className="flex justify-between items-center max-xl:flex-col max-xl:gap-5"
        onSubmit={handleSubmit(changeProduct)}
      >
        <div className="flex flex-col gap-4 max-xl:w-full">
          <div className="dark:text-white">
            <p>Id</p>
            <input
              className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              name="id"
              id="id"
            />
          </div>
          {displaytitle && (
            <div className="dark:text-white">
              <p>{t("Enter Title.1")}</p>
              <input
                className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("title", { required: true })}
                type="text"
                name="title"
                id="title"
              />
            </div>
          )}
          {displaydesc && (
            <div className="w-[800px] dark:text-white">
              <p>{t("Enter Description.1")}</p>
              <input
                className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("description", { required: true })}
                type="text"
                name="description"
                id="description"
              />
            </div >
          )}
          {displayprice && (
            <div className="dark:text-white">
              <p>{t("Enter Price.1")}</p>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                {...register("price", { valueAsNumber: true, required: true })}
                name="price"
                id="price"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="mx-[100px] px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"
        >
          {t("Update.1")}
        </button>
      </form>
    </div>
  );
}