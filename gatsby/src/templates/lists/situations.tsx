import React from 'react';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import { ISitePageContext, ISituationsAreasListQuery } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';

import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';
import { SituationAreaList } from '@/components/category-item-list';

interface IProps {
  data: ISituationsAreasListQuery;
  pageContext: ISitePageContext;
}

const Situations: React.FC<IProps> = ({ data, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={I18n('life_situations')}
        description={I18n('situations_overview_meta')}
        pagePath={I18n('slug_situations')}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        description={I18n('situations_overview_meta')}
        isBlogPost={false}
        isSpecialList
        title={I18n('life_situations')}
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          { title: I18n('life_situations'), url: I18n('slug_situations') },
        ]}
      />
      <Container className="pt-1">
        <Breadcrumb
          items={[
            { title: I18n('home'), url: '/' },
            { title: I18n('life_situations'), url: I18n('slug_situations') },
          ]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3 d-block d-md-none">
        <Headline>{I18n('situations_overview')}</Headline>
      </Container>
      <Container className="mt-3">
        <SituationAreaList data={data.allSituationAreas.nodes} />
      </Container>
    </Layout>
  );
};

export default Situations;

export const query = graphql`
  query SituationsAreasList($langCode: String!) {
    allSituationAreas: allArea(
      filter: { langcode: { eq: $langCode } }
      sort: { fields: name }
    ) {
      nodes {
        ...SituationArea
      }
    }
  }
`;
