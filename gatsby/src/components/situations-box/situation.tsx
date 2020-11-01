import React from 'react';
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowRight,
} from '@material-ui/icons';

import styles from './situation.module.scss';

interface Props {
  title: string;
}

const Situation: React.FC<Props> = ({ title }) => {
  return (
    <li className={styles.situation}>
      <span className={styles.situationTitle}>
        <AccountBalanceWalletOutlined
          className={styles.situationTitleIcon}
          style={{ fontSize: 24 }}
        />
        {title}
      </span>
      <KeyboardArrowRight style={{ fontSize: 16 }} />
    </li>
  );
};

export default Situation;
