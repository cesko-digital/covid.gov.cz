import React from 'react';
import { Link } from 'gatsby';
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
  const { title, path } = situation;
  return (
    <Link to={path.alias} className={styles.situation}>
      <span className={styles.situationTitle}>
        <AccountBalanceWalletOutlined
          className={styles.situationTitleIcon}
          style={{ fontSize: 24 }}
        />
        {title}
      </span>
      <KeyboardArrowRight style={{ fontSize: 16 }} />
    </Link>
  );
};

export default Situation;
