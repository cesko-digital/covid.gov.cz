import React, { useMemo } from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Row from '@/components/row';
import Col from '@/components/col';

import styles from './content-box.module.scss';
import { Link } from 'gatsby';

interface Props {
  title?: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  buttonHref?: string;
  variant?: string;
  noPadding?: boolean;
}

const ContentBox: React.FC<Props> = ({
  children,
  title,
  boldedTitleCount,
  description,
  buttonVariant,
  buttonText,
  buttonHref,
  variant = '',
  noPadding,
}) => {
  const boldedTitle = useMemo(() => {
    const splittedTitle: Array<JSX.Element | string> = title?.split(/(?= )/g);
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
    // contentBox--blue
    <div
      className={classNames(
        styles.contentBox,
        styles[`contentBox--${variant}`],
        noPadding && styles.contentBoxNoPadding,
        'row',
      )}
    >
      <Col col={12}>
        {boldedTitle && (
          <h2 className={styles.contentBoxTitle}>{boldedTitle}</h2>
        )}
        {description && (
          <p className={styles.contentBoxDescription}>{description}</p>
        )}
        {children}
        {buttonText && (
          <Link to={buttonHref}>
            <Button
              variant={buttonVariant}
              text={buttonText}
              className={styles.contentBoxButton}
            />
          </Link>
        )}
      </Col>
    </div>
  );
};

export default ContentBox;
