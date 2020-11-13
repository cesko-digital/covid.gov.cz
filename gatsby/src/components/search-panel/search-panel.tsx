import classNames from 'classnames';
import React from 'react';
import styles from './search-panel.module.scss';
import SearchBox from '../search-box';
import useSearchEngine from '../search-engine';
import { useCurrentLanguage } from '../i18n';
import Link from '../link';

const SearchPanel: React.FC = () => {
  const currentLanguage = useCurrentLanguage();
  const [onSearch, searchResults] = useSearchEngine();

  const currentLanguageResults = searchResults.filter(
    (result) => result.langcode === currentLanguage,
  );

  const firstFiveResults = currentLanguageResults.slice(0, 5);

  return (
    <div className={styles.wrapper}>
      <SearchBox onSearch={onSearch} />
      <div className={classNames('search__results', styles.search__results)}>
        {firstFiveResults.map((searchItem) => (
          <Link
            key={searchItem.id}
            to={searchItem.path}
            title={searchItem.title}
          >
            {searchItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPanel;
