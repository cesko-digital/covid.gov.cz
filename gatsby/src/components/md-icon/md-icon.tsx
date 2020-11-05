import classNames from 'classnames';
import React from 'react';

interface IProps {
  icon: string;
  tooltip?: string;
  size?: 10 | 16 | 20 | 24 | 32;
  className?: string;
}

const MdIcon: React.FC<IProps> = ({ icon, size, tooltip = '', className }) => {
  return (
    <span
      title={tooltip}
      className={classNames('material-icons-outlined', className)}
      style={{ fontSize: size }}
    >
      {icon}
    </span>
  );
};

export default MdIcon;
