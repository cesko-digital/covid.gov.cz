import { useCallback, useContext } from 'react';
import { useLocation } from '@reach/router';
import {
  isLanguageSupported,
  LanguageKey,
  TranslationsContext,
  TranslationsByLanguage,
} from './TranslatorContext';

export const useCurrentLanguage = (): LanguageKey => {
  const location = useLocation();
  const path = location.pathname;
  const matchedLanguage = path.match(/\/([a-z]{2})\/.*/);

  if (matchedLanguage) {
    const [, langCode] = matchedLanguage;
    if (isLanguageSupported(langCode)) {
      return langCode;
    }
  }

  return 'cs';
};

const getTranslationFactory = (
  translationsByLanguage: TranslationsByLanguage,
  language: LanguageKey,
) => (translationKey: string): string => {
  const languageTranslations = translationsByLanguage[language];
  const translationString = languageTranslations[translationKey];

  if (!translationString) {
    console.error(`Translation not found for: "${translationKey}"`);
    return translationKey;
  }
  return translationString;
};

export const useTranslation = () => {
  const translationsByLanguage = useContext(TranslationsContext);
  const currentLanguage = useCurrentLanguage();
  const t = useCallback(
    getTranslationFactory(translationsByLanguage, currentLanguage),
    [translationsByLanguage, currentLanguage],
  );

  return {
    t,
  };
};
