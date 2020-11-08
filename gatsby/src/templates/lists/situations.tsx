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
  // todo: add meta description
  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={I18n('life_situations')}
        description={I18n('situations_overview_meta')}
        pagePath={I18n('slug_situations')}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        url={'https://covid.gov.cz' + I18n('slug_situations')}
        langCode={pageContext.langCode}
        description={I18n('current_situations_overview_meta')}
        isBlogPost={false}
        title={I18n('life_situations')}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              { title: I18n('life_situations'), url: I18n('slug_situations') },
            ]}
            variant="inverse"
          />
        </div>
        <div className="mt-3">
          <Headline>{I18n('situations_overview')}</Headline>
        </div>
        <div className="mt-3">
          <SituationAreaList data={data.allSituationAreas.nodes} />
        </div>
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
