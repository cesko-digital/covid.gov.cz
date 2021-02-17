import React from 'react';
import classNames from 'classnames';

import { Maybe, Scalars } from '../../../graphql-types';
import { useTranslation } from '../i18n';
import Time from '../time';

import styles from './last-update.module.scss';

interface Props {
  lastUpdated: Maybe<Scalars['Date']>;
  isMobile: boolean;
}

const LastUpdate: React.FC<Props> = ({ lastUpdated, isMobile }) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames({
        [styles.lastUpdateDesktop]: !isMobile,
        [styles.lastUpdateMobile]: isMobile,
      })}
    >
      <Time
        prefix={`${t('last_updated')} `}
        displayTime
        datetime={lastUpdated}
        displayLastUpdatedCzDays={true}
      />
    </div>
  );
};

export default LastUpdate;
