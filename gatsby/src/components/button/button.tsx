import React from 'react';
import classNames from 'classnames';
import styles from './variants.module.scss';

const getClass = (variant: ButtonVariant, additionalClass?: string): string => {
  return classNames(
    { btn: variant !== 'small-black' },
    { 'btn-primary': variant === 'contained' },
    { 'btn-outline-primary': variant === 'outline' },
    { 'btn-outline-dark': variant === 'outline-black' },
    { 'text-black': variant === 'outline-black' },
    { 'btn-secondary': variant === 'secondary' },
    { [styles.btnSmallBlack]: variant === 'small-black' },
    { [additionalClass]: additionalClass },
  );
};

export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'secondary'
  | 'outline-black'
  | 'small-black';

interface IProps {
  text?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  variant = 'contained',
  onClick,
  text,
  href = '',
  className,
  disabled = false,
  icon,
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
      {icon}
    </button>
  );
};

export default Button;
