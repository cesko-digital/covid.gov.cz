import React from 'react';

import styles from './measure.module.scss';
import Button from '@/components/button';
import I18n from '@/components/i18n';
import Time from '@/components/time';
import Link from '@/components/link';

interface Props {
  title: string;
  description: string;
  area: string;
  validFrom: string;
  validTo: string;
  link: string;
}

const Measure: React.FC<Props> = ({
  title,
  description,
  area,
  validFrom,
  validTo,
  link,
}) => {
  return (
    <div className={styles.measure}>
      <h3 className={styles.measureTitle}>{title}</h3>
      <p className={styles.measureDescription}>{description}</p>
      <div className={styles.measureDetails}>
        <div>
          <div className={styles.measureDetail}>
            {I18n('applies_for')} {area}
          </div>
          <div className={styles.measureDetail}>
            {validFrom && (
              <Time
                displayTime
                datetime={validFrom}
                prefix={`${I18n('from')} `}
              />
            )}
            {validTo && (
              <Time displayTime datetime={validTo} prefix={`${I18n('to')} `} />
            )}
          </div>
        </div>
        <Link to={link} label={I18n('more')}>
          <Button
            text={I18n('more')}
            variant="outline-yellow"
            className={styles.measureButton}
          />
        </Link>
      </div>
    </div>
  );
};

export default Measure;
