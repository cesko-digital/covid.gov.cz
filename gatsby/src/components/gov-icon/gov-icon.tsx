import classNames from 'classnames';
import React from 'react';

/**
 * TODO: Find correct names for icons
 * Icons can be found here in official docs:
 * https://designsystem.gov.cz/styles/iconography.html
 */

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
  className?: string;
}

const GovIcon: React.FC<IProps> = ({ icon, size, tooltip = '', className }) => {
  return (
    <span
      title={tooltip}
      className={classNames(`pvs-theme-icon-${icon}`, className)}
      style={{ fontSize: size }}
    />
  );
};

export default GovIcon;
