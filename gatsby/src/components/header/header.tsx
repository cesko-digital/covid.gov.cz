import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import Link from '@/components/link';

import Container from '../container';
import Row from '../row';
import Col from '../col';

import classes from './header.module.scss';

import headerLogo from './header-logo.svg';
import { HeaderLocaleSelect } from './header-locale-select';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';
import { ISitePageContext } from '@graphql-types';
import { Alert } from '../alert';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  navItems: NavItem[];
  pageContext: ISitePageContext;
}

export const locales = ['cs', 'en'];

const Header: React.FC<Props> = ({ navItems, pageContext }) => {
  const [isOpen, setOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();
  const { t } = useTranslation();

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  }, [isOpen]);

  const onUseLink = () => {
    document.body.style.overflow = 'unset';
  };

  const languageVariants = pageContext.languageVariants || {};

  const bannerMessage = t('banner', { returnNullIfNotTranslated: true });
  return (
    <div>
      <div className={classes.gradient} />
      {bannerMessage && <Alert message={bannerMessage} />}

      <div className={classes.header} role="banner">
        <Container>
          <Row alignItems="center" className={classes.header__inner}>
            {/* LOGO */}
            <Col col={7} colMd={3} colLg={3}>
              <Link to="/" title={'COVID PORTAL - ' + t('home')}>
                <img src={headerLogo} alt="Covid Portál" />
              </Link>
            </Col>
            {/* MOBILE TOGGLE */}
            <Col
              col={5}
              className={classnames(
                classes.nav__toggleWrapper,
                'd-md-none text-right',
              )}
            >
              {/* MENU */}
              <div
                className={classnames(
                  classes.nav__toggle,
                  isOpen && classes['nav__toggle--open'],
                )}
                onClick={toggleOpen}
              >
                <span />
                <span />
                <div>
                  {(isOpen ? t('menu_close') : t('menu_open')).toUpperCase()}
                </div>
              </div>
            </Col>
            {/* DESKTOP NAV & SEARCH */}
            <Col col={12} colMd={8} colLg={9}>
              <Row alignItems="center">
                {/* NAVIGATION */}
                <Col
                  col={12}
                  colLg={10}
                  colXl={8}
                  className="d-none d-md-block"
                >
                  <div className={classnames('navigation')}>
                    <ul
                      className={classnames(
                        classes.navigation,
                        'nav nav--primary',
                      )}
                    >
                      {navItems.map(({ label, to }) => (
                        <li className={classnames('nav__item')} key={label}>
                          <Link
                            to={to}
                            className={classnames(
                              'nav__link',
                              classes.nav__link,
                            )}
                            activeClassName="active"
                            partiallyActive={to !== '/'}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* MOBILE NAV */}
            <div
              className={classnames(
                classes.nav__mobile,
                isOpen && classes['nav__mobile--open'],
                'd-md-none',
              )}
            >
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: '100%' }}
              >
                <div>
                  {navItems.map(({ label, to }) => (
                    <Link
                      onClick={onUseLink}
                      to={to}
                      key={label}
                      className={classnames(
                        classes.nav__mobileLink,
                        'container nav__link--mobile',
                      )}
                      activeClassName={classes['nav__mobileLink--active']}
                      partiallyActive={to !== '/'}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  {currentLanguage === 'en' ? (
                    <Link
                      to={languageVariants.cs || '/'}
                      noLanguageCodePrefix
                      onClick={onUseLink}
                      className={classnames(
                        classes.nav__mobileLink,
                        'container',
                      )}
                    >
                      Čeština
                    </Link>
                  ) : (
                    <Link
                      to={languageVariants.en || '/en/'}
                      noLanguageCodePrefix
                      onClick={onUseLink}
                      className={classnames(
                        classes.nav__mobileLink,
                        'container',
                      )}
                    >
                      English
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* DESKTOP LOCALE SELECT */}
            <HeaderLocaleSelect languageVariants={languageVariants} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
