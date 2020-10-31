import React from 'react';
import classNames from 'classnames';
interface IProps {
  text: string;
  variant?: 'contained' | 'outline' | 'secondary';
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<IProps> = ({
  variant = 'contained',
  onClick,
  text,
  href = '',
}) => {
  if (href !== '') {
    return (
      <a
        href={href}
        className={classNames(
          'btn',
          { 'btn-primary': variant === 'contained' },
          { 'btn-outline-primary': variant === 'outline' },
          { 'btn-secondary': variant === 'secondary' },
        )}
      >
        {text}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={classNames(
        'btn',
        { 'btn-primary': variant === 'contained' },
        { 'btn-outline-primary': variant === 'outline' },
        { 'btn-secondary': variant === 'secondary' },
      )}
      onClick={onClick || null}
    >
      {text}
    </button>
  );
};

export default Button;
