import classNames from 'classnames';
import React from 'react';

interface IProps {
  icon:
    | 'person'
    | 'search'
    | 'dots-three-vertical'
    | 'pvs-logo'
    | 'pvs-logo-text'
    | 'accordion-arrow-down'
    | 'accordion-arrow-up'
    | 'accordion-arrow-left'
    | 'accordion-arrow-right'
    | 'arrow-list-down'
    | 'arrow-list-up'
    | 'arrow-list-left'
    | 'arrow-list-right'
    | 'arrow-down'
    | 'arrow-up'
    | 'arrow-left'
    | 'arrow-right'
    | 'check'
    | 'external-link'
    | 'rss'
    | 'data-box'
    | 'pin'
    | 'calendar'
    | 'plus'
    | 'thin-plus'
    | 'alert'
    | 'mail'
    | 'close'
    | 'circle-plus'
    | 'circle-minus'
    | 'time'
    | 'star'
    | 'attachment'
    | 'message'
    | 'notification'
    | 'settings'
    | 'exit'
    | 'squares-grid';
  size?: 10 | 16 | 20 | 24 | 32;
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
