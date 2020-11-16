import React, { useState } from 'react';
import { navigate } from 'gatsby';
import classnames from 'classnames';

import Button from '../button';

import styles from './search-box.module.scss';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';

type IProps = {
  initialValue?: string;
};

const SearchBox: React.FC<IProps> = ({ initialValue }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState(initialValue ?? '');
  const currentLanguage = useCurrentLanguage();

  const navigateToSearchResults = () => {
    if (currentLanguage === 'cs') {
      navigate(`/hledat?q=${searchValue}`);
    } else {
      navigate(`/en/search?q=${searchValue}`);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigateToSearchResults();
    }
  };

  return (
    <div
      className={classnames(
        styles.wrapper,
        'search__input-holder search--with-icon',
      )}
    >
      <input
        type="text"
        className={classnames(
          styles.searchBoxInput,
          'form-control search__input',
        )}
        placeholder={t('search_placeholder')}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyDown={keyDownHandler}
      />
      <Button
        onClick={navigateToSearchResults}
        variant="yellow"
        className={classnames(styles.searchButton, 'search__button')}
        text="Hledat"
      />
    </div>
  );
};

export default SearchBox;
