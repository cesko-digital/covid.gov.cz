import React from 'react';

import styles from './measure.module.scss';
import Button from '@/components/button';
import Time from '@/components/time';
import { useTranslation } from '@/components/i18n';
import classNames from 'classnames';
import { isAllCzechRegions } from '../regions-detail';

interface Props {
  title: string;
  description: string;
  area: string;
  areaTid: string[];
  validFrom: string;
  validTo: string;
  link: string;
}

const Measure: React.FC<Props> = ({
  title,
  description,
  area,
  areaTid,
  validFrom,
  validTo,
  link,
}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.measure, 'position-relative')}>
      <h3 className={styles.measureTitle}>{title}</h3>
      <p className={styles.measureDescription}>{description}</p>
      <div className={styles.measureDetails}>
        <div>
          <div
            className={classNames(
              styles.measureDetail,
              isAllCzechRegions(areaTid)
                ? 'font-weight-normal'
                : 'font-weight-medium',
            )}
          >
            {t('applies_for')} {area}
          </div>
          <div
            className={classNames(
              styles.measureDetail,
              styles.measureDetailMobile,
            )}
          >
            {validFrom && (
              <Time
                displayTime={false}
                displayShortDate={true}
                datetime={validFrom}
                prefix={`${t('from')} `}
              />
            )}
            {validTo && (
              <Time
                displayTime={false}
                displayShortDate={true}
                datetime={validTo}
                prefix={`${t('to')} `}
              />
            )}
          </div>
          <div
            className={classNames(
              styles.measureDetail,
              styles.measureDetailDesktop,
            )}
          >
            {validFrom && (
              <Time
                displayTime={false}
                displayShortDate={false}
                datetime={validFrom}
                prefix={`${t('from')} `}
              />
            )}
            {validTo && (
              <Time
                displayTime={false}
                displayShortDate={false}
                datetime={validTo}
                prefix={`${t('to')} `}
              />
            )}
          </div>
        </div>
        <Button
          text={t('more')}
          variant="outline-yellow"
          className={classNames(styles.measureButton, 'stretched-link')}
          href={link}
        />
      </div>
    </div>
  );
};

export default Measure;
