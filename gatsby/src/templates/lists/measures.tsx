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
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
}

const Measures: React.FC<IProps> = ({ data }) => {
  const {
    allTaxonomyTermMeasureType: { nodes },
  } = data;

  return (
    <Layout>
      <Helmet title={I18n('current_measures')} />
      <Container className="pt-1">
        <Breadcrumb
          items={[{ title: I18n('home'), url: '/' }, I18n('current_measures')]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3">
        <Headline>Přehled aktuálních opatření</Headline>
      </Container>
      <Container className="mt-3">
        <ContentBox noPadding>
          {nodes.map(
            (n) =>
              n.relationships.measure !== null && (
                <CategoryItem key={n.id} name={n.name} path={n.path.alias} />
              ),
          )}
        </ContentBox>
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
