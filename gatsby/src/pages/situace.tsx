import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import LookingForSomething from '@/components/looking-for-something';
import Pagination from '@/components/pagination';
import usePagination from '@/hooks/usePagination';
import { IQuery } from 'graphql-types';

const breadcrumbItems = [
  {
    title: 'domů',
    url: '/',
  },
  {
    title: 'Životní události',
    url: '/situace',
  },
];

interface IProps {
  data: IQuery;
}

const Situations: React.FC<IProps> = ({ data }) => {
  const {
    allArea: { nodes },
  } = data;

  const { slicedItems, ...pagination } = usePagination(nodes);

  return (
    <>
      <Helmet title="Aktuální opatření" />
      <Container className="mt-3">
        <Breadcrumb items={breadcrumbItems} variant="inverse" />
      </Container>
      <Container className="mt-3">
        <Headline>Přehled životních situací</Headline>
      </Container>
      <Container className="mt-3">
        <ContentBox noPadding>
          {slicedItems.map((n) => (
            // todo: add types somehow
            // @ts-ignore
            <CategoryItem key={n.id} name={n.name} path={n.path.alias} />
          ))}
        </ContentBox>
        <Pagination {...pagination} />
      </Container>
      <Container className="mt-3 mb-3">
        <LookingForSomething />
      </Container>
    </>
  );
};
export default Situations;

export const query = graphql`
  query SituationTypeQuery {
    allArea {
      nodes {
        name
        id
        path {
          alias
        }
      }
    }
  }
`;
