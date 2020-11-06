import React from 'react';

import styles from './main-background.module.scss';

interface IProps {
  src?: string;
  alt?: string;
  verticalShift?: number;
}

const MainBackground: React.FC<IProps> = ({ src, alt, verticalShift = 0 }) => {
  return (
    <div className={styles.mainBackground}>
      <img src={src} alt={alt} style={{ marginTop: verticalShift }} />
    </div>
  );
};

export default MainBackground;
