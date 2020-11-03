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
import { ILatest_Measures } from 'graphql-types';

interface IQueryResult {
  latestMeasures?: ILatest_Measures;
}

interface IProps {
  data: IQueryResult;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { latestMeasures } = data;
  return (
    <>
      <Container>
        <Helmet title="Index Page" />
        <Row>
          <SearchBox />
        </Row>
      </Container>
      <AlertContaner />
      <Container>
        <ContentBox
          title="Životní situace"
          boldedTitleCount={2}
          buttonVariant="outline"
          buttonText="Zobrazit všechny životní situace"
        >
          <SituationsBox />
        </ContentBox>
        <ContentBox
          title="Aktuální opatření"
          boldedTitleCount={1}
          buttonText="Zobrazit všechna opatření"
        >
          <MeasureList measures={latestMeasures.relationships.measures} />
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
    latestMeasures {
      relationships {
        measures {
          title
          id
          relationships {
            region {
              name
            }
          }
        }
      }
    }
  }
`;
