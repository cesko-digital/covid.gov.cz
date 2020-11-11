import React from 'react';
import { graphql } from 'gatsby';
import { IMeasurePageQuery, ISitePageContext } from 'graphql-types';
import { SchemaComp } from '@/components/schema/schema';
import { SEO as Seo } from 'gatsby-plugin-seo';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';
import MeasureDetail from '@/components/measure-detail';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';
import CategoryItemList from '@/components/category-item-list';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
interface IProps {
  data: IMeasurePageQuery;
  pageContext: ISitePageContext;
}

const Page: React.FC<IProps> = ({ data, pageContext }) => {
  const relatedMeasures: React.ComponentProps<
    typeof CategoryItemList
  >['items'] = data.measureType.relationships.measure.map((measure) => ({
    id: measure.id,
    name: measure.title,
    path: measure.path.alias,
    isActive: measure.path.alias === pageContext.slug,
  }));

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
                title: data.measure.relationships?.measure_type?.name,
                url: data.measure.relationships?.measure_type?.path?.alias,
              },
              data.measure.title,
            ]}
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={
            <CategoryItemList
              items={relatedMeasures}
              linkBack={{
                slug: pageContext.listSlug,
                title: I18n('current_measures'),
              }}
              title={data.measureType.name}
              titleIconCode={data.measureType?.relationships?.icon?.code}
            />
          }
          hideMenuOnMobile
        >
          <MeasureDetail measure={data.measure} />
        </DesktopLeftMenuLayout>
      </Container>
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query MeasurePage($slug: String!, $listSlug: String!) {
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
      relationships {
        region {
          name
        }
        measure_type {
          name
          path {
            alias
          }
        }
        related_situations: situation {
          title
        }
      }
      ...MeasureDetail
    }
    measureType(path: { alias: { eq: $listSlug } }) {
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
          title
          path {
            alias
          }
        }
      }
    }
  }
`;
