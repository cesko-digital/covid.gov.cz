import React, { useMemo } from 'react';
import Button, { ButtonVariant } from '@/components/button';

import styles from './content-box.module.scss';

interface Props {
  title: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText: string;
}

const ContentBox: React.FC<Props> = ({
  children,
  title,
  boldedTitleCount,
  description,
  buttonVariant,
  buttonText,
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
    <div className={styles.contentBox}>
      <h2 className={styles.contentBoxTitle}>{boldedTitle}</h2>
      {description && (
        <p className={styles.contentBoxDescription}>{description}</p>
      )}
      {children}
      <Button
        variant={buttonVariant}
        text={buttonText}
        className={styles.contentBoxButton}
      />
    </div>
  );
};

export default ContentBox;
