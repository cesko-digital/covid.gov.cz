import React from 'react'
import classnames from 'classnames'
import { TRoute } from '@/components/i18n'
import Link from '@/components/link'

import classes from './header-locale-select.module.scss'

interface Props {
  activeLocale: string;
  onLocaleChange: (locale: string) => void;
}

export const HeaderLocaleSelect: React.FC<Props> = () => {
  return (
    <div
      className={classnames(
        classes.localeSelect__wrapper,
        'd-none d-md-flex align-items-center'
      )}
    >
      {TRoute('/') !== '/' ? (
        <span>
          <Link to='/' noTR className='text-white'>
            CZ
          </Link>
        </span>
      ) : (
        <Link to='/en' noTR className='text-white'>
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
  )
}
