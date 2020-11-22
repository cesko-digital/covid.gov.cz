import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import Link from '@/components/link';

import Container from '../container';

import classes from './header.module.scss';

import headerLogo from './header-logo.svg';
import { HeaderLocaleSelect } from './header-locale-select';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';
import { ISitePageContext } from '@graphql-types';
import { Alert } from '../alert';
import SearchBox from '../search-box';
import Row from '../row';
import Col from '../col';
import GovIcon from '../gov-icon';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  navItems: NavItem[];
  pageContext: ISitePageContext;
  isTransparent: boolean;
  showSearch: boolean;
}

export const locales = ['cs', 'en'];

const Header: React.FC<Props> = ({
  navItems,
  pageContext,
  isTransparent,
  showSearch,
}) => {
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
    <>
      {bannerMessage && <Alert message={bannerMessage} />}
      <header
        className={classnames(classes.header, {
          [classes.blueBgWrapper]: !isTransparent,
        })}
        role="banner"
      >
        <Container>
          <div className={classes.headerExtended}>
            {/* LOGO */}
            <div className={classes.logoWrapper}>
              <Link to="/" title={'COVID PORTAL - ' + t('home')}>
                <img src={headerLogo} alt="Covid Portál" />
              </Link>
            </div>
            {/* MOBILE TOGGLE */}
            <div
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
            </div>
            {/* NAVIGATION */}
            <nav
              className={classnames(
                classes.headerExtended,
                'navigation',
                'd-none',
                'd-md-block',
              )}
            >
              <div className={classes.flexWrapper}>
                <div className={classes.headerTop}>
                  <div className="left">Infolinka: 270 005 200</div>
                  <div className={classnames('d-flex')}>
                    {showSearch && (
                      <SearchBox
                        size="small"
                        className={classes.searchBox}
                        buttonProps={{ variant: 'contained' }}
                      />
                    )}
                    <HeaderLocaleSelect languageVariants={languageVariants} />
                  </div>
                </div>
                <div className={classes.navigationWrapper}>
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
                          className={classnames('nav__link', classes.nav__link)}
                          activeClassName="active"
                          partiallyActive={to !== '/'}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
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
          </div>
        </Container>
      </header>
      {/* MOBILE SEARCH BOX */}
      {showSearch && (
        <div
          className={classnames(
            classes.mobileSearchBoxWrapper,
            'd-block d-md-none',
          )}
        >
          <Container>
            <Row>
              <Col colSm={12}>
                <SearchBox
                  buttonProps={{
                    icon: <GovIcon icon="search" size={16} />,
                    text: '',
                  }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
