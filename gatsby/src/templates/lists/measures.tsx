import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import { IQuery } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import LookingForSomething from '@/components/looking-for-something';
import Pagination from '@/components/pagination';
import usePagination from '@/hooks/usePagination';
import Layout from '@/layouts/default-layout';
import BgImg from '@/components/bg-img';

const breadcrumbItems = [
  {
    title: 'domů',
    url: '/',
  },
  {
    title: 'aktuální opatření',
    url: '/opatreni',
  },
];

interface IProps {
  data: IQuery;
}

const Measures: React.FC<IProps> = ({ data }) => {
  const {
    allTaxonomyTermMeasureType: { nodes },
  } = data;

  const { slicedItems, ...pagination } = usePagination(nodes);

  return (
    <Layout>
      <Helmet title="Aktuální opatření" />
      <BgImg>
        <Container className="pt-3">
          <Breadcrumb items={breadcrumbItems} variant="inverse" />
        </Container>
        <Container className="mt-3">
          <Headline>Přehled aktuálních opatření</Headline>
        </Container>
      </BgImg>
      {slicedItems.length > 0 ? (
        // I added condition to hide empty box - it looked weird
        // but in this case we should later provide empty state, too. It assures her that it is right place, and there's no need to look for that info elsewhere
        <Container>
          <ContentBox noPadding>
            {slicedItems.map(
              (n) =>
                n.relationships.measure !== null && (
                  <CategoryItem key={n.id} name={n.name} path={n.path.alias} />
                ),
            )}
          </ContentBox>
          <Pagination {...pagination} />
        </Container>
      ) : (
        ''
      )}
      <Container className="mb-3">
        <LookingForSomething />
      </Container>
    </Layout>
  );
};
export default Measures;

export const query = graphql`
  query MeasureTypeQuery($langCode: String!) {
    allTaxonomyTermMeasureType(
      filter: { langcode: { eq: $langCode } }
      sort: { fields: name }
    ) {
      nodes {
        id
        name
        path {
          alias
        }
        relationships {
          measure {
            id
          }
        }
      }
    }
  }
`;
