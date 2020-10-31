import React from 'react';
import { graphql } from 'gatsby';
import Hello from '@/components/hello/hello';
import ContentBox from '@/components/content-box';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';

interface Data {

}

interface Props {
  data: any;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Helmet title="Index Page" />
      <Hello />
      <ContentBox
        title="Aktuální opatření (72)"
        boldedTitleCount={1}
        description="Všechna současná nařízení vlády, jejich detail, platnost a jednoduché vysvětlení"
        buttonText="Zobrazit všech 72 nařízení"
      >
        <MeasureList
          measures={data.latestMeasures.relationships.measures}
        />
      </ContentBox>
      <ContentBox
        title="Životní situace s covidem"
        boldedTitleCount={2}
        description="Detailní informace v souvislosti s Covidem v běžném životě"
        buttonVariant="outline"
        buttonText="Zobrazit všechny životní situace"
      />
      <Link to="/" language="en" className="">
        English Page
      </Link>
    </div>
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
