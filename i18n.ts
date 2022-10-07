import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './public/locales/en/common.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: commonEn,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  defaultNS,
  resources,
});

export default i18n;
