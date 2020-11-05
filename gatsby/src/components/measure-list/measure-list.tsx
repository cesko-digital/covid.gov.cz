import useMobile from '@/hooks/useMobile';
import { IMeasure } from 'graphql-types';
import React from 'react';
import Measure from './measure';

interface Props {
  measures: IMeasure[];
}

const MeasureList: React.FC<Props> = ({ measures }) => {
  const isMobile = useMobile();

  const maxItems = isMobile ? 3 : 6;

  return (
    <>
      {measures.slice(0, maxItems).map(({ id, title, relationships }) => (
        <Measure
          key={id}
          title={title}
          description="Rouška se musí nosit venku až na pár"
          validity="od 2. října do 6. listopadu"
          link="/opatreni/rouska-se-musi-nosti-venku-az-na-par"
          area={relationships.region[0]?.name}
        />
      ))}
    </>
  );
};

export default MeasureList;
