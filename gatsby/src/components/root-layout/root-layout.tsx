import React from 'react';
import { TranslationsProvider } from '../i18n/TranslatorContext';

const RootLayout: React.FC = ({ children }) => {
  return <TranslationsProvider>{children}</TranslationsProvider>;
};

export default RootLayout;
