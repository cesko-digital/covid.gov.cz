import React from 'react';
import classNames from 'classnames';
import Link from '@/components/link';
import styles from './link-styled.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  title: string;
  to: string;
  variant: 'white' | 'blue';
}

const LinkStyled: React.FC<Props> = ({ to, title, variant }) => {
  return (
    <p
      className={classNames({
        [styles.linkStyled]: true,
        [styles.linkStyledBlueLine]: variant === 'blue',
      })}
    >
      <Link
        to={to}
        title={title}
        className={classNames({
          [styles.linkStyledLink]: true,
          [styles.linkStyledLinkBlue]: variant === 'blue',
          [styles.linkStyledLinkWhite]: variant === 'white',
        })}
      >
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
