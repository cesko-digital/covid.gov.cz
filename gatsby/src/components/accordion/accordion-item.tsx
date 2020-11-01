import React from 'react';
import Link from '@/components/link';

import styles from './accordion-item.module.scss';

export interface Item {
  title: string;
  href: string;
}

const AccordionItem: React.FC<Item> = ({ title, href }) => {
  return (
    <div className={styles.item}>
      <Link label={title} to={href} />
    </div>
  );
};

export default AccordionItem;
