import React from 'react';
import Button from '@/components/button';
import Link from '@/components/link';
import Time from '@/components/time';
import styles from './measure-list-card.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface IProps {
  title: string;
  link: string;
  description: string;
  area: string;
  validFrom: string;
  validTo: string;
}

const MeasureListCard: React.FC<IProps> = ({
  title,
  description,
  link,
  area,
  validFrom,
  validTo,
}) => {
  const { t } = useTranslation();
  return (
    <Link
      to={link}
      className={classNames('card text-decoration-none', styles.listItem)}
    >
      <h2 className="font-weight-medium mb-1">{title}</h2>
      <p className="mt-0 color-gray">{description}</p>
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <div className={styles.measureListCardDetail}>
            {t('applies_for')} {area}
          </div>
          <div className={styles.measureListCardDetail}>
            {validFrom && (
              <Time displayTime datetime={validFrom} prefix={`${t('from')} `} />
            )}
            {validTo && (
              <Time displayTime datetime={validTo} prefix={`${t('to')} `} />
            )}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button text={t('detail')} variant="outline" />
        </div>
      </div>
    </Link>
  );
};

export default MeasureListCard;
