import React, { createContext, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ITranslationStringQuery } from '@graphql-types';

const SUPPORTED_LANGUAGES = ['cs', 'en'] as const;

export type LanguageKey = typeof SUPPORTED_LANGUAGES[number];
type TranslationKey = string;

export type TranslationsByLanguage = {
  [K in LanguageKey]: Record<TranslationKey, string>;
};

const defaultTranslations: TranslationsByLanguage = { cs: {}, en: {} };

export const isLanguageSupported = (
  langCode: string,
): langCode is LanguageKey => {
  return SUPPORTED_LANGUAGES.includes(langCode as LanguageKey);
};

const getTranslationsByLanguage = (
  query: ITranslationStringQuery,
): TranslationsByLanguage => {
  return query.allTranslation.nodes.reduce<TranslationsByLanguage>(
    (acc, curr) => {
      const { translationKey, translationString, langCode } = curr;

      if (isLanguageSupported(langCode)) {
        const currentLanguageTranslations = acc[langCode];
        acc[langCode] = {
          ...currentLanguageTranslations,
          [translationKey]: translationString,
        };
      }

      return acc;
    },
    defaultTranslations,
  );
};

export const TranslationsContext = createContext<TranslationsByLanguage>(
  defaultTranslations,
);

export const TranslationsProvider: React.FC = ({ children }) => {
  const queryResult = useStaticQuery<ITranslationStringQuery>(
    graphql`
      query TranslationString {
        allTranslation {
          nodes {
            langCode: langcode
            translationKey: source
            translationString: target
          }
        }
      }
    `,
  );

  const translationsByLanguage = useMemo(
    () => getTranslationsByLanguage(queryResult),
    [],
  );

  return (
    <TranslationsContext.Provider value={translationsByLanguage}>
      {children}
    </TranslationsContext.Provider>
  );
};
