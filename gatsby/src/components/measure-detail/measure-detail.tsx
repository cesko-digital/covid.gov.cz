import React from 'react';

import { Room, Event } from '@material-ui/icons';

import Time from '@/components/time';
import I18n from '@/components/i18n';

import { IMeasureDetailFragment } from 'graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';

interface IProps {
  measure: IMeasureDetailFragment;
}

const MeasureDetail: React.FC<IProps> = ({ measure }) => {
  return (
    <TopicDetail
      breadcrumbItems={[
        { title: I18n('home'), url: '/' },
        {
          title: I18n('current_measures'),
          url: I18n(`slug_measures`),
        },
        {
          title: measure.relationships?.situation_type?.name,
          url: measure.relationships?.situation_type?.path?.alias,
        },
        measure.title,
      ]}
      title={measure.title}
      subtitle={measure.norm}
      processedContent={measure?.content?.processed}
    >
      {measure.relationships.region.length ? (
        <div className="mt-2">
          <h3 className="mb-1 color-blue-dark">{I18n('location_validity')}</h3>
          <div className="d-flex align-items-center color-blue mb-1">
            <Room />
            &nbsp;
            <span className="text-uppercase font-weight-medium">
              {measure.relationships.region.map((item) => item.name).join(', ')}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}

      {measure.valid_from || measure.valid_to ? (
        <div className="d-flex align-items-center color-blue">
          <Event />
          &nbsp;
          <span className="text-uppercase font-weight-medium">
            {measure.valid_from && (
              <Time datetime={measure.valid_from} prefix={`${I18n('from')} `} />
            )}

            {measure.valid_to && (
              <Time datetime={measure.valid_to} prefix={`${I18n('to')} `} />
            )}
          </span>
        </div>
      ) : (
        ''
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
    links: source {
      uri
      title
    }
    relationships {
      region {
        name
      }
      situation_type: field_measure_type {
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
