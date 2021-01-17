import React from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Col from '@/components/col';

import styles from './content-box.module.scss';

interface Props {
  title?: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'white' | 'blue' | 'green';
  noPadding?: boolean;
  className?: string;
}

const ContentBox: React.FC<Props> = ({
  children,
  title,
  description,
  buttonVariant,
  buttonText,
  buttonHref,
  variant = '',
  noPadding,
  className,
}) => {
  return (
    // contentBox--white
    // contentBox--blue
    // contentBox--green
    <div
      className={classNames(
        styles.contentBox,
        styles[`contentBox--${variant}`],
        noPadding && styles.contentBoxNoPadding,
        'row',
        className,
      )}
    >
      <Col col={12}>
        {title && (
          <h2
            className={styles.contentBoxTitle}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        )}
        {description && (
          <p className={styles.contentBoxDescription}>{description}</p>
        )}
        {children}
        {buttonText && (
          <Button
            href={buttonHref}
            variant={buttonVariant}
            text={buttonText}
            className={classNames(styles.contentBoxBtn, {
              [styles.contentBoxBtnBlue]: variant === 'white',
              [styles.contentBoxBtnGreen]: variant === 'green',
            })}
          />
        )}
      </Col>
    </div>
  );
};

export default ContentBox;
