import React from 'react';

interface IProps {
  col?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colSm?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colMd?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colLg?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colXl?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  alignSelf?: 'start' | 'center' | 'end';
}

const Col: React.FC<IProps> = ({
  children,
  col,
  colSm,
  colMd,
  colLg,
  colXl,
  className = '',
  alignSelf,
}) => {
  const getClass = (): string => {
    var strng = '';
    if (col) {
      strng += typeof col === 'boolean' ? 'col ' : `col-${col} `;
    }
    if (colSm) {
      strng += typeof colSm === 'boolean' ? 'col-sm ' : `col-sm-${colSm} `;
    }
    if (colMd) {
      strng += typeof colMd === 'boolean' ? 'col-md ' : `col-md-${colMd} `;
    }
    if (colLg) {
      strng += typeof colLg === 'boolean' ? 'col-lg ' : `col-lg-${colLg} `;
    }
    if (colXl) {
      strng += typeof colXl === 'boolean' ? 'col-xl ' : `col-xl-${colXl} `;
    }
    if (alignSelf) {
      strng += `align-self-${alignSelf} `;
    }
    strng += className;
    strng = strng.trim();
    return strng;
  };
  return <div className={getClass()}>{children}</div>;
};

export default Col;
