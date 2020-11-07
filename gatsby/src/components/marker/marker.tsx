import React from 'react';

import { Room, Event } from '@material-ui/icons';
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

export const PlaceMarker: React.FC = ({ children }) => (
  <Marker icon={<Room />}>{children}</Marker>
);

interface ITimeProps {
  validFrom: string;
  validTo: string;
}

export const TimeMarker: React.FC<ITimeProps> = ({ validFrom, validTo }) => (
  <Marker icon={<Event />}>
    {validFrom && <Time datetime={validFrom} prefix={`${I18n('from')} `} />}
    {validTo && <Time datetime={validTo} prefix={`${I18n('to')} `} />}
  </Marker>
);

export default Marker;
