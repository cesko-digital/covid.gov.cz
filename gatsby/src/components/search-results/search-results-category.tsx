import React from 'react';
import styles from './search-results.module.scss';
import SearchResults from './search-results';

interface Props {
  results: React.ComponentProps<typeof SearchResults>['results'];
  type: 'situation' | 'measure';
  searchValue: string;
}

const SearchResultsCategory: React.FC<Props> = ({
  results,
  type,
  searchValue,
}) => {
  const getTitle = () => {
    if (type === 'measure') {
      return `“${searchValue}” v aktuálních opatřeních ${
        results.length > 0 ? `(${results.length})` : 'nenalezeno'
      }`;
    }
    if (type === 'situation') {
      return `“${searchValue}” v životních situacích ${
        results.length > 0 ? `(${results.length})` : 'nenalezeno'
      }`;
    }
  };
  return (
    <div className={styles.searchResultsCategoryWrapper}>
      <h1>{getTitle()}</h1>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchResultsCategory;
