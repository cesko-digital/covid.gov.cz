import React from 'react';
import { graphql } from 'gatsby';
import { ISituationAreaFragment } from 'graphql-types';
import CategoryItemList from './category-item-list';

interface IProps {
  data: ISituationAreaFragment[];
}

const SituationAreaList: React.FC<IProps> = ({ data }) => {
  const listItems = data
    .filter(({ relationships }) => relationships.situation !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.field_ref_icon?.code,
      isActive: false,
    }));
  return <CategoryItemList items={listItems} />;
};

export const query = graphql`
  fragment SituationArea on area {
    id
    name
    path {
      alias
    }
    relationships {
      situation {
        id
      }
      field_ref_icon {
        code
      }
    }
  }
`;

export default SituationAreaList;
