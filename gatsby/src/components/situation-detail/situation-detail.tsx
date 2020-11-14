import React from 'react';

import Container from '@/components/container';
import Link from '@/components/link';

import Accordion from '../accordion';
import ContentBox from '../content-box';
import { ISituationDetailFragment } from '@graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import RelatedMeasure from '../related-measure';
import LinkList from '../link-list';
import { useTranslation } from '../i18n';

interface IProps {
  situation: ISituationDetailFragment;
}

const SituationDetail: React.FC<IProps> = ({ situation }) => {
  const relatedSituations = situation.relationships.related_situations;
  const faq = situation.questions_answers;

  const hasFaq = Boolean(faq.length);
  const { t } = useTranslation();
  const hasRelatedLinks = Boolean(situation.links.length);
  const hasRelatedMeasures = Boolean(situation.relationships.measures.length);
  const hasRelatedSituations = Boolean(relatedSituations.length);

  const iconCode =
    situation.relationships?.icon?.code ||
    situation.relationships?.situation_type?.relationships?.icon?.code;

  return (
    <>
      <TopicDetail
        title={situation.title}
        titleIconCode={iconCode}
        processedContent={situation?.content?.processed}
        validFrom={situation?.valid_from}
        validTo={situation?.valid_to}
        region={situation?.relationships?.region}
      >
        {hasRelatedMeasures && (
          <div className="mt-2">
            <hr />
            <h3 className="mb-1 color-blue-dark">{t('related_measures')}</h3>
            {situation.relationships.measures.map((measure) => (
              <RelatedMeasure key={measure.path.alias} measure={measure} />
            ))}
          </div>
        )}
        {hasRelatedLinks && (
          <div className="mt-2">
            <hr />
            <h3 className="mb-1 color-blue-dark">{t('related')}</h3>
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
        )}
      </TopicDetail>
      <Container>
        {hasFaq && (
          <ContentBox variant="blue" title={t('faq')} boldedTitleCount={2}>
            <Accordion
              data={situation.questions_answers.map((item) => ({
                title: item.question,
                text: item.value,
              }))}
            />
          </ContentBox>
        )}
        {hasRelatedSituations && (
          <ContentBox
            title={t('similar_topics')}
            boldedTitleCount={1}
            variant="blue"
          >
            <LinkList links={relatedSituations} />
          </ContentBox>
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
      icon {
        code
      }
      situation_type {
        name
        path {
          alias
        }
        relationships {
          icon {
            code
          }
        }
      }
      measures {
        ...RelatedMeasure
      }
      related_situations {
        title
        path {
          alias
          langcode
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
