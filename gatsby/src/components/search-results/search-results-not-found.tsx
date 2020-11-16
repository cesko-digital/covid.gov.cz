import React from 'react';
import { useTranslation } from '../i18n';
import styles from './search-results.module.scss';

const SearchResultsNotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.notFoundWrapper}>
      <h1>{t('search_not_found')}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: t('search_hint')
            .replace('{firstHint}', '<span>rouška</span>')
            .replace('{secondHint}', '<span>nakupování</span>')
            .replace('{thirdHint}', '<span>obchody</span>'),
        }}
      />
    </div>
  );
};

export default SearchResultsNotFound;
