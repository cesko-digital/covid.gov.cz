import React from 'react';

interface IProps {
  variant?: 'normal' | 'fluid';
}

const Container: React.FC<IProps> = ({ children, variant = 'normal' }) => {
  return (
    <div className={variant === 'normal' ? 'container' : 'container-fluid'}>
      {children}
    </div>
  );
};

export default Container;
