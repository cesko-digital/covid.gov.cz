import React from 'react';
import classnames from 'classnames';

import Header from '@/components/header';
import Footer from '@/components/footer';
import MainBackground from '@/components/main-background';

import styles from './default-layout.module.scss';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header
        navItems={[
          { label: 'Úvod', to: '/' },
          { label: 'Vládní opatření', to: '#' },
          { label: 'Životní situace', to: '#' },
        ]}
      />
      <main>
        <MainBackground
          src="/images/main-content-mobile-bg.jpg"
          alt="Covid Portal"
        />
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
