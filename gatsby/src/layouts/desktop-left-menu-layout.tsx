import React from 'react';
import classNames from 'classnames';

import styles from './desktop-left-menu-layout.module.scss';

interface IProps {
  menu: React.ReactNode;
  hideMenuOnMobile?: boolean;
}

const DesktopLeftMenuLayout: React.FC<IProps> = ({
  menu,
  children,
  hideMenuOnMobile,
}) => {
  return (
    <div className={classNames(styles.wrapper, 'mt-3')}>
      <nav className={classNames({ [styles.hideOnMobile]: hideMenuOnMobile })}>
        {menu}
      </nav>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DesktopLeftMenuLayout;
