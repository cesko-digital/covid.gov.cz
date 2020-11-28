import React from 'react';
import reactStringReplace from 'react-string-replace';

import Container from '@/components/container';
import Link from '@/components/link';

import Accordion from '../accordion';
import ContentBox from '../content-box';
import { ISituationDetailFragment } from '@graphql-types';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import RelatedMeasure from '../related-measure';
import { useTranslation } from '../i18n';
import LastUpdate from '../last-update';
import { UpdateWarning } from '../update-warning/update-warning';
import Time from '../time';
import RelatedTopics from '../related-topics/related-topics';

interface IProps {
  situation: ISituationDetailFragment;
}

const SituationDetail: React.FC<IProps> = ({ situation }) => {
  const { t } = useTranslation();

  const relatedSituations = situation.relationships.related_situations;
  const faq = situation.questions_answers;

  const hasFaq = Boolean(faq.length);
  const hasRelatedLinks = Boolean(situation.links.length);
  const hasRelatedMeasures = Boolean(situation.relationships.measures.length);
  const hasRelatedSituations = Boolean(relatedSituations.length);
  const hasUpdate = Boolean(situation.update);

  const iconCode =
    situation.relationships?.icon?.code ||
    situation.relationships?.situation_type?.relationships?.icon?.code;

  return (
    <>
      <TopicDetail
        title={situation.title}
        titleIconCode={iconCode}
        lastUpdated={situation?.last_updated}
        processedContent={situation?.content?.processed}
        beforeContent={
          hasUpdate && (
            <UpdateWarning
              className="pb-2"
              variant="info"
              title={reactStringReplace(
                t('situation_valid_from_header').replace(
                  '{pes}',
                  situation.update.pes,
                ),
                '{date}',
                () => (
                  <Time datetime={situation.update.valid_from} />
                ),
              )}
            >
              <div
                dangerouslySetInnerHTML={{ __html: situation.update.processed }}
              />
            </UpdateWarning>
          )
        }
      />
      <div className="bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3">
        {hasRelatedMeasures && (
          <div className="pt-2">
            <hr />
            <h3 className="mb-1 color-blue-dark">{t('related_measures')}</h3>
            {situation.relationships.measures.map((measure) => (
              <RelatedMeasure key={measure.path.alias} measure={measure} />
            ))}
          </div>
        )}
        {hasRelatedLinks && (
          <div className="pt-2">
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
        <LastUpdate isMobile lastUpdated={situation?.last_updated} />
      </div>
      <Container className="px-0 px-md-3">
        <hr />
        {hasRelatedSituations && <RelatedTopics links={relatedSituations} />}
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
    update {
      processed
      valid_from
      pes
    }
    changed
    valid_from
    valid_to
    last_updated
  }
`;

export default SituationDetail;
