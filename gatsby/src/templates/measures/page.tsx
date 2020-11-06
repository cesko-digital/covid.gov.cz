import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import SituationDetail from '@/components/situation-detail';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
}

const Page: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
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
        canonicalUrl={'https://covid.gov.cz' + data.measure.path.alias}
        datePublished={data.measure.valid_from}
        defaultTitle={data.measure.title}
        isBlogPost
        body={
          (data.measure as any).content!.processed ||
          data.measure.meta_description
        }
        description={data.measure.meta_description}
        title={data.measure.title}
        url={'https://covid.gov.cz' + data.measure.path.alias}
        organization={{
          url: 'https://gov.cz',
          name: 'Portál veřejné správy',
        }}
      />
      <SituationDetail situation={data.measure} type="measure" />
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query($slug: String!) {
    measure(path: { alias: { eq: $slug } }) {
      title
      status
      content: description {
        processed
      }
      links: source {
        uri
        title
      }
      relationships {
        region {
          name
        }
        situation_type: field_measure_type {
          name
          path {
            alias
          }
        }
        related_situations: situation {
          title
        }
      }
      path {
        alias
      }
      langcode
      changed(formatString: "D. MMMM YYYY HH:mm")
      valid_from(formatString: "D. M. YYYY")
      valid_to(formatString: "D. M. YYYY")
    }
  }
`;
