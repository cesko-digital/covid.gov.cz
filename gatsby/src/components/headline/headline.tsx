import React from 'react';
import ContentIcon from '../content-icon';

import styles from './headline.module.scss';

interface IProps {
  iconCode?: string;
}

const Headline: React.FC = ({ iconCode, children }) => {
  return (
    <h1 className={styles.headline}>
      {iconCode && (
        <ContentIcon className={styles.headlineIcon} code={iconCode} />
      )}
      {children}
    </h1>
  );
};

export default Headline;
