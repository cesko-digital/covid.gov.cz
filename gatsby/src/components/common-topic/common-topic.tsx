import React, { useMemo } from 'react';
import classNames from 'classnames';
import Col from '@/components/col';

import styles from './common-topic.module.scss';

interface Props {
  title: string;
  description?: string;
  boldedTitleCount?: number;
}

const CommonTopic: React.FC<Props> = ({
  children,
  title,
  boldedTitleCount,
  description,
}) => {
  const boldedTitle = useMemo(() => {
    const splittedTitle: (JSX.Element | string)[] = title.split(/(?= )/g);
    if (boldedTitleCount) {
      return splittedTitle.map((item, index) => {
        if (index < boldedTitleCount) {
          return (
            <span key={index} className={styles.commonTopicTitleBold}>
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
    <div className={classNames(styles.commonTopic, 'row')}>
      <Col col={12}>
        <h2 className={styles.commonTopicTitle}>{boldedTitle}</h2>
        {description && (
          <p className={styles.commonTopicDescription}>{description}</p>
        )}
        {children}
      </Col>
    </div>
  );
};

export default CommonTopic;
