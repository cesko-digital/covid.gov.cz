import React from 'react';

interface IProps {
  variant?: 'normal' | 'fluid';
  className?: string;
}

const Container: React.FC<IProps> = ({
  children,
  variant = 'normal',
  className = '',
}) => {
  return (
    <div
      className={`${
        variant === 'normal' ? 'container' : 'container-fluid'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
