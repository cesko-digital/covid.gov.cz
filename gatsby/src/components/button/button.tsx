import React from 'react';
import classNames from 'classnames';
import styles from './variants.module.scss';

import Link from '@/components/link';

export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'yellow'
  | 'secondary'
  | 'outline-black'
  | 'outline-yellow'
  | 'small-black';

const getButtonClassName = (variant?: ButtonVariant): string => {
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
  );
};

type IButtonBase = {
  text?: string;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonBase & { href?: undefined };

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  IButtonBase & { href: string };

// Input/output options
type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};

// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props;

const Button: Overload = (props: ButtonProps | AnchorProps) => {
  const { className, variant, ...restCommonProps } = props;

  const composedClassName = classNames(getButtonClassName(variant), className);

  if (hasHref(restCommonProps)) {
    const { href, text, icon, ...rest } = restCommonProps;
    return (
      <Link
        dataTestId="button-link"
        to={href}
        className={composedClassName}
        {...rest}
      >
        {text}
        {icon}
      </Link>
    );
  }

  const { text, icon, ...rest } = restCommonProps as ButtonProps;

  return (
    <button type="button" className={composedClassName} {...rest}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
