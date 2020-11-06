import React from 'react';

import styles from './main-background.module.scss';

interface IProps {
  src?: string;
  alt?: string;
}

const MainBackground: React.FC<IProps> = ({ src, alt }) => {
  return (
    <div className={styles.mainBackground}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default MainBackground;
