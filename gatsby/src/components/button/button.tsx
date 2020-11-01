import React from 'react';
import classNames from 'classnames';

const getClass = (variant: ButtonVariant, additionalClass?: string): string => {
  return classNames(
    'btn',
    { 'btn-primary': variant === 'contained' },
    { 'btn-outline-primary': variant === 'outline' },
    { 'btn-secondary': variant === 'secondary' },
    { [additionalClass]: additionalClass },
  );
};

export type ButtonVariant = 'contained' | 'outline' | 'secondary';

interface IProps {
  text: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  variant = 'contained',
  onClick,
  text,
  href = '',
  className,
  disabled = false,
}) => {
  if (href !== '' && !disabled) {
    return (
      <a href={href} className={getClass(variant, className)}>
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={getClass(variant, className)}
      onClick={onClick || null}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
