import React from 'react';

import { Room, Event } from '@material-ui/icons';

import Container from '@/components/container';
import Link from '@/components/link';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import I18n from '@/components/i18n';

import styles from './situation-detail.module.scss';
import Accordion from '../accordion';
import ContentBox from '../content-box';
import { ISituation } from '../../../graphql-types';

interface Region {
  name: string;
}

interface Link {
  uri: string;
  title?: string;
}

interface IProps {
  situation: ISituation;
  type: string;
}

const SituationDetail: React.FC<IProps> = ({ situation, type }) => {
  return (
    <div className={styles.situationDetail}>
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              {
                title: I18n(
                  type === 'measure' ? 'current_measures' : 'life_situations',
                ),
                url: I18n(`slug_${type}s`),
              },
              {
                title: situation.relationships?.situation_type?.name,
                url: situation.relationships?.situation_type?.path?.alias,
              },
              situation.title,
            ]}
            variant="inverse"
          />
        </div>
        <div className="mt-3">
          <Headline>{situation.title}</Headline>
        </div>
        <article className="bg-white rounded p-2 pb-3 mb-1">
          <div
            dangerouslySetInnerHTML={{
              __html: situation?.content?.processed,
            }}
          />

          {situation.links?.length ? (
            <div className="mt-1">
              <h3 className="mb-1 color-blue-dark">
                Související odkazy a zdroje
              </h3>
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
              <h3 className="mb-1 color-blue-dark">Lokalita a platnost</h3>
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
                {situation.valid_from && `Od ${situation.valid_from} `}
                {situation.valid_to && `Do ${situation.valid_to}`}
              </span>
            </div>
          ) : (
            ''
          )}

          {/* <p className="mt-2 text-muted font-italic">
            Naposledy bylo toto téma aktualizováno {situation.changed}
          </p> */}
        </article>

        {situation.questions_answers?.length ? (
          // TODO: localize
          <ContentBox
            variant="blue"
            title="Časté dotazy k tomuto tématu"
            boldedTitleCount={2}
          >
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
    </div>
  );
};

export default SituationDetail;
