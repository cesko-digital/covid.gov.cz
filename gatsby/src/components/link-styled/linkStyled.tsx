import React from 'react';
import Link from '@/components/link';
import styles from './link-styled.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  label: string;
  to: string;
}

const LinkStyled: React.FC<Props> = ({ to, label }) => {
  return (
    <p className={styles.linkStyled}>
      <Link to={to} label={label} className={styles.linkStyledLink}>
        {label}
        <KeyboardArrowRight
          style={{ fontSize: 20 }}
          className={styles.linkStyledIcon}
        />
      </Link>
    </p>
  );
};

export default LinkStyled;
