import React from 'react';

import styles from './headline.module.scss';

const Headline: React.FC = ({ children }) => {
  return (
    <h1 className={styles.headline}>{children}</h1>
  );
};

export default Headline;
