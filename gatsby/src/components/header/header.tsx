import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import Link from '@/components/link';

import Container from '../container';
import Row from '../row';
import Col from '../col';

import classes from './header.module.scss';

import headerLogoCS from './header-logo-cs.svg';
import headerLogoEN from './header-logo-en.svg';
import { HeaderLocaleSelect } from './header-locale-select';
import I18n, { TRoute } from '@/components/i18n';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  navItems: NavItem[];
}

export const locales = ['cs', 'en'];

const Header: React.FC<Props> = ({ navItems }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  }, [isOpen]);

  const [activeLocale, setLocale] = useState(locales[0]);

  const onUseLink = () => {
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <div className={classes.gradient} />

      <div className={classes.header} role="banner">
        <Container>
          <Row alignItems="center" className={classes.header__inner}>
            {/* LOGO */}
            <Col col={7} colMd={3} colLg={3}>
              <Link to="/" label={'COVID PORTAL - ' + I18n('home')}>
                {TRoute('/') === '/' ? (
                  <img src={headerLogoCS} alt="Covid Portál" />
                ) : (
                  <img src={headerLogoEN} alt="Covid Portal" />
                )}
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
                  {(isOpen
                    ? I18n('menu_close')
                    : I18n('menu_open')
                  ).toUpperCase()}
                </div>
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
                {/* SEARCH */}
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
                  {TRoute('/') !== '/' ? (
                    <Link
                      to="/"
                      noTR
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
                      to="/en/"
                      noTR
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
            <HeaderLocaleSelect
              activeLocale={activeLocale}
              onLocaleChange={setLocale}
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
