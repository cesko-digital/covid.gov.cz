import React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { IMeasureAreaFragment } from 'graphql-types';
import CategoryItemList from './category-item-list';
import { useTranslation } from '../i18n';

interface IProps {
  data: IMeasureAreaFragment[];
  theme: 'white' | 'blue';
}

const MeasureAreaList: React.FC<IProps> = ({ data, theme }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const listItems: React.ComponentProps<typeof CategoryItemList>['items'] = data
    .filter(({ relationships }) => relationships.measure !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.icon?.code,
      isActive: path.alias === location.pathname,
      theme,
    }));
  return (
    <CategoryItemList
      theme={theme}
      items={listItems}
      title={t('current_measures')}
    />
  );
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
