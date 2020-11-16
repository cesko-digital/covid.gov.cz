import React from 'react';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { IMeasureTypeQueryQuery, ISitePageContext } from '@graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import SchemaComp from '@/components/schema';
import { MeasureAreaList } from '@/components/category-item-list';
import { useTranslation } from '@/components/i18n';

interface IProps {
  data: IMeasureTypeQueryQuery;
  pageContext: ISitePageContext;
}

const Measures: React.FC<IProps> = ({ data, pageContext }) => {
  const { t } = useTranslation();
  const {
    allMeasureType: { nodes },
  } = data;

  const collator = new Intl.Collator([pageContext.langCode]);
  nodes.sort((a, b) => collator.compare(a.name, b.name));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={t('current_measures_overview')}
        description={t('current_measures_overview_meta')}
        pagePath={t('slug_measures')}
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        description={t('current_measures_overview_meta')}
        isBlogPost={false}
        isSpecialList
        title={t('current_measures_overview')}
        breadcrumbItems={[
          { title: t('home'), url: '/' },
          { title: t('current_measures'), url: t('slug_measures') },
        ]}
      />
      <Container className="pt-1">
        <Breadcrumb
          items={[{ title: t('home'), url: '/' }, t('current_measures')]}
          variant="inverse"
        />
      </Container>
      <Container className="mt-3 d-block d-md-none">
        <Headline>{t('current_measures_overview')}</Headline>
      </Container>
      <Container className="mt-3">
        <MeasureAreaList theme="white" data={data.allMeasureType.nodes} />
      </Container>
    </Layout>
  );
};
export default Measures;

export const query = graphql`
  query MeasureTypeQuery($langCode: String!) {
    allMeasureType(filter: { langcode: { eq: $langCode } }) {
      nodes {
        ...MeasureArea
      }
    }
  }
`;
