import React from 'react';
import classNames from 'classnames';
import Link from '@/components/link';
import { ArrowRightOutlined } from '@material-ui/icons';

import styles from './accordion-item.module.scss';

export interface Item {
  text: string;
  href?: string;
}

const AccordionItem: React.FC<Item> = ({ text, href }) => {
  return (
    <div className={styles.item}>
      {href ? (
        <Link
          className={classNames(
            styles.itemLink,
            'd-flex',
            'justify-content-between',
            'align-items-center',
          )}
          label={text}
          to={href}
        >
          {text}
          <ArrowRightOutlined />
        </Link>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default AccordionItem;
