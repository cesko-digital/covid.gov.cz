import React from 'react';

import Container from '@/components/container';
import Headline from '@/components/headline';
import Subtitle from '@/components/subtitle';

import styles from './topic-detail.module.scss';

interface IProps {
  title: string;
  processedContent: string;
  subtitle?: string;
}

const TopicDetail: React.FC<IProps> = ({
  title,
  processedContent,
  children,
  subtitle,
}) => {
  return (
    <div className={styles.topicDetail}>
      <Container>
        <div className="mt-3">
          <Headline>{title}</Headline>
        </div>
        <article className="bg-white rounded p-2 pb-3 mb-1">
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <div
            dangerouslySetInnerHTML={{
              __html: processedContent,
            }}
          />
          {children}
        </article>
      </Container>
    </div>
  );
};

export default TopicDetail;
