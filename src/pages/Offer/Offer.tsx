import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18next";
const Offer = () => {
  const [prevLocation] = useState("");
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title={t("Offer.1")} prevLocation={prevLocation} />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;
