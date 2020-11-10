import React from 'react';
import { graphql } from 'gatsby';
import { IMeasurePageQueryQuery, ISitePageContext } from '@graphql-types';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';
import MeasureDetail from '@/components/measure-detail';

interface IProps {
  data: IMeasurePageQueryQuery;
  pageContext: ISitePageContext;
}

const Page: React.FC<IProps> = ({ data, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={data.measure.title}
        description={
          data.measure.meta_description ||
          I18n('current_measures_overview_meta')
        }
        pagePath={data.measure.path.alias}
        htmlLanguage={data.measure.langcode}
      />
      <SchemaComp
        datePublished={data.measure.valid_from}
        dateModified={data.measure.changed}
        title={data.measure.title}
        langCode={data.measure.langcode}
        isBlogPost
        body={
          data.measure.content
            ? data.measure.content.processed
            : data.measure.meta_description
        }
        description={data.measure.meta_description}
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          {
            title: I18n('current_measures'),
            url: I18n(`slug_measures`),
          },
          {
            title: data.measure.relationships?.situation_type?.name,
            url: data.measure.relationships?.situation_type?.path?.alias,
          },
          data.measure.title,
        ]}
      />
      <MeasureDetail measure={data.measure} />
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query MeasurePageQuery($slug: String!) {
    measure(path: { alias: { eq: $slug } }) {
      title
      meta_description
      content: description {
        processed
      }
      path {
        alias
      }
      langcode
      valid_from
      ...MeasureDetail
    }
  }
`;
