import React from 'react';
import Link from '@/components/link';
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowRight,
} from '@material-ui/icons';
import styles from './situation.module.scss';
import { IArea } from 'graphql-types';

interface Props {
  situation: IArea;
}

const Situation: React.FC<Props> = ({ situation }) => {
  const { name, path } = situation;
  return (
    <Link to={path.alias} className={styles.situation}>
      <span className={styles.situationTitle}>
        <AccountBalanceWalletOutlined
          className={styles.situationTitleIcon}
          style={{ fontSize: 24 }}
        />
        {name}
      </span>
      <KeyboardArrowRight style={{ fontSize: 16 }} className="color-yellow" />
    </Link>
  );
};

export default Situation;
