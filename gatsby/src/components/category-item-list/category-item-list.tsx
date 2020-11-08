import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './category-item-list.module.scss';
import CategoryItem from '../category-item/category-item';
import useMobile from '@/hooks/useMobile';
import { gLang } from '@/components/i18n';

type Props = {
  items: React.ComponentProps<typeof CategoryItem>[];
};

const CategoryItemList: FC<Props> = ({ items }) => {
  const isMobile = useMobile();

  const lang = gLang();
  const collator = new Intl.Collator([lang]);
  items.sort((a, b) => collator.compare(a.name, b.name));

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.isMobile]: isMobile,
        [styles.isDesktop]: !isMobile,
      })}
    >
      {items.map((item, i) => (
        <CategoryItem key={`${item.iconCode}${i}`} {...item} />
      ))}
    </div>
  );
};

export default CategoryItemList;
