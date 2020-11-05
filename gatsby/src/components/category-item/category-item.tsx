import MdIcon from '@/components/md-icon';
import Icon from '@/components/icon';
import Link from '@/components/link';
import React, { FC } from 'react';

import styles from './category-item.module.scss';

type Props = {
  name: string;
  path: string;
  iconCode: string;
  iconFamily: string;
};

const CategoryItem: FC<Props> = ({ name, path, iconCode, iconFamily }) => {
  return (
    <Link to={path} className={styles.categoryItem}>
      {/* TODO: Replace with actual icons */}
      <Icon
        icon={iconCode}
        family={iconFamily}
        className={styles.categoryItemIcon}
      />
      <span className={styles.categoryItemTitle}>{name}</span>
      <MdIcon icon="keyboard_arrow_right" size={16} className="color-yellow" />
    </Link>
  );
};

export default CategoryItem;
