import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import Container from '@/components/container';
import Headline from '@/components/headline';
import ListCard from '@/components/list-card';
import Layout from '@/layouts/default-layout';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { taxonomyTermMeasureType } = data;
  return (
    <Layout>
      <Container>
        <Headline>{taxonomyTermMeasureType.name}</Headline>
        <div>
          {taxonomyTermMeasureType.relationships?.measure?.map(
            ({ id, title, path }) => {
              return (
                <ListCard
                  title={title}
                  key={`taxonomyTermMeasureType-list-item-${id}`}
                  link={path?.alias}
                />
              );
            },
          )}
        </div>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query($slug: String!) {
    taxonomyTermMeasureType(path: { alias: { eq: $slug } }) {
      name
      relationships {
        measure {
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
