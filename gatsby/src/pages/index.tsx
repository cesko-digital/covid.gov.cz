import React from 'react';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';
import SearchBox from '@/components/search-box';
import Row from '@/components/row';
import Container from '@/components/container';
import { AlertContaner } from '@/components/alert';
import SituationsBox from '@/components/situations-box';
import { IHomepage } from 'graphql-types';

interface IQueryResult {
  homepage?: IHomepage;
}

interface IProps {
  data: IQueryResult;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { homepage } = data;
  return (
    <>
      <Container>
        <Helmet title="Index | Covid Portál" />
        <Row>
          <SearchBox />
        </Row>
      </Container>
      <AlertContaner />
      <Container>
        <ContentBox
          title={homepage?.situation_label}
          boldedTitleCount={2}
          buttonVariant="outline"
          buttonText={homepage?.situation_link?.title}
        >
          <SituationsBox />
        </ContentBox>
        <ContentBox
          title={homepage?.measure_label}
          boldedTitleCount={1}
          buttonText={homepage?.measure_link?.title}
        >
          {/* Waiting for measures to be implemented in query */}
          <MeasureList measures={[]} />
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
      measure_text
      situation_label
      situation_link {
        uri
        title
      }
      situation_text
    }
  }
`;
