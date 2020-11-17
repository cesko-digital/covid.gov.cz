import React from 'react';
import classNames from 'classnames';
import LinkStyled from '@/components/link-styled';
import styles from './link-list.module.scss';

interface Props {
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
  variant: 'blue' | 'white';
}

const LinkList: React.FC<Props> = ({ links, variant }) => {
  if (links.length === 0) {
    return null;
  }
  return (
    <div>
      {links.map((link, i) => (
        <LinkStyled
          key={i}
          variant={variant}
          title={link.title}
          to={link.path.alias}
        />
      ))}
    </div>
  );
};

export default LinkList;
