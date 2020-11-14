import React from 'react';

import Headline from '@/components/headline';
import Subtitle from '@/components/subtitle';

import styles from './topic-detail.module.scss';
import LastUpdate from '../last-update';
import { Maybe, Scalars } from '../../../graphql-types';

interface IProps {
  title: string;
  titleIconCode?: string;
  processedContent: string;
  lastUpdated: Maybe<Scalars['Date']>;
  subtitle?: string;
}

const TopicDetail: React.FC<IProps> = ({
  title,
  titleIconCode,
  processedContent,
  children,
  lastUpdated,
  subtitle,
}) => {
  return (
    <div className={styles.topicDetail}>
      <Headline iconCode={titleIconCode}>{title}</Headline>
      <LastUpdate lastUpdated={lastUpdated} />
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
