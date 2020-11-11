import React from 'react';

import { IRelatedMeasureFragment } from '@graphql-types';
import { graphql, Link } from 'gatsby';
import { RegionsMarker, TimeMarker } from '../marker';

import styles from './related-measure.module.scss';

interface IProps {
  measure: IRelatedMeasureFragment;
}

const RelatedMeasure: React.FC<IProps> = ({ measure }) => {
  return (
    <div className={styles.relatedMeasure}>
      <Link className="color-blue" to={measure.path.alias}>
        {measure.title}
      </Link>
      <RegionsMarker regions={measure.relationships.region} />
      <TimeMarker
        displayTime
        validFrom={measure.valid_from}
        validTo={measure.valid_to}
      />
    </div>
  );
};

export const query = graphql`
  fragment RelatedMeasure on measure {
    title
    path {
      alias
      langcode
    }
    valid_from
    valid_to
    relationships {
      region {
        name
      }
    }
  }
`;

export default RelatedMeasure;
