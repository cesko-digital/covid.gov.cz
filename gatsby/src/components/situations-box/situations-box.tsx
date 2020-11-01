import React from 'react';
import Situation from '@/components/situations-box/situation';

import styles from './situations-box.module.scss';

const situations = ['Pohyb venku', 'Zaměstnání', 'Obchod a služby'];

const SituationsBox: React.FC = () => {
  return (
    <div className={styles.situations}>
      {situations.map((item, index) => (
        <Situation title={item} key={index} />
      ))}
    </div>
  );
};

export default SituationsBox;
