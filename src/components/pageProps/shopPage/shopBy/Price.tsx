import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Price() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [filterFirstValue, SetfilterFirstValue] = useState("0");
  const [filterSecondValue, SetfilterSecondValue] = useState("0");
  function FilterByPrice(val1: string, val2: string) {
   if(val1 !== val2 && val1 < val2) {
    navigate(`/filter/${val1}/${val2}`);
   }
  }
  return (
<div>
<input
            onChange={(e) => SetfilterSecondValue(e.target.value)}
            type="range"
            id="price-range"
            name="price-range"
            min="0"
            max="5000"
            step="10"
            className="accent-black"
          />
          <div className="w-[40px] ">{filterSecondValue}</div>
          <button onClick={() => FilterByPrice(filterFirstValue, filterSecondValue)} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Filter</button>


</div>
  );
}