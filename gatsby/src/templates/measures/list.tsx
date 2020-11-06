import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';

import { SEO as Seo } from 'gatsby-plugin-seo';
import Container from '@/components/container';
import Headline from '@/components/headline';
import Layout from '@/layouts/default-layout';
import Breadcrumb from '@/components/breadcrumb';
import I18n from '@/components/i18n';
import MeasureListCard from '@/components/list-card/measure-list-card';

interface IProps {
  data: IQuery;
}
// todo add meta description
const Home: React.FC<IProps> = ({ data }) => {
  const { taxonomyTermMeasureType } = data;
  return (
    <Layout>
      <Seo
        title={taxonomyTermMeasureType.name}
        description={I18n('current_measures_overview_meta')}
        pagePath="/measures"
        schema={`{
          "@type": "WebSite",
          "@id": "https://covid.gov.cz/#measures",
          "url": "https://covid.gov.cz/measures",
          "name": "Current Measures",
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
              { title: I18n('current_measures'), url: I18n('slug_measures') },
              taxonomyTermMeasureType.name,
            ]}
            variant="inverse"
          />
        </div>
        <div className="mt-3">
          <Headline>{taxonomyTermMeasureType.name}</Headline>
        </div>
        <div>
          {taxonomyTermMeasureType.relationships?.measure?.map((m) => (
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
        </div>
      </Container>
    </Layout>
  );
};
export default Home;

export const query = graphql`
  query($slug: String!) {
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
  }
`;
