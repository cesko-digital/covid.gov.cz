import React from 'react';
import Link from '@/components/link';
import styles from './link-styled.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  title: string;
  to: string;
}

const LinkStyled: React.FC<Props> = ({ to, title }) => {
  return (
    <p className={styles.linkStyled}>
      <Link to={to} title={title} className={styles.linkStyledLink}>
        {title}
        <span className={styles.chevron}>
          <KeyboardArrowRight
            style={{ fontSize: 20 }}
            className={styles.linkStyledIcon}
          />
        </span>
      </Link>
    </p>
  );
};

export default LinkStyled;
