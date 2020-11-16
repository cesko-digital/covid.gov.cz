import React from 'react';
import classNames from 'classnames';

import styles from './desktop-left-menu-layout.module.scss';

interface IProps {
  menu: React.ReactNode;
  hideMenuOnMobile?: boolean;
  theme: 'white' | 'blue';
}

const DesktopLeftMenuLayout: React.FC<IProps> = ({
  menu,
  children,
  hideMenuOnMobile,
  theme,
}) => {
  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        'mt-3': true,
        [styles.whiteTheme]: theme === 'white',
        [styles.blueTheme]: theme === 'blue',
      })}
    >
      <nav className={classNames({ [styles.hideOnMobile]: hideMenuOnMobile })}>
        {menu}
      </nav>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DesktopLeftMenuLayout;
