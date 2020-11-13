import React, { useState } from 'react';
import classnames from 'classnames';

import Button from '../button';
import GovIcon from '../gov-icon';

import classes from './search-box.module.scss';
import { useTranslation } from '@/components/i18n';

interface IProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
}

const SearchBox: React.FC<IProps> = ({ placeholder, onSearch }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);

    handleSearch(value);
  };

  const handleSearch = (searchPhrase: string) => {
    if (searchPhrase.length > 2) {
      onSearch(searchPhrase);
    }
  };

  const submitButtonHandler = () => {
    handleSearch(searchValue);
  };

  return (
    <div className="search">
      <div
        className={classnames(
          classes.searchBox,
          'search__input-holder search--with-icon',
        )}
      >
        <input
          type="text"
          className={classnames(
            classes.searchBoxInput,
            'form-control search__input',
          )}
          placeholder={placeholder ?? t('search_placeholder')}
          onChange={onChangeHandler}
          value={searchValue}
        />
        <Button
          icon={<GovIcon icon="search" className="search__button--icon" />}
          onClick={submitButtonHandler}
          variant="yellow"
          className="search__button color-white"
        />
      </div>
    </div>
  );
};

export default SearchBox;
