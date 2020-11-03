import React from 'react';
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowRight,
} from '@material-ui/icons';
import styles from './situation.module.scss';
import { ISituation } from 'graphql-types';

interface Props {
  situation: ISituation;
}

const Situation: React.FC<Props> = ({ situation }) => {
  const { title } = situation;
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
