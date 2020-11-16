import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useTranslation, useCurrentLanguage } from '@/components/i18n';
import { ISituationQuestions_Answers } from '@graphql-types';

const BASE_URL = 'https://covid.gov.cz';

interface IProps {
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
  questions_answers?: ISituationQuestions_Answers[];
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
  isHomePage,
  breadcrumbItems,
  questions_answers,
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();
  const url = `${BASE_URL}${pathname}`;

  const websiteUrl = `${BASE_URL}${
    currentLanguage !== 'cs' ? `/${currentLanguage}/` : '/'
  }`;

  const baseSchema: Array<Object> = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: websiteUrl,
      name: langCode === 'en' ? 'Covid Portal' : 'Covid Portál',
      inLanguage: langCode === 'en' ? 'en-GB' : 'cs-CZ',
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      '@id': url,
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
              '@id': `${
                websiteUrl.endsWith('/') ? websiteUrl.slice(0, -1) : websiteUrl
              }${breadcrumbItem.url}`,
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

  const faqList = questions_answers?.map((question_answer) => ({
    '@type': 'Question',
    name: question_answer.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: question_answer.value,
    },
  }));

  const schema: Array<Object> =
    isBlogPost || isBlogList || isSpecialList
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItemsList,
          },
        ]
      : baseSchema;

  if (isBlogPost && typeof faqList !== 'undefined') {
    if (faqList.length > 0) {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: title,
        mainEntity: faqList,
      });
    }
  }

  if (isBlogPost) {
    schema.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
        inLanguage: langCode === 'en' ? 'en-GB' : 'cs-CZ',
      },
      headline: title,
      image: `${BASE_URL}/images/ogimage.png`,
      datePublished,
      dateModified,
      publisher: {
        '@type': 'Organization',
        url: 'https://gov.cz',
        logo: 'https://gov.cz/images/layout/pvs-logo-mobile.svg',
        name: 'Gov.cz',
      },
      author: {
        '@type': 'Organization',
        url: 'https://gov.cz',
        logo: 'https://gov.cz/images/layout/pvs-logo-mobile.svg',
        name: 'Gov.cz',
      },
    });
  }

  const ogTitle = isHomePage ? title : `${title} · ${t('covid_portal')}`;

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
      <meta property="og:image" content={`${origin}/images/ogimage.png`} />
      <meta property="twitter:image" content={`${origin}/images/ogimage.png`} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={t('covid_portal')} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      {process.env.GATSBY_VERCEL && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default SchemaComp;
