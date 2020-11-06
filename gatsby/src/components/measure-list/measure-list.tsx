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
      {measures
        .slice(0, maxItems)
        .map(
          ({ id, title, path, valid_from, valid_to, norm, relationships }) => (
            <Measure
              key={id}
              title={title}
              description={norm}
              validFrom={valid_from}
              validTo={valid_to}
              link={path.alias}
              area={relationships.region.map((item) => item.name).join(', ')}
            />
          ),
        )}
    </>
  );
};

export default MeasureList;
