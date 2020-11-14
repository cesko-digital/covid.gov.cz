import React from 'react';
import { graphql } from 'gatsby';
import { ISituationsListQuery, ISitePageContext } from 'graphql-types';
import Container from '@/components/container';

import { SEO as Seo } from 'gatsby-plugin-seo';
import Headline from '@/components/headline';
import ListCard from '@/components/list-card';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import SchemaComp from '@/components/schema';
import { SituationAreaList } from '@/components/category-item-list';
import DesktopLeftMenuLayout from '@/layouts/desktop-left-menu-layout';
import { useTranslation } from '@/components/i18n';

interface IProps {
  data: ISituationsListQuery;
  pageContext: ISitePageContext;
}

const SituationList: React.FC<IProps> = ({ data, pageContext }) => {
  const { t } = useTranslation();
  const { area } = data;
  const situations = area.relationships?.situation || [];

  const collator = new Intl.Collator([pageContext.langCode]);
  situations.sort((a, b) => collator.compare(a.title, b.title));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={area.name}
        description={t('situations_overview_meta')}
        pagePath="/situations"
      />
      <SchemaComp
        langCode={pageContext.langCode}
        isBlogPost={false}
        isBlogList
        title={area.name}
        description={t('situations_overview_meta')}
        breadcrumbItems={[
          { title: t('home'), url: '/' },
          {
            title: t('life_situations'),
            url: t('slug_situations'),
          },
          area.name,
        ]}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: t('home'), url: '/' },
              {
                title: t('life_situations'),
                url: t('slug_situations'),
              },
              area.name,
            ]}
            variant="inverse"
          />
        </div>
        <DesktopLeftMenuLayout
          menu={
            <SituationAreaList
              theme="blue"
              data={data.allSituationAreas.nodes}
            />
          }
          hideMenuOnMobile
        >
          <Headline iconCode={data.area?.relationships?.icon?.code}>
            {area.name}
          </Headline>
          {situations.map(({ id, title, meta_description, path }) => {
            return (
              <ListCard
                title={title}
                description={meta_description}
                key={`area-list-item-${id}`}
                link={path?.alias}
              />
            );
          })}
        </DesktopLeftMenuLayout>
      </Container>
    </Layout>
  );
};
export default SituationList;

export const query = graphql`
  query SituationsList($slug: String!, $langCode: String!) {
    area(path: { alias: { eq: $slug }, langcode: { eq: $langCode } }) {
      name
      relationships {
        icon {
          code
        }
        situation {
          id
          title
          meta_description
          path {
            alias
          }
        }
      }
    }
    allSituationAreas: allArea(
      filter: { langcode: { eq: $langCode } }
      sort: { fields: name }
    ) {
      nodes {
        ...SituationArea
      }
    }
  }
`;
