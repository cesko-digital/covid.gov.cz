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
    <div className={styles.situation}>
      <h3 className={styles.situationTitle}>{title}</h3>
      <div className={styles.situationDetails}>
        <p className={styles.situationDescription}>{description}</p>
        <Button
          text={I18n('more')}
          variant="outline-yellow"
          href={link}
          className={styles.situationButton}
        />
      </div>
    </div>
  );
};

export default SituationListItem;
