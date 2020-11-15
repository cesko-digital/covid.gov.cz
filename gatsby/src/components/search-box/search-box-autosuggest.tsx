import React, { useState } from 'react';
import Autosuggest, {
  SuggestionsFetchRequested,
  InputProps,
  OnSuggestionSelected,
  RenderSuggestionsContainer,
  RenderSuggestion,
} from 'react-autosuggest';
import classnames from 'classnames';

// import Button from '../button';
// import GovIcon from '../gov-icon';

import styles from './search-box.module.scss';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';
import useSearchEngine from '../search-engine';
import { IndexedResult } from '../search-engine/useSearchEngine';
import Link from '../link';
import { navigate } from 'gatsby';

const SearchBox: React.FC = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const currentLanguage = useCurrentLanguage();
  const [onSearch, searchResults] = useSearchEngine();

  const firstFiveResults = searchResults.slice(0, 5);

  const renderSuggestion: RenderSuggestion<IndexedResult> = (
    item,
    { isHighlighted },
  ) => (
    <Link
      key={item.id}
      to={item.path}
      title={item.title}
      className={classnames({ [styles.isHighlighted]: isHighlighted })}
    >
      {item.title}
    </Link>
  );

  const handleFetchRequest: SuggestionsFetchRequested = ({ value }) => {
    onSearch(value);
  };

  const onChangeHandler: InputProps<IndexedResult>['onChange'] = (
    _,
    params,
  ) => {
    setSearchValue(params.newValue);
  };

  const getSuggestionValue = () => {
    return searchValue;
  };

  const suggestionSelectedHandler: OnSuggestionSelected<IndexedResult> = (
    _,
    { suggestion },
  ) => {
    if (currentLanguage !== 'cs') {
      return navigate(`/${suggestion.langcode}${suggestion.path}`);
    }
    return navigate(suggestion.path);
  };

  const renderSuggestionContainer: RenderSuggestionsContainer = ({
    containerProps,
    children,
  }) => {
    return (
      <div {...containerProps} className={styles.search__results}>
        {children}
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Autosuggest
        suggestions={firstFiveResults}
        onSuggestionsFetchRequested={handleFetchRequest}
        onSuggestionsClearRequested={() => {}}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: t('search_placeholder'),
          onChange: onChangeHandler,
          value: searchValue,
          className: classnames(
            styles.searchBoxInput,
            'form-control search__input',
          ),
        }}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={suggestionSelectedHandler}
        highlightFirstSuggestion
        renderSuggestionsContainer={renderSuggestionContainer}
        shouldRenderSuggestions={(value) => value.length > 2}
      />
    </div>
  );
};

export default SearchBox;
