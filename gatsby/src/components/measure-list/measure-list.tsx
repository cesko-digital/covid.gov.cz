import { IMeasure } from '@graphql-types';
import React from 'react';
import Measure from './measure';

interface Props {
  measures: IMeasure[];
  descriptions?: string[];
}

const MeasureList: React.FC<Props> = ({ measures, descriptions }) => {
  const maxItems = 3;

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
            areaTid={relationships.region.map(
              (item) => item.drupal_internal__tid,
            )}
          />
        ))}
    </>
  );
};

export default MeasureList;
