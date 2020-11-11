import React from 'react';

import Headline from '@/components/headline';
import Subtitle from '@/components/subtitle';

import styles from './topic-detail.module.scss';

interface IProps {
  title: string;
  titleIconCode?: string;
  processedContent: string;
  subtitle?: string;
}

const TopicDetail: React.FC<IProps> = ({
  title,
  titleIconCode,
  processedContent,
  children,
  subtitle,
}) => {
  return (
    <div className={styles.topicDetail}>
      <Headline iconCode={titleIconCode}>{title}</Headline>
      <article className="bg-white rounded p-2 p-md-3 pb-3 mb-1">
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <div
          dangerouslySetInnerHTML={{
            __html: processedContent,
          }}
        />
        {children}
      </article>
    </div>
  );
};

export default TopicDetail;
