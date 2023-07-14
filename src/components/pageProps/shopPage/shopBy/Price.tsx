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
          <button onClick={() => FilterByPrice(filterFirstValue, filterSecondValue)} className="text-white bg-black">Filter</button>


</div>
  );
}