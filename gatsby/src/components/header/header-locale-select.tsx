import React, { useState } from 'react';
import classnames from 'classnames';

import GovIcon from '../gov-icon';

import classes from './header-locale-select.module.scss';

import { locales } from './header';

interface Props {
  activeLocale: string;
  onLocaleChange: (locale: string) => void;
}

export const HeaderLocaleSelect: React.FC<Props> = ({
  activeLocale,
  onLocaleChange,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={classnames(
        classes.localeSelect__wrapper,
        'd-none d-md-flex align-items-center ',
      )}
    >
      <div className={classes.localeSelect__inner}>
        {/* LABEL */}
        <div className={classes.localeSelect} onClick={() => setOpen(!isOpen)}>
          <span>{activeLocale}</span>
          <GovIcon icon={isOpen ? 'arrow-up' : 'arrow-down'} size={10} />
        </div>
        {/* SELECT BOX */}
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
      </div>
    </div>
  );
};
