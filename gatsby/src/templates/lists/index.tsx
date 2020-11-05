import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import MeasureList from '@/components/measure-list';
import Container from '@/components/container';
import { AlertContainer } from '@/components/alert';
import SituationsBox from '@/components/situations-box';
import I18n from '@/components/i18n';
import { IQuery } from 'graphql-types';
import Layout from '@/layouts/default-layout';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { homepage } = data;
  const {
    situation_label,
    situation_link,
    measure_label,
    measure_link,
    relationships,
  } = homepage;
  const { measure_items, situation_items } = relationships;

  return (
    <Layout>
      <Helmet title="Covid Portál" />
      <AlertContainer />
      <Container className="mt-3">
        <ContentBox
          title={situation_label.processed}
          boldedTitleCount={2}
          buttonText={situation_link?.title}
          buttonHref={I18n('slug_situations')}
        >
          <SituationsBox situations={situation_items} />
        </ContentBox>
        <ContentBox
          title={measure_label.processed}
          boldedTitleCount={1}
          buttonVariant="contained"
          buttonText={measure_link?.title}
          buttonHref={I18n('slug_measures')}
          variant="white"
        >
          <MeasureList measures={measure_items} />
        </ContentBox>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query IndexQuery($langCode: String!) {
    homepage(langcode: { eq: $langCode }) {
      measure_label {
        processed
      }
      measure_link {
        uri
        title
      }
      moderation_state
      measure_text
      situation_label {
        processed
      }
      situation_link {
        uri
        title
      }
      situation_text
      relationships {
        measure_items {
          id
          title
          relationships {
            region {
              name
            }
          }
        }
        situation_items {
          id
          title
          path {
            alias
          }
        }
      }
    }
  }
`;
