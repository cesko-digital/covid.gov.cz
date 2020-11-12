import React, { FC } from 'react';
import styles from './category-item-list.module.scss';
import CategoryItem from '../category-item/category-item';
import I18n, { gLang } from '@/components/i18n';
import Link from '@/components/link';
import { KeyboardArrowLeft } from '@material-ui/icons';
import ContentIcon from '../content-icon';

type Props = {
  title: string;
  titleIconCode?: string;
  linkBack?: {
    title: string;
    slug: string;
  };
  items: React.ComponentProps<typeof CategoryItem>[];
};

const makeFirstWordBold = (sentence: string) =>
  sentence.split(' ').reduce((acc, curr, i) => {
    if (i === 0) {
      return (acc += `<strong>${curr}</strong>`);
    }
    return (acc += ' ' + curr);
  }, '');

const CategoryItemList: FC<Props> = ({
  items,
  title,
  titleIconCode,
  linkBack,
}) => {
  const lang = gLang();
  const collator = new Intl.Collator([lang]);
  items.sort((a, b) => collator.compare(a.name, b.name));

  const styledTitle = makeFirstWordBold(title);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>
          {titleIconCode && (
            <ContentIcon code={titleIconCode} className={styles.icon} />
          )}
          <span dangerouslySetInnerHTML={{ __html: styledTitle }} />
        </h2>
        {linkBack ? (
          <Link className={styles.linkBack} to={linkBack.slug}>
            <KeyboardArrowLeft
              style={{ fontSize: 18 }}
              className={styles.chevron}
            />{' '}
            <span>
              {I18n('back_to')}&nbsp;{linkBack.title}
            </span>
          </Link>
        ) : (
          <hr />
        )}
      </div>
      {items.map((item, i) => (
        <CategoryItem key={`${item.iconCode}${i}`} {...item} />
      ))}
    </div>
  );
};

export default CategoryItemList;
