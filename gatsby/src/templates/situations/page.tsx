import React from 'react';
import { graphql } from 'gatsby';
import { ISituationPageQuery, ISitePageContext } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import SituationDetail from '@/components/situation-detail/situation-detail';
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
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
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
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={
            <CategoryItemList
              items={relatedSituations}
              linkBack={{
                slug: pageContext.listSlug,
                title: I18n('life_situations'),
              }}
              title={data.situationArea.name}
              titleIconCode={data.situationArea?.relationships?.icon?.code}
            />
          }
          hideMenuOnMobile
        >
          <SituationDetail situation={data.situation} />
        </DesktopLeftMenuLayout>
      </Container>
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query SituationPage($slug: String!, $listSlug: String!, $langCode: String!) {
    situation(path: { alias: { eq: $slug }, langcode: { eq: $langCode } }) {
      title
      meta_description
      content {
        processed
      }
      path {
        alias
      }
      valid_from
      ...SituationDetail
    }
    situationArea: area(path: { alias: { eq: $listSlug } }) {
      name
      path {
        alias
      }
      relationships {
        icon {
          code
        }
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
