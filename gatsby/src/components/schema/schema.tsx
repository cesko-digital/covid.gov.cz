import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import I18n from '../i18n';
import { ISituation, IMeasure } from '@graphql-types';

const BASE_URL = 'https://covid.gov.cz';

interface IProps {
  body?: string;
  langCode: string;
  datePublished?: string;
  dateModified?: string;
  description: string;
  isBlogPost: boolean;
  isBlogList?: boolean;
  isSpecialList?: boolean;
  title: string;
  isHomePage?: boolean;
  breadcrumbItems?: Array<Object | string>;
  situations?: ISituation[];
  measures?: IMeasure[];
}

export const SchemaComp: React.FC<IProps> = ({
  datePublished,
  dateModified,
  description,
  isBlogPost,
  isBlogList,
  isSpecialList,
  title,
  langCode,
  body,
  isHomePage,
  breadcrumbItems,
  situations,
  measures,
}) => {
  const { pathname } = useLocation();
  const url = `${BASE_URL}${pathname}`;

  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: `${BASE_URL}/${langCode !== 'cs' ? langCode + '/' : ''}`,
      name: langCode === 'en' ? 'Covid Portal' : 'Covid Portál',
      inLanguage: langCode === 'en' ? 'en-GB' : 'cs-CZ',
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      url,
      name: title,
      inLanguage: langCode === 'en' ? 'en-GB' : 'cs-CZ',
    },
  ];

  const breadcrumbItemsList: Array<Object> = [];
  let breadcrumbItemsListIter = 1;
  if (typeof breadcrumbItems !== 'undefined') {
    breadcrumbItems.forEach(
      (breadcrumbItem: { url: string; title: string }) => {
        if (typeof breadcrumbItem !== 'string') {
          breadcrumbItemsList.push({
            '@type': 'ListItem',
            position: breadcrumbItemsListIter,
            item: {
              '@id': breadcrumbItem.url,
              name: breadcrumbItem.title,
            },
          });
          breadcrumbItemsListIter++;
        }
      },
    );
    if (!isSpecialList) {
      breadcrumbItemsList.push({
        '@type': 'ListItem',
        position: breadcrumbItemsListIter++,
        item: {
          '@id': url,
          name: title,
        },
      });
    }
  } else {
    breadcrumbItemsList.push({
      '@type': 'ListItem',
      position: breadcrumbItemsListIter,
      item: {
        '@id': url,
        name: title,
      },
    });
  }

  if (typeof dateModified === 'undefined') {
    dateModified = datePublished || null;
  }

  let situationsList = null;
  if (typeof situations !== 'undefined') {
    situationsList = [];
    situations.forEach((situation) => {
      situationsList.push({
        '@type': 'Question',
        name: situation.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: situation.content.processed,
        },
      });
    });
  }

  let measuresList = null;
  if (typeof measures !== 'undefined') {
    measuresList = [];
    measures.forEach((measure) => {
      measuresList.push({
        '@type': 'Question',
        name: measure.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            measure.description !== null
              ? measure.description.processed
              : measure.norm,
        },
      });
    });
  }

  const schema =
    isBlogPost || isBlogList || isSpecialList
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItemsList,
          },
          isBlogList && situationsList !== null
            ? {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: situationsList,
              }
            : '',
          isBlogList && measuresList !== null
            ? {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: measuresList,
              }
            : '',
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
                  logo: 'https://gov.cz/images/layout/pvs-logo-mobile.svg',
                  name: 'Gov.cz',
                },
                mainEntityOfPage: url,
                author: {
                  '@type': 'Organization',
                  url: 'https://gov.cz',
                  logo: 'https://gov.cz/images/layout/pvs-logo-mobile.svg',
                  name: 'Gov.cz',
                },
                image: `${BASE_URL}/images/ogimage.jpg`,
                datePublished,
                dateModified,
              }
            : '',
        ]
      : baseSchema;

  const ogTitle = isHomePage ? title : `${title} · ${I18n('covid_portal')}`;

  const { origin } = new URL(url);

  return (
    <Helmet htmlAttributes={{ lang: langCode }}>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:locale"
        content={langCode === 'en' ? 'en_GB' : 'cs_CZ'}
      />
      {isBlogPost ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:image" content={`${origin}/images/ogimage.jpg`} />
      <meta property="twitter:image" content={`${origin}/images/ogimage.jpg`} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={I18n('covid_portal')} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaComp;
