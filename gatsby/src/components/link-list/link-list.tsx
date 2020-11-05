import React from 'react';
import LinkStyled from '@/components/link-styled';
import styles from './link-list.module.scss';

import useMobile from '@/hooks/useMobile';

interface Props {
  fallbackText?: string;
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
}

const LinkList: React.FC<Props> = ({ links, fallbackText }) => {
  const isMobile = useMobile();

  const maxItems = isMobile ? 3 : 6;
  return (
    <div>
      {links.length !== 0 ? (
        links
          .slice(0, maxItems)
          .map((link, i) => (
            <LinkStyled key={i} label={link.title} to={link.path.alias} />
          ))
      ) : (
        <p className={styles.linkListFallback}>{fallbackText}</p>
      )}
    </div>
  );
};

export default LinkList;
