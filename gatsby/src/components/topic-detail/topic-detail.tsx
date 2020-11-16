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
  lastUpdated,
  subtitle,
}) => (
  <div className={styles.topicDetail}>
    <Headline iconCode={titleIconCode}>{title}</Headline>
    <LastUpdate isMobile={false} lastUpdated={lastUpdated} />
    <article className="bg-white rounded px-2 pb-2 px-md-3 pb-md-3 pt-md-0 pt-2">
      <hr className="mt-0 mb-2 d-none d-md-block" />
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <div
        className={styles.article}
        dangerouslySetInnerHTML={{
          __html: processedContent,
        }}
      />
    </article>
  </div>
);

export default TopicDetail;
