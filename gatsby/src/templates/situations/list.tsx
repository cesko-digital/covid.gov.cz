import React from 'react';
import { graphql } from 'gatsby';
import { IQuery, ISitePageContext } from '@graphql-types';
import Container from '@/components/container';

import { SEO as Seo } from 'gatsby-plugin-seo';
import Headline from '@/components/headline';
import ListCard from '@/components/list-card';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import I18n from '@/components/i18n';
import SchemaComp from '@/components/schema';

interface IProps {
  data: IQuery;
  pageContext: ISitePageContext;
}

const SituationList: React.FC<IProps> = ({ data, pageContext }) => {
  const { area } = data;
  const situations = area.relationships?.situation || [];

  const collator = new Intl.Collator([pageContext.langCode]);
  situations.sort((a, b) => collator.compare(a.title, b.title));

  return (
    <Layout pageContext={pageContext}>
      <Seo
        title={area.name}
        description={I18n('situations_overview_meta')}
        pagePath="/situations"
      />
      <SchemaComp
        langCode={pageContext.langCode}
        isBlogPost={false}
        isBlogList
        title={area.name}
        description={I18n('situations_overview_meta')}
        breadcrumbItems={[
          { title: I18n('home'), url: '/' },
          {
            title: I18n('life_situations'),
            url: I18n('slug_situations'),
          },
          area.name,
        ]}
      />
      <Container>
        <div className="pt-1">
          <Breadcrumb
            items={[
              { title: I18n('home'), url: '/' },
              {
                title: I18n('life_situations'),
                url: I18n('slug_situations'),
              },
              area.name,
            ]}
            variant="inverse"
          />
        </div>
        <div className="mt-3">
          <Headline>{area.name}</Headline>
        </div>
        <div>
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
        </div>
      </Container>
    </Layout>
  );
};
export default SituationList;

export const query = graphql`
  query($slug: String!) {
    area(path: { alias: { eq: $slug } }) {
      name
      relationships {
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
  }
`;
