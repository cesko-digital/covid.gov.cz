import React from 'react';
import { graphql } from 'gatsby';
import { ISituationAreaFragment } from 'graphql-types';
import CategoryItemList from './category-item-list';
import { useTranslation } from '../i18n';

interface IProps {
  data: ISituationAreaFragment[];
  theme: 'white' | 'blue';
  currentActiveSlug?: string;
}

const SituationAreaList: React.FC<IProps> = ({
  data,
  theme,
  currentActiveSlug,
}) => {
  const { t } = useTranslation();

  const listItems: React.ComponentProps<typeof CategoryItemList>['items'] = data
    .filter(({ relationships }) => relationships.situation !== null)
    .map(({ id, name, path, relationships }) => ({
      id,
      name,
      path: path.alias,
      iconCode: relationships.icon?.code,
      isActive: path.alias === currentActiveSlug,
      theme,
    }));
  return (
    <CategoryItemList
      theme={theme}
      items={listItems}
      title={t('life_situations')}
    />
  );
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
