import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import Container from '../container';
import Row from '../row';
import Col from '../col';
import SearchBox from '../search-box';

import classes from './header.module.scss';

import headerLogo from './header-logo.svg';
import { HeaderLocaleSelect } from './header-locale-select';
import I18n from '@/components/i18n';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  navItems: NavItem[];
}

export const locales = ['CZ', 'EN', 'DE'];

const Header: React.FC<Props> = ({ navItems }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  }, [isOpen]);

  const [activeLocale, setLocale] = useState(locales[0]);

  return (
    <div className={classes.header} role="banner">
      <Container>
        <Row alignItems="center" className={classes.header__inner}>
          {/* LOGO */}
          <Col col={7} colMd={3} colLg={3}>
            <Link to="/" title="COVID PORTÁL - úvodní strana">
              <img src={headerLogo} />
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
              <div>{isOpen ? 'ZAVŘÍT' : 'MENU'}</div>
            </div>
          </Col>
          {/* DESKTOP NAV & SEARCH */}
          <Col col={12} colMd={8} colLg={9}>
            <Row alignItems="center">
              {/* NAVIGATION */}
              <Col col={12} colLg={8} className="d-none d-md-block">
                <div className={classnames(classes.navigation, 'navigation')}>
                  <ul className={classnames('nav nav--primary')}>
                    {navItems.map(({ label, to }) => (
                      <li className={classnames('nav__item')} key={label}>
                        <Link
                          to={to}
                          className={classnames('nav__link', classes.nav__link)}
                          activeClassName="active"
                          partiallyActive
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              {/* SEARCH */}
              <Col col={12} colLg={4} className="ml-auto">
                <SearchBox onSearch={() => {}} />
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
            {navItems.map(({ label, to }) => (
              <Link
                to={to}
                key={label}
                className={classes.nav__mobileLink}
                activeClassName={classes['nav__mobileLink--active']}
                partiallyActive
              >
                {label}
              </Link>
            ))}
            {locales.map((locale, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setLocale(locale)}
                className={classnames(
                  classes.nav__mobileLink,
                  index === 0 && 'mt-auto',
                  locale === activeLocale && classes['nav__mobileLink--active'],
                )}
              >
                {locale}
              </a>
            ))}
          </div>
          {/* DESKTOP LOCALE SELECT */}
          <HeaderLocaleSelect
            activeLocale={activeLocale}
            onLocaleChange={setLocale}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Header;
