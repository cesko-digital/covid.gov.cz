import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './category-item-list.module.scss';
import CategoryItem from '../category-item/category-item';
import Link from '@/components/link';
import { KeyboardArrowLeft } from '@material-ui/icons';
import ContentIcon from '../content-icon';
import { useCurrentLanguage, useTranslation } from '../i18n';

type Props = {
  title: string;
  titleIconCode?: string;
  linkBack?: {
    title: string;
    slug: string;
  };
  items: React.ComponentProps<typeof CategoryItem>[];
  theme: 'white' | 'blue';
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
  theme,
}) => {
  const currentLanguage = useCurrentLanguage();
  const { t } = useTranslation();
  const collator = new Intl.Collator([currentLanguage]);
  items.sort((a, b) => collator.compare(a.name, b.name));

  const styledTitle = makeFirstWordBold(title);

  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        [styles.whiteTheme]: theme === 'white',
        [styles.blueTheme]: theme === 'blue',
      })}
    >
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
              {t('back_to')}&nbsp;{linkBack.title}
            </span>
          </Link>
        ) : (
          <hr />
        )}
      </div>
      {items.map((item, i) => (
        <CategoryItem theme={theme} key={`${item.iconCode}${i}`} {...item} />
      ))}
    </div>
  );
};

export default CategoryItemList;
