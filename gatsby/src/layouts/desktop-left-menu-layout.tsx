import React from 'react';
import classNames from 'classnames';

import styles from './desktop-left-menu-layout.module.scss';

interface IProps {
  menu: React.ReactNode;
}

const DesktopLeftMenuLayout: React.FC<IProps> = ({ menu, children }) => {
  return (
    <div className={classNames(styles.wrapper, 'mt-3')}>
      <nav>{menu}</nav>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DesktopLeftMenuLayout;
