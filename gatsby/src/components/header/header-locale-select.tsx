import React from 'react';
import classnames from 'classnames';
import { useCurrentLanguage } from '@/components/i18n';
import Link from '@/components/link';

import { ISitePageContextLanguageVariants } from '@graphql-types';

interface IProps {
  languageVariants: ISitePageContextLanguageVariants;
}

export const HeaderLocaleSelect: React.FC<IProps> = ({ languageVariants }) => {
  const variants = languageVariants || {};
  const currentLanguage = useCurrentLanguage();

  return (
    <div className={classnames('d-none d-md-flex align-items-center px-2')}>
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
    </div>
  );
};
