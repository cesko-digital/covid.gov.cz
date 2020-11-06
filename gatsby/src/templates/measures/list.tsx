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
import I18n from '@/components/i18n';
import { Helmet } from 'react-helmet';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { taxonomyTermMeasureType } = data;

  const measures = taxonomyTermMeasureType.relationships?.measure ?? [];

  const { slicedItems, ...pagination } = usePagination(measures);

  return (
    <Layout>
      <Helmet title={I18n('current_measures')} />
      <Container className="pt-1">
        <Breadcrumb
          items={[
            { title: I18n('home'), url: '/' },
            { title: I18n('current_measures'), url: I18n('slug_measures') },
            taxonomyTermMeasureType.name,
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
              validFrom={n.valid_from}
              validTo={n.valid_to}
              link={n.path?.alias}
              area={taxonomyTermMeasureType.name}
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
    taxonomyTermMeasureType(
      path: { alias: { eq: $slug }, langcode: { eq: $langCode } }
    ) {
      name
      relationships {
        measure {
          id
          title
          meta_description
          valid_from(formatString: "D. M. YYYY")
          valid_to(formatString: "D. M. YYYY")
          path {
            alias
          }
        }
      }
    }
  }
`;
