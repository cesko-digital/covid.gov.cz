import React from 'react';
import classnames from 'classnames';

import styles from './update-warning.module.scss';
import ContentIcon from '../content-icon';

interface Props {
  variant: 'info' | 'alert';
  title: React.ReactNode;
  className?: string;
}

export const UpdateWarning: React.FC<Props> = ({
  children,
  title,
  variant,
  className,
}) => {
  const isInfo = variant === 'info';
  const isAlert = variant === 'alert';
  return (
    <div
      className={classnames(className, styles.wrapper, {
        [styles.info]: isInfo,
        [styles.alert]: isAlert,
      })}
    >
      <div className={styles.titleWrapper}>
        <div className={styles.iconWrapper}>
          <ContentIcon code={isInfo ? 'info' : 'warning'} />
        </div>
        <div>{title}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};
