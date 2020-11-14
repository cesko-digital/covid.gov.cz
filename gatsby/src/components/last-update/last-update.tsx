import React from 'react';
import classNames from 'classnames';

import { Maybe, Scalars } from '../../../graphql-types';
import { useTranslation } from '../i18n';
import Time from '../time';

import styles from './last-update.module.scss';

interface Props {
  lastUpdated: Maybe<Scalars['Date']>;
}

const LastUpdate: React.FC<Props> = ({ lastUpdated }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.lastUpdate)}>
      <Time
        prefix={`${t('last_updated')} `}
        displayTime
        datetime={lastUpdated}
      />
    </div>
  );
};

export default LastUpdate;
