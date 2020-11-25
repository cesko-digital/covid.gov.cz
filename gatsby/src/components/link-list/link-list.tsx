import React from 'react';
import LinkStyled from '@/components/link-styled';

interface Props {
  links: Array<{
    path?: { alias?: string; langcode?: string };
    title?: string;
  }>;
}

const LinkList: React.FC<Props> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }
  return (
    <>
      {links.map((link, i) => (
        <LinkStyled key={i} title={link.title} to={link.path.alias} />
      ))}
    </>
  );
};

export default LinkList;
