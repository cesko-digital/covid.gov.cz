import React from 'react';

import { Room, Event } from '@material-ui/icons';
import { IRegion } from '@graphql-types';
import Time from '../time';
import { useTranslation } from '@/components/i18n';
import styles from './marker.module.scss';
import classNames from 'classnames';
import RegionsDetail from '../regions-detail';

interface IProps {
  icon: React.ReactNode;
}

const Marker: React.FC<IProps> = ({ icon, children }) => {
  return (
    <div className={classNames('color-blue', styles.markerWrapper)}>
      <div className={styles.iconWrapper}>{icon}</div>
      &nbsp;
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

interface IRegionsMarkerProps {
  regions: Pick<IRegion, 'name' | 'drupal_internal__tid'>[];
}

export const RegionsMarker: React.FC<IRegionsMarkerProps> = ({ regions }) => (
  <Marker icon={<Room />}>
    {<RegionsDetail regions={regions}></RegionsDetail>}
  </Marker>
);

interface ITimeProps {
  validFrom: string;
  validTo: string;
  displayTime: boolean;
  displayShortDay: boolean;
}

export const TimeMarker: React.FC<ITimeProps> = ({
  validFrom,
  validTo,
  displayTime,
  displayShortDay,
}) => {
  const { t } = useTranslation();
  return (
    <Marker icon={<Event />}>
      {validFrom && (
        <Time
          displayTime={displayTime}
          displayShortDate={displayShortDay}
          datetime={validFrom}
          prefix={`${t('from')} `}
        />
      )}
      {validTo && (
        <Time
          displayTime={displayTime}
          displayShortDate={displayShortDay}
          datetime={validTo}
          prefix={`${t('to')} `}
        />
      )}
    </Marker>
  );
};

export default Marker;
