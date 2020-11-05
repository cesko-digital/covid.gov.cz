import { Container } from '@material-ui/core';
import classNames from 'classnames';
import React, { useState } from 'react';
import Col from '../col';
import GovIcon from '../gov-icon';
import PaginationButton from './pagination-button';

interface IProps {
  perPage?: 25 | 50 | 75 | 100 | number;
}

const Pagination: React.FC<IProps> = ({ children, perPage = 25 }) => {
  const count = React.Children.count(children);

  const pagesCount = Math.ceil(count / perPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (newIndex: number) => {
    if (newIndex < 0 || newIndex > pagesCount - 1) {
      return;
    }
    setCurrentPage(newIndex);
  };

  // Get children that should be visible
  const shownChildren = React.Children.map(children, (child, index) => {
    const endIndex = currentPage * perPage + perPage;
    const startIndex = endIndex - perPage;

    if (index >= startIndex && index < endIndex) {
      return child;
    }
  });

  /**
   * paginator__arrow
   * paginator__link--disabled
   */
  return (
    <>
      <Container>
        {shownChildren}
        <Col col={12}>
          <div className="paginator__holder">
            <div className="paginator">
              <ul className="paginator__list">
                <li className="paginator__item pr-0">
                  <a
                    onClick={() => handleChange(currentPage - 1)}
                    className={classNames('paginator__link', {
                      'paginator__link--disabled': currentPage === 0,
                    })}
                  >
                    <GovIcon className="paginator__arrow" icon="arrow-left" />
                  </a>
                </li>
                {getPages(currentPage, pagesCount, handleChange)}
                <li className="paginator__item pr-0">
                  <a
                    onClick={() => handleChange(currentPage + 1)}
                    className={classNames('paginator__link', {
                      'paginator__link--disabled':
                        currentPage === pagesCount - 1,
                    })}
                  >
                    <GovIcon className="paginator__arrow" icon="arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
};

const getPages = (
  current: number,
  max: number,
  handleChange: (index: number) => void,
) => {
  const pags: JSX.Element[] = [];
  for (let i = 0; i < max; i++) {
    pags.push(
      <PaginationButton
        index={i}
        onClick={handleChange}
        active={i === current}
      />,
    );
  }
  return pags;
};

export default Pagination;
