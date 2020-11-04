import React from 'react';
import classnames from 'classnames';
import Header from '@/components/header';
import Footer from '@/components/footer';

import styles from './default-layout.module.scss';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
