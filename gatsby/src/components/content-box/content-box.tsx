import React, { useMemo } from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Row from '@/components/row';
import Col from '@/components/col';

import styles from './content-box.module.scss';
import { BoldedTitle } from '../bolded-title';

interface Props {
  title: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  variant: string;
}

const ContentBox: React.FC<Props> = ({
  children,
  title,
  boldedTitleCount,
  description,
  buttonVariant,
  buttonText,
  variant,
}) => {
  return (
    // contentBox--white
    // contentBox--blue
    <div
      className={classNames(
        styles.contentBox,
        styles[`contentBox--${variant}`],
        'row',
      )}
    >
      <Col col={12}>
        <h2 className={styles.contentBoxTitle}>
          <BoldedTitle title={title} count={boldedTitleCount} />
        </h2>
        {description && (
          <p className={styles.contentBoxDescription}>{description}</p>
        )}
        {children}
        {buttonText && (
          <Button
            variant={buttonVariant}
            text={buttonText}
            className={styles.contentBoxButton}
          />
        )}
      </Col>
    </div>
  );
};

export default ContentBox;
