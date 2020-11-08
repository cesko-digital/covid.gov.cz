import React, { FC } from 'react';
import styles from './category-item-list.module.scss';
import CategoryItem from '../category-item/category-item';
import { gLang } from '@/components/i18n';

type Props = {
  title: string;
  items: React.ComponentProps<typeof CategoryItem>[];
};

const makeFirstWordBold = (sentence: string) =>
  sentence.split(' ').reduce((acc, curr, i) => {
    if (i === 0) {
      return (acc += `<strong>${curr}</strong>`);
    }
    return (acc += ' ' + curr);
  }, '');

const CategoryItemList: FC<Props> = ({ items, title }) => {
  const lang = gLang();
  const collator = new Intl.Collator([lang]);
  items.sort((a, b) => collator.compare(a.name, b.name));

  const styledTitle = makeFirstWordBold(title);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{ __html: styledTitle }} />
        <hr />
      </div>
      {items.map((item, i) => (
        <CategoryItem key={`${item.iconCode}${i}`} {...item} />
      ))}
    </div>
  );
};

export default CategoryItemList;
