import React from 'react';

import styles from './measure.module.scss';
import Button from '@/components/button';
import Time from '@/components/time';
import { useTranslation } from '@/components/i18n';

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
  const { t } = useTranslation();
  return (
    <div className={styles.measure}>
      <h3 className={styles.measureTitle}>{title}</h3>
      <p className={styles.measureDescription}>{description}</p>
      <div className={styles.measureDetails}>
        <div>
          <div className={styles.measureDetail}>
            {t('applies_for')} {area}
          </div>
          <div className={styles.measureDetail}>
            {validFrom && (
              <Time displayTime datetime={validFrom} prefix={`${t('from')} `} />
            )}
            {validTo && (
              <Time displayTime datetime={validTo} prefix={`${t('to')} `} />
            )}
          </div>
        </div>
        <Button
          text={t('more')}
          variant="outline-yellow"
          className={styles.measureButton}
          href={link}
        />
      </div>
    </div>
  );
};

export default Measure;
