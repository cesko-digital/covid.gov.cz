import React from 'react';
import Measure from './measure';

interface Props {
  measures: Array<{
    title: string;
    id: string;
    relationships: {
      region: {
        name: string;
      };
    };
  }>;
}

const MeasureList: React.FC<Props> = ({ measures }) => {
  return (
    <>
      {measures.map((item) => (
        <Measure
          key={item.id}
          title={item.title}
          description="Rouška se musí nosit venku až na pár"
          validity="od 2. října do 6. listopadu"
          area={item.relationships.region.name}
        />
      ))}
    </>
  );
};

export default MeasureList;
