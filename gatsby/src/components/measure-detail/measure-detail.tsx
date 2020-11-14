import React from 'react';

import Link from '@/components/link';

import { IMeasureDetailFragment } from '@graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import { useTranslation } from '../i18n';
import { RegionsMarker, TimeMarker } from '../marker';

interface IProps {
  measure: IMeasureDetailFragment;
}

const MeasureDetail: React.FC<IProps> = ({ measure }) => {
  const { t } = useTranslation();
  const hasSourceLink = Boolean(measure.source);
  const hasRegion = Boolean(measure?.relationships?.region?.length);
  const hasTimeConstraint = Boolean(measure?.valid_from || measure?.valid_to);

  return (
    <>
      <TopicDetail
        title={measure.title}
        subtitle={measure.norm}
        processedContent={measure?.content?.processed}
      />
      <div className="bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3">
        {hasRegion && (
          <RegionsMarker regions={measure?.relationships?.region} />
        )}
        {hasTimeConstraint && (
          <TimeMarker
            displayTime
            validFrom={measure?.valid_from}
            validTo={measure?.valid_to}
          />
        )}
        {hasSourceLink && (
          <div className="pt-2">
            <hr />
            <h3 className="mb-1 color-blue-dark">{t('related')}</h3>
            <div>
              <Link className="color-blue mb-1" to={measure.source.uri}>
                {measure.source.title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
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
