import React from 'react';
import LinkStyled from '@/components/link-styled';

interface Props {
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
}

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <div>
      {links.length !== 0
        ? links.map((link, i) => (
            <LinkStyled key={i} label={link.title} to={link.path.alias} />
          ))
        : ''}
    </div>
  );
};

export default LinkList;
