import React from 'react';

import { Room, Event } from '@material-ui/icons';
import { IRegion } from '@graphql-types';
import Time from '../time';
import { useTranslation } from '@/components/i18n';
import { isAllCzechRegions } from '../regions-time-logic';
import styles from './marker.module.scss';
import classNames from 'classnames';

interface IProps {
  icon: React.ReactNode;
}

const Marker: React.FC<IProps> = ({ icon, children }) => {
  return (
    <div className={classNames('color-blue', styles.markerWrapper)}>
      <div className={styles.iconWrapper}>{icon}</div>
      &nbsp;
      <span>{children}</span>
    </div>
  );
};

interface IRegionsMarkerProps {
  regions: Pick<IRegion, 'name'>[];
}

export const RegionsMarker: React.FC<IRegionsMarkerProps> = ({ regions }) => (
  <Marker icon={<Room />}>
    <span
      className={
        isAllCzechRegions(regions.map((region) => region.name))
          ? 'font-weight-normal'
          : 'font-weight-medium'
      }
    >
      {regions.map((region) => region.name).join(', ')}
    </span>
  </Marker>
);

interface ITimeProps {
  validFrom: string;
  validTo: string;
  displayTime: boolean;
}

export const TimeMarker: React.FC<ITimeProps> = ({
  validFrom,
  validTo,
  displayTime,
}) => {
  const { t } = useTranslation();
  return (
    <Marker icon={<Event />}>
      {validFrom && (
        <Time
          displayTime={displayTime}
          datetime={validFrom}
          prefix={`${t('from')} `}
        />
      )}
      {validTo && (
        <Time
          displayTime={displayTime}
          datetime={validTo}
          prefix={`${t('to')} `}
        />
      )}
    </Marker>
  );
};

export default Marker;
