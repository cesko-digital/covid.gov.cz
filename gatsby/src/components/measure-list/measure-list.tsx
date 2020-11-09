import useMobile from '@/hooks/useMobile';
import { IMeasure } from '@/graphql-types';
import React from 'react';
import Measure from './measure';

interface Props {
  measures: IMeasure[];
  descriptions?: string[];
}

const MeasureList: React.FC<Props> = ({ measures, descriptions }) => {
  const isMobile = useMobile();

  const maxItems = isMobile ? 3 : 6;

  return (
    <>
      {measures
        .slice(0, maxItems)
        .map(({ id, title, path, valid_from, valid_to, relationships }, i) => (
          <Measure
            key={id}
            title={title}
            description={descriptions[i] ?? ''}
            validFrom={valid_from}
            validTo={valid_to}
            link={path.alias}
            area={relationships.region.map((item) => item.name).join(', ')}
          />
        ))}
    </>
  );
};

export default MeasureList;
