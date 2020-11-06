import React from 'react';
import Helmet from 'react-helmet';

interface IOrganization {
  url: string;
  name: string;
}
interface IProps {
  canonicalUrl: string;
  body: string;
  datePublished: string;
  defaultTitle: string;
  description: string;
  isBlogPost: boolean;
  organization: IOrganization;
  title: string;
  url: string;
}
export const SchemaComp: React.FC<IProps> = ({
  canonicalUrl,
  datePublished,
  defaultTitle,
  description,
  isBlogPost,
  organization,
  title,
  body,
  url,
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
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
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          articleBody: body,
          alternateName: defaultTitle,
          headline: title,
          description,
          publisher: {
            '@type': 'Organization',
            url: organization.url,
            name: organization.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl,
          },
          datePublished,
        },
      ]
    : baseSchema;

  return (
    <Helmet>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaComp;
