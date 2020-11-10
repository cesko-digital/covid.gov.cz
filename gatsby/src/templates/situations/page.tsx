import React from 'react';
import { graphql } from 'gatsby';
import { IQuery, ISitePageContext } from '@graphql-types';
import Layout from '@/layouts/default-layout';
import SituationDetail from '@/components/situation-detail/situation-detail';
import ContentBox from '@/components/content-box';
import LinkList from '@/components/link-list';
import Container from '@/components/container';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
  pageContext: ISitePageContext;
}

const Page: React.FC<IProps> = ({ data, pageContext }) => {
  const linksData = data.situation.relationships.related_situations;
  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={data.situation.title}
        description={
          data.situation.meta_description ||
          I18n('current_measures_overview_meta')
        }
        pagePath={data.situation.path.alias}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        datePublished={data.situation.valid_from}
        dateModified={data.situation.changed}
        title={data.situation.title}
        langCode={pageContext.langCode}
        isBlogPost
        body={
          data.situation.content
            ? data.situation.content.processed
            : data.situation.meta_description
        }
        description={data.situation.meta_description}
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          {
            title: I18n('life_situations'),
            url: I18n(`slug_situations`),
          },
          {
            title: data.situation.relationships?.situation_type?.name,
            url: data.situation.relationships?.situation_type?.path?.alias,
          },
          data.situation.title,
        ]}
      />
      <SituationDetail situation={data.situation} />
      <Container className="pt-1">
        {/* hide this box if no relevant topics exist */}
        {linksData.length > 0 ? (
          <ContentBox
            title={I18n('similar_topics')}
            boldedTitleCount={1}
            variant="blue"
          >
            <LinkList links={linksData} />
          </ContentBox>
        ) : (
          ''
        )}
      </Container>
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query($slug: String!) {
    situation(path: { alias: { eq: $slug } }) {
      title
      meta_description
      content {
        processed
      }
      questions_answers {
        question
        value
      }
      relationships {
        related_situations {
          title
          path {
            alias
            langcode
          }
        }
      }
      path {
        alias
      }
      changed
      valid_from
      ...SituationDetail
    }
  }
`;
