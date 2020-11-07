import React from 'react';
import AccordionSection, {
  Section,
} from '@/components/accordion/accordion-section';

interface Props {
  data: Section[];
  className?: string;
}

const Accordion: React.FC<Props> = ({ data, className }) => {
  return (
    <>
      {data.map((item, index) => (
        <AccordionSection className={className} key={index} {...item} />
      ))}
    </>
  );
};

export default Accordion;
