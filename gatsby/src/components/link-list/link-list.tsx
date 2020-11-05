import React from 'react';
import LinkStyled from '@/components/link-styled';

import useMobile from '@/hooks/useMobile';

interface Props {
  linkList: any;
}

const LinkList: React.FC<Props> = ({ links, variant, fallbackClass }) => {
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
        <p className={fallbackClass}>
          Je nám líto, ale žádná podobná témata prozatím nejsou k dispozici.
        </p>
      )}
    </div>
  );
};

export default LinkList;
