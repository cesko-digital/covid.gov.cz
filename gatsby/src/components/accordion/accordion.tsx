import React from 'react';
import AccordionSection, {
  Section,
} from '@/components/accordion/accordion-section';

interface Props {
  data: Section[];
}

const Accordion: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <AccordionSection key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
