import React from 'react';
import classNames from 'classnames';

import styles from './subtitle.module.scss';

const Subtitle: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <p className={classNames(styles.subtitle, className)}>{children}</p>;
};

export default Subtitle;
