import React from 'react';
import { graphql } from 'gatsby';
import { IMeasureListQuery, ISitePageContext } from 'graphql-types';
import { SEO as Seo } from 'gatsby-plugin-seo';
import Container from '@/components/container';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import I18n from '@/components/i18n';
import MeasureListCard from '@/components/list-card/measure-list-card';
import SchemaComp from '@/components/schema';
import { MeasureAreaList } from '@/components/category-item-list';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';

interface IProps {
  pageContext: ISitePageContext;
  data: IMeasureListQuery;
}
// todo add meta description
const Home: React.FC<IProps> = ({ data, pageContext }) => {
  const { measureType } = data;
  const measures = measureType.relationships?.measure || [];

  const collator = new Intl.Collator([pageContext.langCode]);
  measures.sort((a, b) => collator.compare(a.title, b.title));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={measureType.name}
        description={I18n('current_measures_overview_meta')}
        pagePath={pageContext.slug}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        isBlogPost={false}
        isBlogList
        title={measureType.name}
        description={I18n('current_measures_overview_meta')}
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          {
            title: I18n('current_measures'),
            url: I18n('slug_measures'),
          },
          measureType.name,
        ]}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              { title: I18n('current_measures'), url: I18n('slug_measures') },
              measureType.name,
            ]}
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={<MeasureAreaList data={data.allMeasureType.nodes} />}
          hideMenuOnMobile
        >
          <Headline iconCode={data.measureType?.relationships?.icon?.code}>
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
              area={m.relationships?.region?.map((r) => r.name).join(' ,')}
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
