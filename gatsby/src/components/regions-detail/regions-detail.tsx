import React from 'react';

import { IRegion } from '@graphql-types';

interface IRegionsProps {
  regions: Pick<IRegion, 'name' | 'drupal_internal__tid'>[];
}

export const isAllCzechRegions = (regionsTid: string[]): boolean => {
  let isAllCzechRegions = false;
  if (regionsTid && regionsTid.length) {
    for (let i = 0; i < regionsTid.length; i++) {
      const regionTid = regionsTid[i];
      if (regionTid === '33') {
        isAllCzechRegions = true;
      }
    }
    return isAllCzechRegions;
  }
};

export const RegionsDetail: React.FC<IRegionsProps> = ({ regions }) => {
  return (
    <span
      className={
        isAllCzechRegions(regions.map((region) => region.drupal_internal__tid))
          ? 'font-weight-normal'
          : 'font-weight-medium'
      }
    >
      {regions.map((region) => region.name).join(', ')}
    </span>
  );
};

export default RegionsDetail;
