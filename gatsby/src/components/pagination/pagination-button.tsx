import classNames from 'classnames';
import React from 'react';

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
    <li className="paginator__item" onClick={() => onClick(index)}>
      <span className={classNames('paginator__link', { active: active })}>
        {index + 1}
      </span>
    </li>
  );
};

export default PaginationButton;
