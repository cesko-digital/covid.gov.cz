import React from 'react';
import AccordionItem, { Item } from '@/components/accordion/accordion-item';

import styles from './accordion-section.module.scss';

export interface Section {
  title: string;
  items: Item[];
}

const AccordionSection: React.FC<Section> = ({ title, items }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        {title}
      </div>
      <div className={styles.sectionContent}>
        {items.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;
