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
    <div>
      {links.length !== 0 ? (
        links
          .slice(0, maxItems)
          .map((link, i) => (
            <LinkStyled label={link.title} to={link.path.alias} />
          ))
      ) : (
        <p className={styles.linkListFallback}>
          Je nám líto, ale žádná podobná témata prozatím nejsou k dispozici.
        </p>
      )}
    </div>
  );
};

export default LinkList;
