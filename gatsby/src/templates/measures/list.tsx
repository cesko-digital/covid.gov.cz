import React from 'react';
import { graphql } from 'gatsby';
import { IMeasureListQuery, ISitePageContext } from 'graphql-types';
import { SEO as Seo } from 'gatsby-plugin-seo';
import Container from '@/components/container';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import MeasureListCard from '@/components/list-card/measure-list-card';
import SchemaComp from '@/components/schema';
import { MeasureAreaList } from '@/components/category-item-list';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';
import { useTranslation } from '@/components/i18n';

interface IProps {
  pageContext: ISitePageContext;
  data: IMeasureListQuery;
}

const Home: React.FC<IProps> = ({ data, pageContext }) => {
  const { t } = useTranslation();
  const { measureType } = data;
  const measures = measureType.relationships?.measure || [];

  const collator = new Intl.Collator([pageContext.langCode]);
  measures.sort((a, b) => collator.compare(a.title, b.title));

  return (
    <Layout
      pageContext={pageContext}
      hasTransparentHeader={false}
      showSearchInHeader
      showBackgroundImage={false}
    >
      <Seo
        title={measureType.name}
        description={t('current_measures_overview_meta')}
        pagePath={pageContext.slug}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        isBlogPost={false}
        isBlogList
        title={measureType.name}
        description={t('current_measures_overview_meta')}
        breadcrumbItems={[
          { title: t('home'), url: '/' },
          { title: t('current_measures'), url: t('slug_measures') },
          measureType.name,
        ]}
      />
      <Container>
        <div className="pt-1 pb-1 pt-md-3 pb-md-3">
          <Breadcrumb
            items={[
              { title: t('home'), url: '/' },
              { title: t('current_measures'), url: t('slug_measures') },
              measureType.name,
            ]}
          />
        </div>
        <DesktopLeftMenuLayout
          theme="white"
          menu={
            <MeasureAreaList
              theme="white"
              data={data.allMeasureType.nodes}
              currentActiveSlug={pageContext.slug}
            />
          }
          hideMenuOnMobile
        >
          <Headline
            iconCode={data.measureType?.relationships?.icon?.code}
            color="blue"
          >
            {measureType.name}
          </Headline>
          {measures.map((m) => (
            <MeasureListCard
              key={`taxonomyTermMeasureType-list-item-${m.id}`}
              title={m.title}
              description={m.norm}
              link={m.path?.alias}
              validFrom={m.valid_from}
              validTo={m.valid_to}
              area={m.relationships?.region?.map((r) => r.name).join(', ')}
              areaTid={m.relationships?.region?.map(
                (r) => r.drupal_internal__tid,
              )}
            />
          ))}
        </DesktopLeftMenuLayout>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query MeasureList($slug: String!, $langCode: String!) {
    measureType(path: { alias: { eq: $slug }, langcode: { eq: $langCode } }) {
      name
      relationships {
        icon {
          code
        }
        measure {
          valid_from
          valid_to
          id
          norm
          title
          relationships {
            region {
              name
              drupal_internal__tid
            }
          }
          path {
            alias
          }
        }
      }
    }
    allMeasureType(filter: { langcode: { eq: $langCode } }) {
      nodes {
        ...MeasureArea
      }
    }
  }
`;
