import React from 'react';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import { ISituationTypeQueryQuery, ISitePageContext } from '@graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import Layout from '@/layouts/default-layout';

import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';

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
          <ContentBox noPadding>
            {nodes.map(
              (n) =>
                n.relationships.situation !== null && (
                  <CategoryItem
                    key={n.id}
                    name={n.name}
                    path={n.path.alias}
                    iconCode={n.relationships.icon?.code}
                  />
                ),
            )}
          </ContentBox>
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
          icon {
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
