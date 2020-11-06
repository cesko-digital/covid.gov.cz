import React from 'react';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import { IQuery } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import Layout from '@/layouts/default-layout';
import LookingForSomething from '@/components/looking-for-something';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
}

const Situations: React.FC<IProps> = ({ data }) => {
  const {
    allArea: { nodes },
  } = data;
  const {
    searchingTitle,
    searchingDescription,
    callTitle,
    callDescription,
  } = data as any;

  // todo: add meta description
  return (
    <Layout>
      <Seo
        title={I18n('life_situations')}
        description={I18n('situations_overview_meta')}
        pagePath={I18n('slug_situations')}
        htmlLanguage={searchingTitle.langcode}
        schema={`{
          "@type": "WebSite",
          "@id": "https://covid.gov.cz/#website",
          "url": "https://covid.gov.cz/situations",
          "name": "Life Situations | Covid Portál",
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
              { title: I18n('life_situations'), url: I18n('slug_situations') },
            ]}
            variant="inverse"
          />
        </div>
        <div className="mt-3">
          <Headline>{I18n('situations_overview')}</Headline>
        </div>
        <div className="mt-3">
          <ContentBox noPadding>
            {nodes.map(
              (n) =>
                n.relationships.situation !== null && (
                  <CategoryItem
                    key={n.id}
                    name={n.name}
                    path={n.path.alias}
                    iconCode={n.relationships.field_ref_icon?.code}
                  />
                ),
            )}
          </ContentBox>
        </div>
      </Container>
      <Container className="mt-3 mb-3">
        <LookingForSomething
          searchingHeader={searchingTitle.target}
          searchingDescription={searchingDescription.target}
          callHeader={callTitle.target}
          callDescription={callDescription.target}
        />
      </Container>
    </Layout>
  );
};

export default Situations;

export const query = graphql`
  query SituationTypeQuery($langCode: String!) {
    allArea(filter: { langcode: { eq: $langCode } }, sort: { fields: name }) {
      nodes {
        name
        id
        path {
          alias
        }
        relationships {
          situation {
            id
          }
          field_ref_icon {
            code
          }
        }
      }
    }
    searchingTitle: translation(
      langcode: { eq: $langCode }
      source: { eq: "still_searching_title" }
    ) {
      target
    }
    searchingDescription: translation(
      langcode: { eq: $langCode }
      source: { eq: "still_searching_description" }
    ) {
      target
    }
    callTitle: translation(
      langcode: { eq: $langCode }
      source: { eq: "call_title" }
    ) {
      target
    }
    callDescription: translation(
      langcode: { eq: $langCode }
      source: { eq: "call_description" }
    ) {
      target
    }
  }
`;
