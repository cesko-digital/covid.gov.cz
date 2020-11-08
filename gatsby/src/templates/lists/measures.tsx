import React from 'react';
import { graphql, navigate } from 'gatsby';
import Container from '@/components/container';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { IMeasureTypeQueryQuery, ISitePageContext } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';
import { MeasureAreaList } from '@/components/category-item-list';
import { useNavigateToFirstItemOnDesktop } from '@/hooks/useNavigateToFirstItem';

interface IProps {
  data: IMeasureTypeQueryQuery;
  pageContext: ISitePageContext;
}

const Measures: React.FC<IProps> = ({ data, pageContext }) => {
  useNavigateToFirstItemOnDesktop(
    data.allTaxonomyTermMeasureType.nodes,
    pageContext.langCode,
  );
  // todo add meta description
  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={I18n('current_measures_overview')}
        description={I18n('current_measures_overview_meta')}
        pagePath={I18n('slug_measures')}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        url={'https://covid.gov.cz' + I18n('slug_measures')}
        langCode={pageContext.langCode}
        description={I18n('current_measures_overview_meta')}
        isBlogPost={false}
        title={I18n('current_measures_overview')}
      />
      <Container className="pt-1">
        <Breadcrumb
          items={[
            { title: I18n('home'), url: '/' },
            { title: I18n('current_measures'), url: I18n('slug_measures') },
          ]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3 d-block d-sm-none">
        <Headline>{I18n('current_measures_overview')}</Headline>
      </Container>
      <Container className="mt-3">
        <MeasureAreaList data={data.allTaxonomyTermMeasureType.nodes} />
      </Container>
    </Layout>
  );
};
export default Measures;

export const query = graphql`
  query MeasureTypeQuery($langCode: String!) {
    allMeasureType(filter: { langcode: { eq: $langCode } }) {
      nodes {
        ...MeasureArea
      }
    }
  }
`;
