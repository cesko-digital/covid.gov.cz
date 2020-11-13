import React from 'react';
import classnames from 'classnames';
import { useCurrentLanguage } from '@/components/i18n';
import Link from '@/components/link';

import classes from './header-locale-select.module.scss';
import { ISitePageContextLanguageVariants } from '@graphql-types';

interface IProps {
  languageVariants: ISitePageContextLanguageVariants;
}

export const HeaderLocaleSelect: React.FC<IProps> = ({ languageVariants }) => {
  const variants = languageVariants || {};
  const currentLanguage = useCurrentLanguage();

  return (
    <div
      className={classnames(
        classes.localeSelect__wrapper,
        'd-none d-md-flex align-items-center',
      )}
    >
      {currentLanguage === 'en' ? (
        <Link
          to={variants.cs || '/'}
          noLanguageCodePrefix
          className="text-white"
        >
          CZ
        </Link>
      ) : (
        <Link
          to={variants.en || '/en/'}
          noLanguageCodePrefix
          className="text-white"
        >
          EN
        </Link>
      )}
      {/* <div className={classes.localeSelect__inner}>
        LABEL
        <div className={classes.localeSelect} onClick={() => setOpen(!isOpen)}>
          <span>{activeLocale}</span>
          <GovIcon icon={isOpen ? 'arrow-up' : 'arrow-down'} size={10} />
        </div>
        SELECT BOX
        <div
          className={classnames(
            'd-none',
            classes.localeSelect__selectBox,
            isOpen && 'd-flex flex-column',
          )}
        >
          {locales
            .filter((locale) => locale !== activeLocale)
            .map((locale, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLocaleChange(locale);
                  setOpen(false);
                }}
              >
                {locale}
              </a>
            ))}
        </div>
      </div> */}
    </div>
  );
};
