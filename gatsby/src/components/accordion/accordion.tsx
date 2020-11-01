import React from 'react';
import AccordionSection, { Section } from '@/components/accordion/accordion-section';

import styles from './accordion.module.scss';

interface Props {
  data: Section[];
}

const Accordion: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <AccordionSection key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
