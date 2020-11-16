import React, { useState } from 'react';
import styles from './search-results.module.scss';
import SearchResults from './search-results';
import Button from '../button';

interface Props {
  results: React.ComponentProps<typeof SearchResults>['results'];
  type: 'situation' | 'measure';
  searchValue: string;
}

const PAGE_SIZE = 5;

const SearchResultsCategory: React.FC<Props> = ({
  results,
  type,
  searchValue,
}) => {
  const [numberOfItems, setNumberOfItems] = useState(PAGE_SIZE);
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

  const loadMore = () => {
    setNumberOfItems(numberOfItems + PAGE_SIZE);
  };

  const getMoreText = () => {
    const noOfItems = results.length < PAGE_SIZE ? results.length : PAGE_SIZE;
    if (type === 'measure') {
      return `Dalších ${noOfItems} životních situací`;
    }
    if (type === 'situation') {
      return `Dalších ${noOfItems} aktuálních opatření`;
    }
  };

  const resultsToDisplay = results.slice(0, numberOfItems);
  const hasResultsToLoad = Boolean(results.length - resultsToDisplay.length);
  return (
    <div className={styles.searchResultsCategoryWrapper}>
      <h1>{getTitle()}</h1>
      <SearchResults results={resultsToDisplay} />
      {hasResultsToLoad && (
        <Button variant="contained" text={getMoreText()} onClick={loadMore} />
      )}
    </div>
  );
};

export default SearchResultsCategory;
