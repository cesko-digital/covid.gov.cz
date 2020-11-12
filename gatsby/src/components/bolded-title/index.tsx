import React from 'react';
import styles from './bolded-title.module.scss';
export interface BoldedTitleProps {
  title: string;
  count?: number;
}

/* global JSX */
export const BoldedTitle: React.FC<BoldedTitleProps> = ({ title, count }) => {
  const splittedTitle: Array<JSX.Element | string> = title.split(/(?= )/g);
  return (
    <>
      {count
        ? splittedTitle.map((item, index) => {
            if (index < count) {
              return (
                <span key={index} className={styles.boldedTitle}>
                  {item}
                </span>
              );
            }

            return item;
          })
        : splittedTitle}
    </>
  );
};
