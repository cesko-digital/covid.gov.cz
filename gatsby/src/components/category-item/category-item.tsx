import { KeyboardArrowRight } from '@material-ui/icons';
import { Link } from 'gatsby';
import React, { FC } from 'react';

import styles from './category-item.module.scss';

type Props = {
  name: string;
  path: string;
};

const CategoryItem: FC<Props> = ({ name, path }) => {
  return (
    <Link to={path} className={styles.categoryItem}>
      <span className={styles.categoryItemTitle}>{name}</span>
      <KeyboardArrowRight style={{ fontSize: 16 }} className="color-yellow" />
    </Link>
  );
};

export default CategoryItem;
