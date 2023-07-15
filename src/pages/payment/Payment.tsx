import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Payment() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-[100vh] flex items-center justify-center py-20">
      <div className="w-full my-10 max-w-2xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">Payment Information</h2>
          <form className="flex flex-col gap-5">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("Your email.1")}
              </label>
              <input
                required
                type="email"
                name="email"
                id="emailr"
                placeholder="company@gmail.com"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Card Number.1")}
                </label>
                <input
                  required
                  name="card-number"
                  id="card-number"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }}
                  type="number"
                  maxLength={16}
                  placeholder="0000 0000 0000 0000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Expair Date.1")}
                </label>
                <input
                  required
                  type="number"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  required
                  type="number"
                  name="cvv"
                  id="cvv"
                  placeholder="000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Card Holder.1")}
                </label>
                <input
                  required
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder={t("Full Name.1")}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Your User Name.1")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Lastname.1")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Phone.1")}
                </label>
                <input
                  required
                  type="number"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Address.1")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full boredr-solid border-[3px] bg-indigo-900 border-white text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                {t("Pay.1")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
