import React from 'react';
import ContentBox from '../content-box';
import { useTranslation } from '../i18n';
import LinkList from '../link-list';

interface Props {
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
  variant: 'white' | 'blue';
}

const RelatedTopics: React.FC<Props> = ({ links, variant }) => {
  const { t } = useTranslation();
  return (
    <ContentBox
      title={t('similar_topics')}
      boldedTitleCount={1}
      variant={variant}
    >
      <LinkList variant={variant === 'blue' ? 'white' : 'blue'} links={links} />
    </ContentBox>
  );
};

export default RelatedTopics;
