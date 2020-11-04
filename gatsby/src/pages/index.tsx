import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';
import Container from '@/components/container';
import { Alert } from '@/components/alert';
import SituationsBox from '@/components/situations-box';
import { IQuery } from 'graphql-types';

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
    <>
      <Helmet title="Index Page" />
      <Alert />
      <Container>
        <ContentBox
          title={situation_label}
          boldedTitleCount={2}
          buttonVariant="outline"
          buttonText={situation_link?.title}
        >
          <SituationsBox situations={situation_items} />
        </ContentBox>
        <ContentBox
          title={measure_label}
          boldedTitleCount={1}
          buttonText={measure_link?.title}
        >
          <MeasureList measures={measure_items} />
        </ContentBox>
        <Link to="/" language="en" className="">
          English Page
        </Link>
      </Container>
    </>
  );
};
export default Home;

export const query = graphql`
  query IndexQuery {
    homepage {
      measure_label
      measure_link {
        uri
        title
      }
      moderation_state
      measure_text
      situation_label
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
