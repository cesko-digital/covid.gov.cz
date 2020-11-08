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
  const { taxonomyTermMeasureType } = data;
  const measures = taxonomyTermMeasureType.relationships?.measure || [];

  const collator = new Intl.Collator([pageContext.langCode]);
  measures.sort((a, b) => collator.compare(a.title, b.title));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={taxonomyTermMeasureType.name}
        description={I18n('current_measures_overview_meta')}
        pagePath={pageContext.slug}
      />
      <SchemaComp
        url={'https://covid.gov.cz' + pageContext.slug}
        langCode={pageContext.langCode}
        isBlogPost={false}
        title={taxonomyTermMeasureType.name}
        description={I18n('current_measures_overview_meta')}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              { title: I18n('current_measures'), url: I18n('slug_measures') },
              taxonomyTermMeasureType.name,
            ]}
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={
            <MeasureAreaList data={data.allTaxonomyTermMeasureType.nodes} />
          }
        >
          <>
            <Headline className="d-block d-sm-none">
              {taxonomyTermMeasureType.name}
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
          </>
        </DesktopLeftMenuLayout>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query MeasureList($slug: String!, $langCode: String!) {
    taxonomyTermMeasureType(path: { alias: { eq: $slug } }) {
      name
      relationships {
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
    allTaxonomyTermMeasureType(filter: { langcode: { eq: $langCode } }) {
      nodes {
        ...MeasureArea
      }
    }
  }
`;
