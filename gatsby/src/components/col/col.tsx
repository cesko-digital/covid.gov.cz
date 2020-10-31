import React from 'react';

interface IProps {
  col?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colSm?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colMd?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colLg?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colXl?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Col: React.FC<IProps> = ({
  children,
  col = false,
  colSm = false,
  colMd = false,
  colLg = false,
  colXl = false,
}) => {
  const getClass = (): string => {
    var strng = '';
    if (col) {
      strng += typeof col === 'boolean' ? 'col ' : `col-${col} `;
    }
    if (colSm) {
      strng += typeof colSm === 'boolean' ? 'col ' : `col-${colSm} `;
    }
    if (colMd) {
      strng += typeof colMd === 'boolean' ? 'col ' : `col-${colMd} `;
    }
    if (colLg) {
      strng += typeof colLg === 'boolean' ? 'col ' : `col-${colLg} `;
    }
    if (colXl) {
      strng += typeof colXl === 'boolean' ? 'col ' : `col-${colXl} `;
    }
    strng = strng.trim();
    return strng;
  };
  return <div className={getClass()}>{children}</div>;
};

export default Col;
