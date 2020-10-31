import React from 'react';

interface IProps {
  className?: string;
  justify?: 'start' | 'center' | 'end' | 'around' | 'between';
  alignItems?: 'start' | 'center' | 'end';
}

const Row: React.FC<IProps> = ({
  children,
  className = '',
  justify,
  alignItems,
}) => {
  const classes = () => {
    var strng = '';

    if (justify) {
      strng += `justify-content-${justify} `;
    }
    if (alignItems) {
      strng += `align-items-${alignItems} `;
    }

    strng += className;
    strng = strng.trim();
    return strng;
  };

  return <div className={`row ${classes()}`}>{children}</div>;
};

export default Row;
