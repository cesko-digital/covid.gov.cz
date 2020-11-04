import React from 'react';
import { Link } from 'gatsby';

import styles from './measure.module.scss';
import Button from '@/components/button';

interface Props {
  title: string;
  description: string;
  area: string;
  validity: string;
  link: string;
}

const Measure: React.FC<Props> = ({
  title,
  description,
  area,
  validity,
  link,
}) => {
  return (
    <div className={styles.measure}>
      <h3 className={styles.measureTitle}>{title}</h3>
      <p className={styles.measureDescription}>{description}</p>
      <div className={styles.measureDetails}>
        <div>
          <div className={styles.measureDetail}>Platí pro: {area}</div>
          <div className={styles.measureDetail}>{validity}</div>
        </div>
        <Button
          text="VÍCE"
          variant="outline"
          href={link}
          className={styles.measureButton}
        />
      </div>
    </div>
  );
};

export default Measure;
