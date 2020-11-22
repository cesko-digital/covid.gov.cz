import React from 'react';
import { graphql } from 'gatsby';
import { ISituationPageQuery, ISitePageContext } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import SituationDetail from '@/components/situation-detail/situation-detail';
import Container from '@/components/container';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import Breadcrumb from '@/components/breadcrumb';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';
import CategoryItemList from '@/components/category-item-list';
import { useTranslation } from '@/components/i18n';

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
    theme: 'blue',
  }));
  const { t } = useTranslation();
  return (
    <Layout pageContext={pageContext} hasTransparentHeader={false}>
      <Seo
        title={data.situation.title}
        description={
          data.situation.meta_description || t('current_measures_overview_meta')
        }
        pagePath={data.situation.path.alias}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        datePublished={
          data.situation.valid_from
            ? data.situation.valid_from
            : data.situation.created
        }
        dateModified={data.situation.changed}
        title={data.situation.title}
        langCode={
          pageContext.langCode ? pageContext.langCode : data.situation.langcode
        }
        isBlogPost
        description={data.situation.meta_description}
        breadcrumbItems={[
          { title: t('home'), url: '/' },
          {
            title: t('life_situations'),
            url: t(`slug_situations`),
          },
          {
            title: data.situation.relationships?.situation_type?.name,
            url: data.situation.relationships?.situation_type?.path?.alias,
          },
          data.situation.title,
        ]}
        questions_answers={data.situation.questions_answers}
      />
      <Container>
        <div className="pt-1 pb-1 pt-md-3 pb-md-3">
          <Breadcrumb
            items={[
              { title: t('home'), url: '/' },
              {
                title: t('life_situations'),
                url: t(`slug_situations`),
              },
              {
                title: data.situation.relationships?.situation_type?.name,
                url: data.situation.relationships?.situation_type?.path?.alias,
              },
              data.situation.title,
            ]}
          />
        </div>
        <DesktopLeftMenuLayout
          theme="blue"
          menu={
            <CategoryItemList
              theme="blue"
              items={relatedSituations}
              linkBack={{
                slug: pageContext.listSlug,
                title: t('life_situations'),
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
      changed
      valid_from
      langcode
      created
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
