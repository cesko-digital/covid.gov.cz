import React from 'react';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import { ISituationTypeQueryQuery, ISitePageContext } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';

import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';
import CategoryItemList from '@/components/category-item-list';

interface IProps {
  data: ISituationTypeQueryQuery;
  pageContext: ISitePageContext;
}

const Situations: React.FC<IProps> = ({ data, pageContext }) => {
  const {
    allArea: { nodes },
  } = data;

  const collator = new Intl.Collator([pageContext.langCode]);
  nodes.sort((a, b) => collator.compare(a.name, b.name));

  const listItems = nodes
    .filter(({ relationships }) => relationships.situation !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.field_ref_icon?.code,
      isActive: path.alias === pageContext.slug,
    }));

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
          <CategoryItemList items={listItems} />
        </div>
      </Container>
    </Layout>
  );
};

export default Situations;

export const query = graphql`
  query SituationTypeQuery($langCode: String!) {
    allArea(filter: { langcode: { eq: $langCode } }, sort: { fields: name }) {
      nodes {
        name
        id
        path {
          alias
        }
        relationships {
          situation {
            id
          }
          field_ref_icon {
            code
          }
        }
      }
    }
    searchingTitle: translation(
      langcode: { eq: $langCode }
      source: { eq: "still_searching_title" }
    ) {
      target
      langcode
    }
    searchingDescription: translation(
      langcode: { eq: $langCode }
      source: { eq: "still_searching_description" }
    ) {
      target
    }
    callTitle: translation(
      langcode: { eq: $langCode }
      source: { eq: "call_title" }
    ) {
      target
    }
    callDescription: translation(
      langcode: { eq: $langCode }
      source: { eq: "call_description" }
    ) {
      target
    }
  }
`;
