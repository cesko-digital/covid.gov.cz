import React from 'react';
import Link from '@/components/link';
import Button from '@/components/button';
import I18n from '@/components/i18n';
import styles from './measure-list-card.module.scss';

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
    <div className="card p-2 mb-2">
      {/* TODO: Add icon */}
      <h2 className="font-weight-medium mb-1">{title}</h2>
      <p className="mt-0">{description}</p>
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <div className={styles.measureListCardDetail}>
            {I18n('applies_for')} {area}
          </div>
          <div className={styles.measureListCardDetail}>
            {`${validFrom ? `${I18n('from')} ${validFrom} ` : ''}${
              validTo ? `${I18n('to')} ${validTo}` : ''
            }`}
          </div>
        </div>
        <div>
          <Link to={link}>
            <Button text={I18n('detail')} variant="outline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeasureListCard;
