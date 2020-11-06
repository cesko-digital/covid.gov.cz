import React, { useState } from 'react';
import classnames from 'classnames';
import I18n from '@/components/i18n';

import Button from '../button';
import GovIcon from '../gov-icon';

import classes from './search-box.module.scss';

interface IProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
}

const SearchBox: React.FC<IProps> = ({
  placeholder = I18n('search_placeholder'),
  onSearch,
}) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.length < 1) {
      return;
    }

    if (onSearch) {
      onSearch(search);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
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
          placeholder={placeholder}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            handleSearch();
          }}
          value={search}
          onKeyDown={handleKeyDown}
        />
        <Button
          icon={<GovIcon icon="search" className="search__button--icon" />}
          onClick={handleSearch}
          variant="yellow"
          className="search__button color-white"
        />
      </div>
    </div>
  );
};

export default SearchBox;
