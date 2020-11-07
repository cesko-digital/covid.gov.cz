import React from 'react';

import { Room, Event } from '@material-ui/icons';

import Container from '@/components/container';
import Link from '@/components/link';
import Time from '@/components/time';
import I18n from '@/components/i18n';

import Accordion from '../accordion';
import ContentBox from '../content-box';
import { ISituationDetailFragment } from 'graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';

interface IProps {
  situation: ISituationDetailFragment;
}

const SituationDetail: React.FC<IProps> = ({ situation }) => {
  return (
    <>
      <TopicDetail
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          {
            title: I18n('life_situations'),
            url: I18n(`slug_situations`),
          },
          {
            title: situation.relationships?.situation_type?.name,
            url: situation.relationships?.situation_type?.path?.alias,
          },
          situation.title,
        ]}
        title={situation.title}
        processedContent={situation?.content?.processed}
      >
        {situation.links.length ? (
          <div className="mt-2">
            <h3 className="mb-1 color-blue-dark">{I18n('related')}</h3>
            <div>
              {situation.links.map((link, index) => (
                <div key={index}>
                  <Link className="color-blue mb-1" to={link.uri}>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}

        {situation.relationships?.region.length ? (
          <div className="mt-2">
            <h3 className="mb-1 color-blue-dark">
              {I18n('location_validity')}
            </h3>
            <div className="d-flex align-items-center color-blue mb-1">
              <Room />
              &nbsp;
              <span className="text-uppercase font-weight-medium">
                {situation.relationships.region
                  .map((item) => item.name)
                  .join(', ')}
              </span>
            </div>
          </div>
        ) : (
          ''
        )}

        {situation.valid_from || situation.valid_to ? (
          <div className="d-flex align-items-center color-blue">
            <Event />
            &nbsp;
            <span className="text-uppercase font-weight-medium">
              {situation.valid_from && (
                <Time
                  datetime={situation.valid_from}
                  prefix={`${I18n('from')} `}
                />
              )}

              {situation.valid_to && (
                <Time datetime={situation.valid_to} prefix={`${I18n('to')} `} />
              )}
            </span>
          </div>
        ) : (
          ''
        )}
      </TopicDetail>
      <Container>
        {situation.questions_answers?.length ? (
          // TODO: localize
          <ContentBox variant="blue" title={I18n('faq')} boldedTitleCount={2}>
            <Accordion
              data={situation.questions_answers.map((item) => ({
                title: item.question,
                text: item.value,
              }))}
            />
          </ContentBox>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export const query = graphql`
  fragment SituationDetail on situation {
    title
    content {
      processed
    }
    links {
      uri
      title
    }
    relationships {
      region {
        name
      }
      situation_type {
        name
        path {
          alias
        }
      }
    }
    path {
      alias
    }
    questions_answers {
      question
      value
    }
    changed
    valid_from
    valid_to
  }
`;

export default SituationDetail;
