import React from 'react';
import { graphql } from 'gatsby';
import { IArea } from 'graphql-types';
import Container from '@/components/container';
import Headline from '@/components/headline';
import ListCard from '@/components/list-card';

interface IQueryResult {
  area?: IArea;
}

interface IProps {
  data: IQueryResult;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { area } = data;
  return (
    <>
      <Container>
        <Headline>{area.name}</Headline>
        <div>
          {area.relationships.situation.map((item, index) => {
            return (
              <ListCard title={item.title} key={index} link={item.path.alias} />
            );
          })}
        </div>
      </Container>
    </>
  );
};
export default Home;

export const query = graphql`
  query($slug: String!) {
    area(path: { alias: { eq: $slug } }) {
      name
      relationships {
        situation {
          title
          path {
            alias
          }
        }
      }
    }
  }
`;
