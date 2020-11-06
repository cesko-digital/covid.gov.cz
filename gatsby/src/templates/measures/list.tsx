import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import Container from '@/components/container';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import usePagination from '@/hooks/usePagination';
import Breadcrumb from '@/components/breadcrumb';
import Pagination from '@/components/pagination';
import ContentBox from '@/components/content-box';
import Measure from '@/components/measure-list/measure';
import validFromTo from '@/utility/validFromTo';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { taxonomyTermMeasureType, allTaxonomyTermMeasureType } = data;

  const measures = taxonomyTermMeasureType.relationships?.measure ?? [];

  const { slicedItems, ...pagination } = usePagination(measures);

  return (
    <Layout>
      <Container className="mt-3">
        <Breadcrumb
          items={[
            {
              // TODO: translate
              title: 'domů',
              url: '/',
            },
            {
              // TODO: translate
              title: 'Aktuální opatření',
              url: '/opatreni',
            },
            {
              title: taxonomyTermMeasureType.name,
              url: taxonomyTermMeasureType.path.alias,
            },
          ]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3">
        <Headline>{taxonomyTermMeasureType.name}</Headline>
      </Container>
      <Container className="mt-3">
        {slicedItems.map((n) => (
          <ContentBox
            key={`taxonomyTermMeasureType-list-item-${n.id}`}
            variant="white"
          >
            <Measure
              title={n.title}
              description={n.meta_description}
              validity={validFromTo(n.valid_from, n.valid_to)}
              link={n.path?.alias}
              area={n.relationships.region[0]?.name}
            />
          </ContentBox>
        ))}
        <Pagination {...pagination} />
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query($slug: String!, $langCode: String!) {
    taxonomyTermMeasureType(path: { alias: { eq: $slug } }) {
      name
      relationships {
        measure {
          id
          title
          norm
          valid_from
          valid_to
          path {
            alias
          }
        }
      }
    }
    allTaxonomyTermMeasureType {
      nodes {
        name
        id
      }
    }
  }
`;
