import React from 'react';
import Accordion from '@/components/accordion';
import styles from './content-accordion-list.module.scss';

interface Props {
  items?: Array<{
    title?: string;
    content?: { processed?: string };
  }>;
}

const ContentAccordionList: React.FC<Props> = ({ items }) => {
  return (
    <Accordion
      className={styles.accordionSection}
      data={items?.map(({ title, content }) => ({
        title: <h2 className={styles.accordionListTitle}>{title}</h2>,
        text: (
          <div
            className={styles.accordionListContent}
            dangerouslySetInnerHTML={{
              __html: content?.processed,
            }}
          />
        ),
      }))}
    />
  );
};

export default ContentAccordionList;
