import React from 'react';
import { graphql } from 'gatsby';
import { ISituationPageQuery, ISitePageContext } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import SituationDetail from '@/components/situation-detail/situation-detail';
import ContentBox from '@/components/content-box';
import LinkList from '@/components/link-list';
import Container from '@/components/container';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import I18n from '@/components/i18n';
import Breadcrumb from '@/components/breadcrumb';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';
import CategoryItemList from '@/components/category-item-list';

interface IProps {
  data: ISituationPageQuery;
  pageContext: ISitePageContext;
}

const Page: React.FC<IProps> = ({ data, pageContext }) => {
  const linksData = data.situation.relationships.related_situations;
  const relatedSituations: React.ComponentProps<
    typeof CategoryItemList
  >['items'] = data.situationArea.relationships.situation.map((situation) => ({
    id: situation.id,
    name: situation.title,
    path: situation.path.alias,
    isActive: situation.path.alias === pageContext.slug,
  }));
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
        url={'https://covid.gov.cz' + data.situation.path.alias}
        datePublished={data.situation.valid_from}
        title={data.situation.title}
        langCode={pageContext.langCode}
        isBlogPost
        body={
          data.situation.content
            ? data.situation.content.processed
            : data.situation.meta_description
        }
        description={data.situation.meta_description}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              {
                title: I18n('current_measures'),
                url: I18n(`slug_measures`),
              },
              {
                title: data.situation.relationships?.situation_type?.name,
                url: data.situation.relationships?.situation_type?.path?.alias,
              },
              data.situation.title,
            ]}
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={
            <CategoryItemList
              items={relatedSituations}
              linkBack={{
                slug: I18n('slug_situations'),
                title: I18n('life_situations'),
              }}
              title={data.situationArea.name}
            />
          }
          hideMenuOnMobile
        >
          <SituationDetail situation={data.situation} />
        </DesktopLeftMenuLayout>
      </Container>

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
  query SituationPage($slug: String!, $listSlug: String!) {
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
    situationArea: area(path: { alias: { eq: $listSlug } }) {
      name
      path {
        alias
      }
      relationships {
        situation {
          id
          title
          path {
            alias
          }
        }
      }
    }
  }
`;
