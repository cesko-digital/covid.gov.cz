import React from 'react';

import styles from './situation-list-item.module.scss';
import Button from '@/components/button';
import I18n from '@/components/i18n';

interface Props {
  title: string;
  description: string;
  link: string;
}

const SituationListItem: React.FC<Props> = ({ title, description, link }) => {
  return (
    <div className={styles.situationListItem}>
      <h3 className={styles.situationListItemTitle}>{title}</h3>
      <div className={styles.situationListItemDetails}>
        <p className={styles.situationListItemDescription}>{description}</p>
        <Button
          text={I18n('more')}
          variant="outline-yellow"
          href={link}
          className={styles.situationListItemButton}
        />
      </div>
    </div>
  );
};

export default SituationListItem;
