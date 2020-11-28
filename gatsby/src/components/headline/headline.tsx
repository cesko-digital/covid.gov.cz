import classNames from 'classnames';
import React from 'react';
import ContentIcon from '../content-icon';

import styles from './headline.module.scss';

interface IProps {
  iconCode?: string;
  className?: string;
  color: 'blue' | 'white';
}

const Headline: React.FC<IProps> = ({
  iconCode,
  className,
  children,
  color,
}) => {
  return (
    <div className={classNames(className, styles.headlineWrapper)}>
      <h1 className={classNames(styles.headline)}>
        {iconCode && (
          <ContentIcon className={styles.headlineIcon} code={iconCode} />
        )}
        <span
          className={classNames({
            'color-blue': color === 'blue',
            'color-white': color === 'white',
          })}
        >
          {children}
        </span>
      </h1>
      <hr />
    </div>
  );
};

export default Headline;
