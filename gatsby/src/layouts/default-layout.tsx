import React from 'react';
import classnames from 'classnames';

import Header from '@/components/header';
import Footer from '@/components/footer';
import I18n from '@/components/i18n';
import styles from './default-layout.module.scss';
import { useBackgroundImageStyle } from '@/hooks/useBackgroundImageStyle';

const DefaultLayout: React.FC = ({ children }) => {
  const backgroundImageStyle = useBackgroundImageStyle();

  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header
        navItems={[
          { label: I18n('home'), to: '/' },
          { label: I18n('life_situations'), to: I18n('slug_situations') },
          { label: I18n('current_measures'), to: I18n('slug_measures') },
        ]}
      />
      <main className={styles.main} style={backgroundImageStyle}>
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
