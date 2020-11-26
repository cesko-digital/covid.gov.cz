import React from 'react';
import classNames from 'classnames';
import { useTranslation } from '../i18n';
import LinkList from '../link-list';
import styles from './related-topics.module.scss';

interface Props {
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
}

const RelatedTopics: React.FC<Props> = ({ links }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.wrapper)}>
      <h3
        dangerouslySetInnerHTML={{ __html: t('similar_topics') }}
        className="mb-1"
      ></h3>
      <LinkList links={links} />
    </div>
  );
};

export default RelatedTopics;
