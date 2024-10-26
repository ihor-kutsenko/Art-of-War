import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './locales/en/translation.json';
import RU from './locales/ru/translation.json';

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
