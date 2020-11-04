import React from 'react';
import LinkStyled from '@/components/link-styled';
import styles from './link-list.module.scss';
import useMobile from '@/hooks/useMobile';

interface Props {
  linkList: any;
}

const LinkList: React.FC<Props> = ({ links, variant }) => {
  const isMobile = useMobile();

  const maxItems = isMobile ? 3 : 6;
  return (
    <div className={styles.linkList}>
      {links.slice(0, maxItems).map((link, i) => (
        <LinkStyled label={link.title} to={link.href} />
      ))}
    </div>
  );
};

export default LinkList;
