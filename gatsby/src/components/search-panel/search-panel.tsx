import React from 'react';
import classNames from 'classnames';
import Container from '@/components/container';
import SearchBox from '@/components/search-box';
import Col from '@/components/col';
import styles from './search-panel.module.scss';
import { useCurrentLanguage, useTranslation } from '../i18n';

interface IProps {
  resultsTotal: number;
  initialValue?: string;
}

const SearchPanel: React.FC<IProps> = ({ resultsTotal, initialValue }) => {
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();

  const getTotalResultPlural = () => {
    if (currentLanguage === 'cs') {
      if (resultsTotal < 5) {
        return t('num_results_plural_2');
      }
      return t('num_results_plural_1');
    }
    if (currentLanguage === 'en') {
      if (resultsTotal === 1) {
        return t('num_results_plural_1');
      }
      return t('num_results_plural_2');
    }
  };
  return (
    <Container>
      <div
        className={classNames(
          'd-flex',
          'flex-column',
          'justify-content-center',
          'align-items-center',
          styles.wrapper,
        )}
      >
        <Col col={12} colMd={6} colXl={5}>
          <h1 className={styles.title}>{t('search_results')}</h1>
          <SearchBox initialValue={initialValue} />
          {Boolean(resultsTotal) && (
            <div className={styles.resultsTotal}>
              {t('found')}{' '}
              <span>
                {getTotalResultPlural().replace(
                  '{resultsTotal}',
                  String(resultsTotal),
                )}
              </span>
            </div>
          )}
        </Col>
      </div>
    </Container>
  );
};

export default SearchPanel;
