import React, { useEffect, useState } from 'react';
import styles from './search-results.module.scss';
import SearchResults from './search-results';
import Button from '../button';
import { useTranslation } from '../i18n';

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
  const totalResultsCount = results.length;
  const [displayedResultsCount, setDisplayedResultsCount] = useState(PAGE_SIZE);
  const { t } = useTranslation();

  const notDisplayedResultsCount = totalResultsCount - displayedResultsCount;

  useEffect(() => {
    setDisplayedResultsCount(PAGE_SIZE);
  }, [results.length]);

  const getTitle = () => {
    if (type === 'measure') {
      if (results.length === 0) {
        return t('not_found_measures');
      }
      return t('count_measures');
    }
    if (type === 'situation') {
      if (results.length === 0) {
        return t('not_found_situations');
      }
      return t('count_situations');
    }
  };

  const loadMore = () => {
    setDisplayedResultsCount(displayedResultsCount + PAGE_SIZE);
  };

  const getMoreItemsButtonCount = () =>
    notDisplayedResultsCount < PAGE_SIZE ? notDisplayedResultsCount : PAGE_SIZE;

  const getMoreText = () => {
    const noOfItems = getMoreItemsButtonCount();
    if (noOfItems === 1) {
      return t(`next_${type}s_singular`);
    }
    if (noOfItems < 5) {
      return t(`next_${type}s_plural_1`);
    }
    return t(`next_${type}s_plural_2`);
  };

  const resultsToDisplay = results.slice(0, displayedResultsCount);
  const hasResultsToLoad = Boolean(results.length - resultsToDisplay.length);

  return (
    <div className={styles.searchResultsCategoryWrapper}>
      <h1>
        {getTitle()
          .replace('{searchValue}', searchValue)
          .replace('{noOfItems}', String(results.length))}
      </h1>
      <SearchResults results={resultsToDisplay} />
      {hasResultsToLoad && (
        <Button
          variant="contained"
          text={getMoreText().replace(
            '{noOfItems}',
            String(getMoreItemsButtonCount()),
          )}
          onClick={loadMore}
        />
      )}
    </div>
  );
};

export default SearchResultsCategory;
