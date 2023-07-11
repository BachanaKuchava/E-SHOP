import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = ["en", "ge"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: language,
    interpolation: {
      escapeValue: false,
    }
  } as InitOptions<any>);

export default i18n;
