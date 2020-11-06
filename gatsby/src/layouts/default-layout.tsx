import React from 'react';
import classnames from 'classnames';

import Header from '@/components/header';
import Footer from '@/components/footer';
import MainBackground from '@/components/main-background';
import I18n from '@/components/i18n';

import styles from './default-layout.module.scss';

const DefaultLayout: React.FC = ({ children }) => {
  const measuresRoute = I18n('slug_measures');
  const situationsRoute = I18n('slug_situations');

  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header
        navItems={[
          { label: I18n('home'), to: '/' },
          { label: I18n('life_situations'), to: situationsRoute },
          { label: I18n('life_situations'), to: measuresRoute },
        ]}
      />
      <main className={styles.main}>
        <MainBackground
          src="/images/main-content-mobile-bg.jpg"
          alt={I18n('covid_portal')}
        />
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
