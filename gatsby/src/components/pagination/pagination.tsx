import classNames from 'classnames';
import React from 'react';
import Col from '../col';
import GovIcon from '../gov-icon';
import Row from '../row';
import PaginationButton from './pagination-button';
import classes from './pagination.module.scss';

interface IProps {
  /** How many items should be on one page.
   * ```25 | 50 | 75 | 100``` are recommended,
   * however default is **10**.
   * You can pass any number.
   */
  pageCount: number;
  currentPage: number;
  handleChange: (index: number) => void;
}

/**
 * Renders pagination page controls
 * Pass values from usePagination hook
 */
const Pagination: React.FC<IProps> = ({
  pageCount,
  currentPage,
  handleChange,
}) => {
  /**
   * TODO: [Not important at the moment]
   * Update component so it doesn't list all pages, but only chunks
   * Instead of listing all 20 pages
   * < 1 ... 10 11 *12* 13 14 ... 20 >
   */

  if (pageCount <= 1) {
    return null;
  }

  /**
   * paginator__arrow
   * paginator__link--disabled
   */
  return (
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
              {[...Array(pageCount).keys()].map((i) => (
                <PaginationButton
                  key={i}
                  index={i}
                  onClick={handleChange}
                  active={i === currentPage}
                />
              ))}
              <li className="paginator__item pr-0">
                <a
                  onClick={() => handleChange(currentPage + 1)}
                  className={classNames(
                    'paginator__link',
                    classes.paginationArrow,
                    {
                      'paginator__link--disabled':
                        currentPage === pageCount - 1,
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
  );
};

export default Pagination;
