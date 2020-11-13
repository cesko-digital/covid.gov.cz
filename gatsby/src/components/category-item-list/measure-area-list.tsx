import React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { IMeasureAreaFragment } from 'graphql-types';
import CategoryItemList from './category-item-list';
import { useTranslation } from '../i18n';

interface IProps {
  data: IMeasureAreaFragment[];
}

const MeasureAreaList: React.FC<IProps> = ({ data }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const listItems = data
    .filter(({ relationships }) => relationships.measure !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.icon?.code,
      isActive: path.alias === location.pathname,
    }));
  return <CategoryItemList items={listItems} title={t('current_measures')} />;
};

export const query = graphql`
  fragment MeasureArea on measure_type {
    id
    name
    path {
      alias
    }
    relationships {
      measure {
        id
      }
      icon {
        code
      }
    }
  }
`;

export default MeasureAreaList;
