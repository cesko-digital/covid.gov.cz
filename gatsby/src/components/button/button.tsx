import React from 'react';
import classNames from 'classnames';
import styles from './variants.module.scss';

import Link from '@/components/link';

const getClass = (variant: ButtonVariant, additionalClass?: string): string => {
  return classNames(
    { btn: variant !== 'small-black' },
    { 'btn-primary': variant === 'contained' },
    { 'btn-outline-primary': variant === 'outline' },
    { 'btn-outline-dark': variant === 'outline-black' },
    { 'btn-outline-yellow': variant === 'outline-yellow' },
    { 'btn-yellow': variant === 'yellow' },
    { 'text-black': variant === 'outline-black' },
    { 'btn-secondary': variant === 'secondary' },
    { [styles.btnSmallBlack]: variant === 'small-black' },
    { [additionalClass]: additionalClass },
  );
};

export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'yellow'
  | 'secondary'
  | 'outline-black'
  | 'outline-yellow'
  | 'small-black';

interface IProps {
  text?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  linkTitle?: string;
}

const Button: React.FC<IProps> = ({
  variant,
  onClick,
  text,
  href = '',
  className,
  disabled = false,
  icon,
  linkTitle = '',
}) => {
  if (href !== '' && !disabled) {
    return (
      <Link to={href} label={linkTitle} dataTestId="button-link">
        <button
          type="button"
          className={getClass(variant, className)}
          onClick={onClick || null}
          disabled={disabled}
        >
          {text}
          {icon}
        </button>
      </Link>
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
