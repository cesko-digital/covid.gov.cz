import React from 'react';
import Button from '@/components/button';

import styles from './content-box.module.scss';

const ContentBox: React.FC = ({ children }) => {
  return (
    <div className={styles.contentBox}>
      <h2 className={styles.contentBoxTitle}>
        <span className={styles.contentBoxTitleBold}>Aktuální</span> opatření
        (72)
      </h2>
      <p className={styles.contentBoxDescription}>
        Všechna současná nařízení vlády, jejich detail, platnost a jednoduché
        vysvětlení
      </p>
      {children}
      <Button
        text="Zobrazit všech 72 nařízení"
        className={styles.contentBoxButton}
      />
    </div>
  );
};

export default ContentBox;
