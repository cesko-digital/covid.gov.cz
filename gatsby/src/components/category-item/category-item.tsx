import classNames from 'classnames';
import { KeyboardArrowRight } from '@material-ui/icons';
import Link from '@/components/link';
import ContentIcon from '@/components/content-icon/content-icon';
import React, { FC } from 'react';

import styles from './category-item.module.scss';

type Props = {
  id: string;
  name: string;
  path: string;
  iconCode: string;
  isActive: boolean;
};

const CategoryItem: FC<Props> = ({ name, path, iconCode, isActive }) => {
  console.log({ isActive });
  return (
    <Link
      to={path}
      className={classNames(styles.categoryItem, 'py-2', {
        [styles.isActive]: isActive,
      })}
    >
      <ContentIcon className={styles.categoryItemIcon} code={iconCode} />
      <span className={styles.categoryItemTitle}>{name}</span>
      <div className={styles.chevron}>
        <KeyboardArrowRight style={{ fontSize: 18 }} className="color-yellow" />
      </div>
    </Link>
  );
};

export default CategoryItem;
