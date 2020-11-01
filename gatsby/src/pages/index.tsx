import React from 'react';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';
import SearchBox from '@/components/search-box';
import Row from '@/components/row';
import Container from '@/components/container';
import Alert from '@/components/alert';
import SituationsBox from '@/components/situations-box';

interface Data {}

interface Props {
  data: any;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Container>
        <Helmet title="Index Page" />
        <Row>
          <SearchBox />
        </Row>
      </Container>
      <Alert />
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
          <MeasureList measures={data.latestMeasures.relationships.measures} />
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
  query {
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
