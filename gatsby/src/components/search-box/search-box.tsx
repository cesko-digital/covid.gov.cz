import React, { useState } from 'react';
import Autosuggest, {
  SuggestionsFetchRequested,
  InputProps,
  OnSuggestionSelected,
  RenderSuggestionsContainer,
} from 'react-autosuggest';
import classnames from 'classnames';

import Button from '../button';
import GovIcon from '../gov-icon';

import styles from './search-box.module.scss';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';
import useSearchEngine from '../search-engine';
import { SearchResult } from '../search-engine/useSearchEngine';
import Link from '../link';
import { navigate } from 'gatsby';

const SearchBox: React.FC = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const currentLanguage = useCurrentLanguage();
  const [onSearch, searchResults] = useSearchEngine();

  const currentLanguageResults = searchResults.filter(
    (result) => result.langcode === currentLanguage,
  );

  const firstFiveResults = currentLanguageResults.slice(0, 5);

  const renderSuggestion = (item: SearchResult) => (
    <Link key={item.id} to={item.path} title={item.title}>
      {item.title}
    </Link>
  );

  const handleFetchRequest: SuggestionsFetchRequested = ({ value, reason }) => {
    console.log({ value, reason });
  };

  const onChangeHandler: InputProps<SearchResult>['onChange'] = (_, params) => {
    setSearchValue(params.newValue);
    onSearch(params.newValue);
  };

  const getSuggestionValue = () => {
    return searchValue;
  };

  const suggestionSelectedHandler: OnSuggestionSelected<SearchResult> = (
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
    <Autosuggest
      suggestions={firstFiveResults}
      onSuggestionsFetchRequested={handleFetchRequest}
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
      alwaysRenderSuggestions
    />
  );

  // return (
  //   <div className="search">
  //     <div
  //       className={classnames(
  //         classes.searchBox,
  //         'search__input-holder search--with-icon',
  //       )}
  //     >
  //       <input
  //         type="text"
  //         placeholder={placeholder ?? t('search_placeholder')}
  //         onChange={onChangeHandler}
  //         value={searchValue}
  //       />
  //       <Button
  //         icon={<GovIcon icon="search" className="search__button--icon" />}
  //         onClick={submitButtonHandler}
  //         variant="yellow"
  //         className="search__button color-white"
  //       />
  //     </div>
  //   </div>
  // );
};

export default SearchBox;
