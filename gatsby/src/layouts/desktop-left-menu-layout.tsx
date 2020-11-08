import React from 'react';

import styles from './desktop-left-menu-layout.module.scss';

interface IProps {
  menu: React.ReactNode;
}

const DesktopLeftMenuLayout: React.FC<IProps> = ({ menu, children }) => {
  return (
    <div className={styles.wrapper}>
      <nav>{menu}</nav>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DesktopLeftMenuLayout;
