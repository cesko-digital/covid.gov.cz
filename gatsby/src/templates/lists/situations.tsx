import React from 'react';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import { ISitePageContext, ISituationsAreasListQuery } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import SchemaComp from '@/components/schema';
import { SituationAreaList } from '@/components/category-item-list';
import { useTranslation } from '@/components/i18n';

interface IProps {
  data: ISituationsAreasListQuery;
  pageContext: ISitePageContext;
}

const Situations: React.FC<IProps> = ({ data, pageContext }) => {
  const { t } = useTranslation();
  const {
    allSituationAreas: { nodes },
  } = data;

  const collator = new Intl.Collator([pageContext.langCode]);
  nodes.sort((a, b) => collator.compare(a.name, b.name));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={t('life_situations')}
        description={t('situations_overview_meta')}
        pagePath={t('slug_situations')}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        description={t('situations_overview_meta')}
        isBlogPost={false}
        isSpecialList
        title={t('life_situations')}
        breadcrumbItems={[
          { title: t('home'), url: '/' },
          { title: t('life_situations'), url: t('slug_situations') },
        ]}
      />
      <Container className="pt-1">
        <Breadcrumb
          items={[{ title: t('home'), url: '/' }, t('life_situations')]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3 d-block d-md-none">
        <Headline>{t('situations_overview')}</Headline>
      </Container>
      <Container className="mt-3">
        <SituationAreaList data={data.allSituationAreas.nodes} />
      </Container>
    </Layout>
  );
};

export default Situations;

export const query = graphql`
  query SituationsAreasList($langCode: String!) {
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
