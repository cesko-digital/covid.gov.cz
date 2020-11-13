import React from 'react';
import { graphql } from 'gatsby';
import { ISituationAreaFragment } from 'graphql-types';
import { useLocation } from '@reach/router';
import CategoryItemList from './category-item-list';
import { useTranslation } from '../i18n';

interface IProps {
  data: ISituationAreaFragment[];
}

const SituationAreaList: React.FC<IProps> = ({ data }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const listItems = data
    .filter(({ relationships }) => relationships.situation !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.icon?.code,
      isActive: path.alias === location.pathname,
    }));
  return <CategoryItemList items={listItems} title={t('life_situations')} />;
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
      icon {
        code
      }
    }
  }
`;

export default SituationAreaList;
