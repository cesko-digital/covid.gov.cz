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
        title={data.situation.title}
        description={
          data.situation.meta_description ||
          I18n('current_measures_overview_meta')
        }
        pagePath={data.situation.path.alias}
        htmlLanguage={data.situation.langcode}
      />
      <SchemaComp
        canonicalUrl={'https://covid.gov.cz' + data.situation.path.alias}
        datePublished={data.situation.valid_from}
        defaultTitle={data.situation.title}
        isBlogPost
        description={data.situation.meta_description}
        body={data.situation.content.processed}
        title={data.situation.title}
        url={'https://covid.gov.cz' + data.situation.path.alias}
        organization={{
          url: 'https://gov.cz',
          name: 'Portál veřejné správy',
        }}
      />
      <SituationDetail situation={data.situation} type="situation" />
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query($slug: String!) {
    situation(path: { alias: { eq: $slug } }) {
      title
      status
      meta_description
      content {
        processed
      }
      questions_answers {
        question
        value
      }
      links {
        uri
        title
      }
      relationships {
        region {
          name
        }
        situation_type {
          name
          path {
            alias
          }
        }
        related_situations {
          title
        }
      }
      path {
        alias
      }
      changed(formatString: "D. M. YYYY HH:mm")
      valid_from(formatString: "D. M. YYYY")
      valid_to(formatString: "D. M. YYYY")
    }
  }
`;
