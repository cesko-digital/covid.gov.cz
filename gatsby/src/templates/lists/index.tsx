import React from 'react';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import I18n from '@/components/i18n';
import { IQuery } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import { Guide } from '@/components/guide';
import DesktopTopContent from '@/components/desktop-top-content';
import { SEO as Seo } from 'gatsby-plugin-seo';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { homepage } = data;
  const {
    situation_label,
    situation_text,
    langcode,
    measure_description,
    situation_description,
    situation_link,
    measure_label,
    measure_link,
    measure_text,
    relationships,
  } = homepage;
  const { measure_items, situation_items } = relationships;

  // todo add meta description
  return (
    <Layout>
      <Seo
        title={I18n('home')}
        description="meta desc"
        pagePath="/"
        htmlLanguage={langcode}
        schema={`{
          "@type": "WebSite",
          "@id": "https://covid.gov.cz/#website",
          "url": "https://covid.gov.cz",
          "name": "Home | Covid Portál",
          "publisher": {
            "@id": "https://gov.cz"
          }
        }`}
      />
      <DesktopTopContent title={I18n('header_headline')} />
      <Container className="pt-3">
        <Guide
          items={situation_items}
          title={situation_label.processed}
          description={situation_text}
          buttonHref={I18n('slug_situations')}
          buttonText={situation_link?.title}
          variant="blue"
          itemDescriptions={situation_description}
        />
        <Guide
          items={measure_items}
          title={measure_label.processed}
          description={measure_text}
          buttonHref={I18n('slug_measures')}
          buttonText={measure_link?.title}
          variant="white"
          itemDescriptions={measure_description}
        />
      </Container>
    </Layout>
  );
};
export default Home;

// fix: pls fix query
export const query = graphql`
  query IndexQuery($langCode: String!) {
    homepage(langcode: { eq: $langCode }) {
      langcode
      measure_description
      situation_description
      meta_description
      measure_link {
        uri
        title
      }
      moderation_state
      measure_label {
        processed
      }
      measure_text
      situation_label {
        processed
      }
      situation_link {
        uri
        title
      }
      situation_text
      relationships {
        measure_items {
          id
          title
          norm
          valid_from(formatString: "D. M. YYYY")
          valid_to(formatString: "D. M. YYYY")
          path {
            alias
          }
          relationships {
            region {
              name
            }
          }
        }
        situation_items {
          id
          name
          path {
            alias
          }
          relationships {
            field_ref_icon {
              code
            }
          }
        }
      }
    }
  }
`;
