import classNames from 'classnames';
import React from 'react';
import classes from './pagination-button.module.scss';

interface IProps {
  index: number;
  active: boolean;
  onClick: (index: number) => void;
}

const PaginationButton: React.FC<IProps> = ({
  index,
  active,
  onClick,
  children,
}) => {
  // paginator__link active
  return (
    <li
      className={classNames('paginator__item', classes.paginationClickItem)}
      onClick={() => onClick(index)}
    >
      <span
        className={classNames(
          'paginator__link',
          { active: active },
          classes.paginationInnerItem,
        )}
      >
        {index + 1}
        {children}
      </span>
    </li>
  );
};

export default PaginationButton;
