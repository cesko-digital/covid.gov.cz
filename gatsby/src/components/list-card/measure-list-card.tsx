import React from 'react';
import Button from '@/components/button';
import Link from '@/components/link';
import I18n from '@/components/i18n';
import Time from '@/components/time';
import styles from './measure-list-card.module.scss';
import classNames from 'classnames';

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
  return (
    <Link
      to={link}
      className={classNames(
        'card p-2 mb-2 text-decoration-none',
        styles.listItem,
      )}
    >
      {/* TODO: Add icon */}
      <h2 className="font-weight-medium mb-1">{title}</h2>
      <p className="mt-0 color-gray">{description}</p>
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <div className={styles.measureListCardDetail}>
            {I18n('applies_for')} {area}
          </div>
          <div className={styles.measureListCardDetail}>
            {validFrom && (
              <Time datetime={validFrom} prefix={`${I18n('from')} `} />
            )}
            {validTo && <Time datetime={validTo} prefix={`${I18n('to')} `} />}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button text={I18n('detail')} variant="outline" />
        </div>
      </div>
    </Link>
  );
};

export default MeasureListCard;
