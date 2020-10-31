import React from 'react';

interface IProps {
  className?: string;
}

const Row: React.FC<IProps> = ({ children, className = '' }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

export default Row;
