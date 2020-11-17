import React from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Col from '@/components/col';

import styles, {
  contentBoxBlue,
  contentBoxWhite,
} from './content-box.module.scss';

interface Props {
  title?: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'white' | 'blue';
  noPadding?: boolean;
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
}) => {
  return (
    // contentBox--white
    // contentBox--blue
    <div
      className={classNames({
        row: true,
        [styles.contentBox]: true,
        [styles.contentBoxNoPadding]: noPadding,
        [contentBoxWhite]: variant === 'white',
        [contentBoxBlue]: variant === 'blue',
      })}
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
        <div className={styles.contentBoxDescription}>{children}</div>
        {buttonText && (
          <Button
            href={buttonHref}
            variant={buttonVariant}
            text={buttonText}
            className={classNames(styles.contentBoxBtn, {
              [styles.contentBoxBtnBlue]: variant === 'white',
            })}
          />
        )}
      </Col>
    </div>
  );
};

export default ContentBox;
