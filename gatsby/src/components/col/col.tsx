import React from 'react';

type ColSize =
  | boolean
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
interface IProps {
  col?: ColSize;
  colSm?: ColSize;
  colMd?: ColSize;
  colLg?: ColSize;
  colXl?: ColSize;
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
  const getClassNames = (): string => {
    let strng = '';
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
  return <div className={getClassNames()}>{children}</div>;
};

export default Col;
