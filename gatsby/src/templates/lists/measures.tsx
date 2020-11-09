import React from 'react';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { IMeasureTypeQueryQuery, ISitePageContext } from '@/graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';

interface IProps {
  data: IMeasureTypeQueryQuery;
  pageContext: ISitePageContext;
}

const Measures: React.FC<IProps> = ({ data, pageContext }) => {
  const {
    allMeasureType: { nodes },
  } = data;

  const collator = new Intl.Collator([pageContext.langCode]);
  nodes.sort((a, b) => collator.compare(a.name, b.name));

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
      <Container className="mt-3">
        <Headline>{I18n('current_measures_overview')}</Headline>
      </Container>
      <Container className="mt-3">
        <ContentBox noPadding>
          {nodes.map(
            (n) =>
              n.relationships.measure !== null && (
                <CategoryItem
                  key={n.id}
                  name={n.name}
                  path={n.path.alias}
                  iconCode={n.relationships.icon?.code}
                />
              ),
          )}
        </ContentBox>
      </Container>
    </Layout>
  );
};
export default Measures;

export const query = graphql`
  query MeasureTypeQuery($langCode: String!) {
    allMeasureType(
      filter: { langcode: { eq: $langCode } }
      sort: { fields: name }
    ) {
      nodes {
        id
        name
        path {
          alias
        }
        relationships {
          icon {
            code
          }
          measure {
            id
          }
        }
      }
    }
    searchingTitle: translation(
      langcode: { eq: $langCode }
      source: { eq: "still_searching_title" }
    ) {
      langcode
      target
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
