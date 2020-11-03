import { IMeasure } from 'graphql-types';
import React from 'react';
import Measure from './measure';

interface Props {
  measures: IMeasure[];
}

const MeasureList: React.FC<Props> = ({ measures }) => {
  return (
    <>
      {measures.map(({ id, title, relationships }, i) => (
        <Measure
          key={id}
          title={title}
          description="Rouška se musí nosit venku až na pár"
          validity="od 2. října do 6. listopadu"
          area={relationships.region[0]?.name}
        />
      ))}
    </>
  );
};

export default MeasureList;
