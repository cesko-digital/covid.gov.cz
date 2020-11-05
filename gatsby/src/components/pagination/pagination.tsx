import classNames from 'classnames';
import React, { useState } from 'react';
import Col from '../col';
import Container from '../container';
import GovIcon from '../gov-icon';
import Row from '../row';
import PaginationButton from './pagination-button';
import classes from './pagination.module.scss';

interface IProps {
  /** How many items should be on one page.
   * ```25 | 50 | 75 | 100``` are recommended
   * but you can pass any number.
   */
  perPage?: 25 | 50 | 75 | 100 | number;
  /** Class applied to container */
  className?: string;
  /** Class applied to ```<Col>``` for each children */
  childClassName?: string;
}

/**
 * Pass any components inside as children.
 * Component will automatically create pagination for them.
 * Component is wrapped in ```<Container>``` and each child will
 * be wrapped in ```<Col col={12}>{child}</Col>```
 */
const Pagination: React.FC<IProps> = ({
  children,
  perPage = 25,
  className = '',
  childClassName = '',
}) => {
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
      return (
        <Col col={12} className={childClassName}>
          {child}
        </Col>
      );
    }
  });

  /**
   * paginator__arrow
   * paginator__link--disabled
   */
  return (
    <Container className={className}>
      {shownChildren}
      <Col col={12}>
        <Row justify="center">
          <div
            className={classNames(
              'paginator__holder',
              classes.paginationContainer,
            )}
          >
            <div className="paginator">
              <ul className="paginator__list">
                <li className="paginator__item pr-0">
                  <a
                    onClick={() => handleChange(currentPage - 1)}
                    className={classNames(
                      'paginator__link',
                      classes.paginationArrow,
                      {
                        'paginator__link--disabled': currentPage === 0,
                      },
                    )}
                  >
                    <GovIcon className="paginator__arrow" icon="arrow-left" />
                  </a>
                </li>
                {getPages(currentPage, pagesCount, handleChange)}
                <li className="paginator__item pr-0">
                  <a
                    onClick={() => handleChange(currentPage + 1)}
                    className={classNames(
                      'paginator__link',
                      classes.paginationArrow,
                      {
                        'paginator__link--disabled':
                          currentPage === pagesCount - 1,
                      },
                    )}
                  >
                    <GovIcon className="paginator__arrow" icon="arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

const getPages = (
  current: number,
  max: number,
  handleChange: (index: number) => void,
): JSX.Element[] => {
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
