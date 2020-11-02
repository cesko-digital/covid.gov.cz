import classNames from 'classnames';
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
    // container
    // container-fluid
    <div
      className={classNames(
        { container: variant === 'normal' },
        { 'container-fluid': variant === 'fluid' },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
