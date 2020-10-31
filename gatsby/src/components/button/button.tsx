import React from 'react';
import classNames from 'classnames';

const getClass = (
  variant: IProps['variant'],
  additionalClass?: string,
): string => {
  return classNames(
    'btn',
    { 'btn-primary': variant === 'contained' },
    { 'btn-outline-primary': variant === 'outline' },
    { 'btn-secondary': variant === 'secondary' },
    { [additionalClass]: additionalClass },
  );
};
interface IProps {
  text: string;
  variant?: 'contained' | 'outline' | 'secondary';
  additionalClass?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  variant = 'contained',
  onClick,
  text,
  href = '',
  additionalClass,
  disabled = false,
}) => {
  if (href !== '' && !disabled) {
    return (
      <a href={href} className={getClass(variant, additionalClass)}>
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={getClass(variant, additionalClass)}
      onClick={onClick || null}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
