import classNames from 'classnames';
import React from 'react';
import styles from './search-results.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Result } from '../search-engine/useSearchEngine';
import sanitizeHtml from 'sanitize-html';
import Row from '../row';
import Col from '../col';
import Button from '../button';

interface Props {
  results: Result[];
}

const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <>
      {results.map((result) => {
        return (
          <div key={result.id} className={styles.resultWrapper}>
            <Row>
              <Col col={12} colMd={10}>
                <h3>
                  <a href={result.path}>
                    {result.title}
                    <KeyboardArrowRight
                      style={{ fontSize: 26 }}
                      className={classNames(
                        'color-yellow',
                        styles.chevronRight,
                      )}
                    />
                  </a>
                </h3>
                <p>{sanitizeHtml(result.content, { allowedTags: [] })}</p>
              </Col>
              <Col colMd={2}>
                <Button
                  href={result.path}
                  variant="outline-yellow"
                  text="Detail"
                  className={styles.linkButton}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
