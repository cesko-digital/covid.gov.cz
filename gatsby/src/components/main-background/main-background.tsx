import React from 'react';

import styles from './main-background.module.scss';

interface IProps {
  src?: string;
  alt?: string;
}

const MainBackground: React.FC<IProps> = ({ src, alt }) => {
  return <img className={styles.mainBackground} src={src} alt={alt} />;
};

export default MainBackground;
