import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'cz',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  nsSeparator: false,

  resources: { cz: { translations: {} }, en: { translations: {} } },
});
