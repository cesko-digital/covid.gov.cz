import React from 'react';

import { Room, Event } from '@material-ui/icons';
import { IRegion } from '@graphql-types';
import Time from '../time';
import I18n from '../i18n';

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
}) => (
  <Marker icon={<Event />}>
    {validFrom && (
      <Time
        displayTime={displayTime}
        datetime={validFrom}
        prefix={`${I18n('from')} `}
      />
    )}
    {validTo && (
      <Time
        displayTime={displayTime}
        datetime={validTo}
        prefix={`${I18n('to')} `}
      />
    )}
  </Marker>
);

export default Marker;
