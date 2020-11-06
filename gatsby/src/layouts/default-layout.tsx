import React from 'react';
import classnames from 'classnames';

import Header from '@/components/header';
import Footer from '@/components/footer';
import MainBackground from '@/components/main-background';
import I18n from '@/components/i18n';
import styles from './default-layout.module.scss';
import useMobile from '@/hooks/useMobile';

const DefaultLayout: React.FC = ({ children }) => {
  const isMobile = useMobile('md');
  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header
        navItems={[
          { label: I18n('home'), to: '/' },
          { label: I18n('life_situations'), to: I18n('slug_situations') },
          { label: I18n('current_measures'), to: I18n('slug_measures') },
        ]}
      />
      <main className={styles.main}>
        <MainBackground
          src="/images/main-bg_1920px.jpg"
          alt="COVID PORTAL IMG"
          verticalShift={isMobile ? 0 : -170}
        />
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
