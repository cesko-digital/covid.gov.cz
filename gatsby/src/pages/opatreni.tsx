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

  return (
    <>
      <Helmet title="Aktuální opatření" />
      <Container className="mt-3">
        <Breadcrumb items={breadcrumbItems} variant="inverse" />
      </Container>
      <Container className="mt-3">
        <Headline>Přehled aktuálních opatření</Headline>
      </Container>
      <Container className="mt-3">
        <ContentBox noPadding>
          {/* TODO: Paging */}
          {nodes.map((n) => (
            <CategoryItem key={n.id} name={n.name} path={n.path.alias} />
          ))}
        </ContentBox>
      </Container>
      <Container className="mt-3 mb-3">
        <LookingForSomething />
      </Container>
    </>
  );
};
export default Measures;

export const query = graphql`
  query MeasureTypeQuery {
    allTaxonomyTermMeasureType {
      nodes {
        id
        name
        path {
          alias
        }
      }
    }
  }
`;
