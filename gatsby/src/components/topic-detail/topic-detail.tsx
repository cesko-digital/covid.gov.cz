import React from 'react';

import Headline from '@/components/headline';
import Subtitle from '@/components/subtitle';

import styles from './topic-detail.module.scss';
import { RegionsMarker, TimeMarker } from '../marker';
import { IRegion } from '../../../graphql-types';

interface IProps {
  title: string;
  titleIconCode?: string;
  processedContent: string;
  subtitle?: string;
  validFrom?: string;
  validTo?: string;
  region?: Pick<IRegion, 'name'>[];
}

const TopicDetail: React.FC<IProps> = ({
  title,
  titleIconCode,
  processedContent,
  children,
  subtitle,
  validFrom,
  validTo,
  region,
}) => {
  const hasRegion = Boolean(region?.length);
  const hasTimeConstraint = Boolean(validFrom || validTo);

  return (
    <div className={styles.topicDetail}>
      <Headline iconCode={titleIconCode}>{title}</Headline>
      <article className="bg-white rounded px-2 pb-2 px-md-3 pb-md-3 pt-md-0 pt-2 mb-1">
        <hr className="mt-0 mb-2 d-none d-md-block" />
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{
            __html: processedContent,
          }}
        />
        <div className="my-md-3">
          {hasRegion && <RegionsMarker regions={region} />}
          {hasTimeConstraint && (
            <TimeMarker displayTime validFrom={validFrom} validTo={validTo} />
          )}
        </div>
        {children}
      </article>
    </div>
  );
};

export default TopicDetail;
