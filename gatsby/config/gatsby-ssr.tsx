import React from 'react';
import { GatsbySSR } from 'gatsby';
import RootLayout from '../src/components/root-layout';
import { isLanguageSupported } from '../src/components/i18n/TranslatorContext';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  pathname,
  setHtmlAttributes,
}) => {
  let language = 'cs';
  const matchedLanguage = pathname.match(/\/([a-z]{2})\/.*/);

  if (matchedLanguage) {
    const [, langCode] = matchedLanguage;
    if (isLanguageSupported(langCode)) {
      language = langCode;
    }
  }

  setHtmlAttributes({
    className: 'pvs-theme',
    lang: language,
  });
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
