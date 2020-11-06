import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import Container from '@/components/container';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import ContentBox from '@/components/content-box';
import Pagination from '@/components/pagination';
import usePagination from '@/hooks/usePagination';
import SituationListItem from '@/components/situation-list-item';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { area } = data;

  const situations = area.relationships?.situation ?? [];

  const { slicedItems, ...pagination } = usePagination(situations);

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
              title: 'Životní události',
              url: '/opatreni',
            },
            {
              title: area.name,
              url: area.path.alias,
            },
          ]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3">
        <Headline>{area.name}</Headline>
      </Container>
      <Container className="mt-3">
        {slicedItems.map((s) => (
          <ContentBox key={`situation-list-item-${s.id}`} variant="white">
            <SituationListItem
              title={s.title}
              description={s.meta_description}
              link={s.path.alias}
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
  query($slug: String!) {
    area(path: { alias: { eq: $slug } }) {
      name
      relationships {
        situation {
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
