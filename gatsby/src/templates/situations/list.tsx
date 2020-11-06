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
import I18n from '@/components/i18n';
import { Helmet } from 'react-helmet';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { area } = data;

  const situations = area.relationships?.situation ?? [];

  const { slicedItems, ...pagination } = usePagination(situations);

  return (
    <Layout>
      <Helmet title={I18n('life_situations')} />
      <Container className="pt-1">
        <Breadcrumb
          items={[
            { title: I18n('home'), url: '/' },
            {
              title: I18n('life_situations'),
              url: I18n('slug_situations'),
            },
            area.name,
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
  query($slug: String!, $langCode: String!) {
    area(path: { alias: { eq: $slug } }, langcode: { eq: $langCode }) {
      name
      relationships {
        situation {
          id
          title
          meta_description
          path {
            alias
          }
        }
      }
    }
  }
`;
