import React from 'react';

// TODO: Find correct names for icons
interface IProps {
  icon:
    | 'warning'
    | 'time'
    | 'settings'
    | 'remove'
    | 'plus'
    | 'place'
    | 'person'
    | 'notification'
    | 'more'
    | 'message'
    | 'mail'
    | 'grade'
    | 'external'
    | 'events'
    | 'dashboard'
    | 'check'
    | 'attachment'
    | 'arrow-right'
    | 'arrow-up'
    | 'arrow-left'
    | 'arrow-down'
    | 'add';
  size?: 16 | 20 | 24 | 32;
  tooltip?: string;
}

const GovIcon: React.FC<IProps> = ({ icon, size, tooltip = '' }) => {
  return (
    <span
      title={tooltip}
      className={`pvs-theme-icon-${icon}`}
      style={{ fontSize: size }}
    />
  );
};

export default GovIcon;
