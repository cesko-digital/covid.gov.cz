import React, { useMemo } from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Row from '@/components/row';
import Col from '@/components/col';

import styles from './content-box.module.scss';

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
  const boldedTitle = useMemo(() => {
    const splittedTitle: Array<JSX.Element | string> = title.split(/(?= )/g);
    if (boldedTitleCount) {
      return splittedTitle.map((item, index) => {
        if (index < boldedTitleCount) {
          return (
            <span key={index} className={styles.contentBoxTitleBold}>
              {item}
            </span>
          );
        }

        return item;
      });
    }
    return splittedTitle;
  }, [title]);

  return (
    // contentBox--white
    <div
      className={classNames(
        styles.contentBox,
        styles[`contentBox--${variant}`],
        'row',
      )}
    >
      <Col col={12}>
        <h2 className={styles.contentBoxTitle}>{boldedTitle}</h2>
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
