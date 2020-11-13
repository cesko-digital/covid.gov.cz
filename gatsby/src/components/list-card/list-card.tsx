import React from 'react';
import Button from '@/components/button';
import Link from '@/components/link';
import styles from './measure-list-card.module.scss';
import classNames from 'classnames';
import { useTranslation } from '@/components/i18n';

interface IProps {
  title: string;
  link: string;
  description: string;
}

const ListCard: React.FC<IProps> = ({ title, description, link }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={link}
      className={classNames('card text-decoration-none', styles.listItem)}
    >
      <h2 className="font-weight-medium mb-1">{title}</h2>
      <div className="d-flex justify-content-between align-items-end">
        <p className="m-0 color-gray">{description}</p>
        <div className={styles.buttonWrapper}>
          <Button text={t('detail')} variant="outline" />
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
