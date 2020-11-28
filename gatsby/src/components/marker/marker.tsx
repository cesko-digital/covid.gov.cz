import React from 'react';

import { Room, Event } from '@material-ui/icons';
import { IRegion } from '@graphql-types';
import Time from '../time';
import { useTranslation } from '@/components/i18n';

interface IProps {
  icon: React.ReactNode;
}

const Marker: React.FC<IProps> = ({ icon, children }) => {
  return (
    <div className="d-flex align-items-center mb-1 color-blue">
      {icon}
      &nbsp;
      <span className="text-uppercase font-weight-medium">{children}</span>
    </div>
  );
};

interface IRegionsMarkerProps {
  regions: Pick<IRegion, 'name'>[];
}

export const RegionsMarker: React.FC<IRegionsMarkerProps> = ({ regions }) => (
  <Marker icon={<Room />}>
    {regions.map((region) => region.name).join(', ')}
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
