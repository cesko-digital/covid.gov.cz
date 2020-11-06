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
import I18n from '@/components/i18n';

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
      <Container className="pt-1">
        <Breadcrumb
          items={[
            { title: I18n('home'), url: '/' },
            { title: I18n('current_measures'), url: I18n('slug_measures') },
          ]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3">
        <Headline>Přehled aktuálních opatření</Headline>
      </Container>
      <Container className="mt-3">
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
      <Container className="mt-3 mb-3">
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
