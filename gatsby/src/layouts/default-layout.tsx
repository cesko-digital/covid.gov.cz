import React from 'react';
import classnames from 'classnames';
import Footer from '@/components/footer';

import styles from './default-layout.module.scss';

const DefaultLayout: React.FC<{ children }> = ({ children }) => {
  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      Layout Start
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
