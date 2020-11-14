import React from 'react';

import Link from '@/components/link';

import { IMeasureDetailFragment } from '@graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import { useTranslation } from '../i18n';

interface IProps {
  measure: IMeasureDetailFragment;
}

const MeasureDetail: React.FC<IProps> = ({ measure }) => {
  const { t } = useTranslation();
  const hasSourceLink = Boolean(measure.source);
  return (
    <TopicDetail
      title={measure.title}
      subtitle={measure.norm}
      processedContent={measure?.content?.processed}
      validFrom={measure?.valid_from}
      validTo={measure?.valid_to}
      region={measure?.relationships?.region}
    >
      {hasSourceLink && (
        <div className="mt-2">
          <hr />
          <h3 className="mb-1 color-blue-dark">{t('related')}</h3>
          <div>
            <Link className="color-blue mb-1" to={measure.source.uri}>
              {measure.source.title}
            </Link>
          </div>
        </div>
      )}
    </TopicDetail>
  );
};

export const query = graphql`
  fragment MeasureDetail on measure {
    title
    norm
    content: description {
      processed
    }
    source {
      uri
      title
    }
    relationships {
      region {
        name
      }
      situation_type: measure_type {
        name
        path {
          alias
        }
      }
      related_situations: situation {
        title
      }
    }
    path {
      alias
    }
    changed
    valid_from
    valid_to
  }
`;

export default MeasureDetail;
