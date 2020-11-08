import React from 'react';
import Helmet from 'react-helmet';
import I18n from '../i18n';

interface IProps {
  body?: string;
  langCode: string;
  datePublished?: string;
  description: string;
  isBlogPost: boolean;
  title: string;
  url: string;
}
export const SchemaComp: React.FC<IProps> = ({
  datePublished,
  description,
  isBlogPost,
  title,
  langCode,
  body,
  url,
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
    },
  ];

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
              },
            },
          ],
        },
        isBlogPost
          ? {
              '@context': 'http://schema.org',
              '@type': 'BlogPosting',
              url,
              name: title,
              articleBody: body,
              headline: title,
              description,
              publisher: {
                '@type': 'Organization',
                url: 'https://gov.cz',
              },
              mainEntityOfPage: {
                '@type': 'WebSite',
                '@id': { url },
              },
              datePublished,
            }
          : '',
      ]
    : baseSchema;

  return (
    <Helmet>
      <meta property="og:url" content={url} />
      <meta
        property="og:title"
        content={title + ' · ' + I18n('covid_portal')}
      />
      <meta
        property="og:locale"
        content={langCode === 'en' ? 'en_GB' : 'cs_CZ'}
      />
      {isBlogPost ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:image" content="/images/ogimage.jpg" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={I18n('covid_portal')} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaComp;
