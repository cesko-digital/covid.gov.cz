import React from 'react';
import GovIcon from '@/components/gov-icon';
import MdIcon from '@/components/md-icon';

interface IProps {
  icon: string;
  tooltip?: string;
  size?: 10 | 16 | 20 | 24 | 32;
  className?: string;
  family: string;
}

const Icon: React.FC<IProps> = ({
  icon,
  size,
  tooltip = '',
  className,
  family,
}) => {
  return family === 'materialicon' ? (
    <MdIcon icon={icon} tooltip={tooltip} size={size} className={className} />
  ) : (
    <GovIcon icon={icon} tooltip={tooltip} size={size} className={className} />
  );
};

export default Icon;
