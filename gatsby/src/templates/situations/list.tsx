import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import Container from '@/components/container';

import { SEO as Seo } from 'gatsby-plugin-seo';
import Headline from '@/components/headline';
import ListCard from '@/components/list-card';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { area } = data;
  return (
    <Layout>
      <Seo
        title={area.name}
        description={I18n('situations_overview_meta')}
        pagePath="/situations"
        schema={`{
          "@type": "WebSite",
          "@id": "https://covid.gov.cz/#situations",
          "url": "https://covid.gov.cz/situations",
          "name": "Life Situations",
          "publisher": {
            "@id": "https://gov.cz"
          }
        }`}
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
          {area.relationships?.situation?.map(
            ({ id, title, meta_description, path }) => {
              return (
                <ListCard
                  title={title}
                  description={meta_description}
                  key={`area-list-item-${id}`}
                  link={path?.alias}
                />
              );
            },
          )}
        </div>
      </Container>
    </Layout>
  );
};
export default Home;

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
