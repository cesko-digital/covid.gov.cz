import classNames from 'classnames';
import React from 'react';
import styles from './search-results.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Result } from '../search-engine/useSearchEngine';
import sanitizeHtml from 'sanitize-html';
import Row from '../row';
import Col from '../col';
import Button from '../button';
import { useTranslation } from '../i18n';
import Breadcrumb from '../breadcrumb';

interface Props {
  results: Result[];
}

const SearchResults: React.FC<Props> = ({ results }) => {
  const { t } = useTranslation();
  const getBreadcrumbCategory = (type: string) => ({
    title: type === 'measure' ? t('current_measures') : t('life_situations'),
    url: type === 'measure' ? t('slug_measures') : t('slug_situations'),
  });

  return (
    <>
      {results.map((result) => {
        return (
          <div key={result.id} className={styles.resultWrapper}>
            <Row>
              <Col col={12} colMd={10}>
                <h3>
                  <a href={result.path} className={styles.titleLink}>
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
                <div className={styles.breadcrumbWrapper}>
                  <Breadcrumb
                    items={[
                      t('home'),
                      getBreadcrumbCategory(result.type),
                      {
                        title: result.area?.name,
                        url: result.area?.path?.alias,
                      },
                    ]}
                  />
                </div>
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
