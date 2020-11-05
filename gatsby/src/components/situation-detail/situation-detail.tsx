import React from 'react';

import MdIcon from '@/components/md-icon';

import Container from '@/components/container';
import Link from '@/components/link';

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

const data = [
  {
    title: 'Co když už mám STK propadlou?',
    text:
      'Nam quis ante id turpis tempus sagittis. Ut id libero quam. Pellentesque cursus nulla ut purus ultrices sagittis. Nam congue vehicula dolor. Aenean varius et est vitae aliquam. Sed scelerisque enim sed facilisis vehicula. Donec eget venenatis tellus.',
  },
  {
    title: 'Musím mít na STK roušku?',
    text:
      'Nam quis ante id turpis tempus sagittis. Ut id libero quam. Pellentesque cursus nulla ut purus ultrices sagittis. Nam congue vehicula dolor. Aenean varius et est vitae aliquam. Sed scelerisque enim sed facilisis vehicula. Donec eget venenatis tellus.',
  },
  {
    title: 'Vivamus tincidunt dolor ',
    text:
      'Nam quis ante id turpis tempus sagittis. Ut id libero quam. Pellentesque cursus nulla ut purus ultrices sagittis. Nam congue vehicula dolor. Aenean varius et est vitae aliquam. Sed scelerisque enim sed facilisis vehicula. Donec eget venenatis tellus.',
  },
];

interface IProps {
  situation: ISituation;
}

const SituationDetail: React.FC<IProps> = ({ situation }) => {
  // TODO: breadcrumb
  return (
    <div className={styles.situationDetail}>
      <Container>
        <h2 className="text-white pt-2">{situation.title}</h2>
        <article className="bg-white rounded p-2 mb-1">
          <div
            dangerouslySetInnerHTML={{
              __html: situation?.content?.processed.replace(/\n/g, '<br/>'),
            }}
          />

          {situation.links.length ? (
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

          {situation.relationships.region.length ? (
            <div className="mt-2">
              <h3 className="mb-1 color-blue-dark">Lokalita a platnost</h3>
              <div className="d-flex align-items-center color-blue">
                <MdIcon icon="room" />
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
              <MdIcon icon="event" />
              &nbsp;
              <span className="text-uppercase font-weight-medium">
                {situation.valid_from ? (
                  <span>Od {situation.valid_from}</span>
                ) : (
                  ''
                )}
                {situation.valid_to ? (
                  <span>Do {situation.valid_to} </span>
                ) : (
                  ''
                )}
              </span>
            </div>
          ) : (
            ''
          )}

          <p className="mt-2 text-muted font-italic">
            Naposledy bylo toto téma aktualizováno {situation.changed}
          </p>
        </article>

        <ContentBox
          variant="blue"
          title="Časté dotazy k tomuto tématu"
          boldedTitleCount={2}
        >
          <Accordion data={data} />
        </ContentBox>
      </Container>
    </div>
  );
};

export default SituationDetail;
