import classNames from 'classnames';
import React from 'react';
import styles from './bg-img.module.scss';

const getClass = (overlap: BgImgOverlap, additionalClass?: string): string => {
  return classNames(
    { [styles.bgImgOverlapLg]: overlap === 'lg' },
    { [styles.bgImgOverlapMd]: overlap === 'md' },
    { [styles.bgImgOverlapSm]: overlap === 'sm' },
    { [styles.bgImg]: styles.bgImg },
    { [additionalClass]: additionalClass },
  );
};

export type BgImgOverlap = 'lg' | 'md' | 'sm';

interface IProps {
  children?: any;
  overlap?: BgImgOverlap;
  className?: string;
}

const BgImg: React.FC<IProps> = ({ children, className, overlap }) => {
  return <div className={getClass(overlap, className)}>{children}</div>;
};

export default BgImg;
