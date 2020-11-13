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
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.length < 1) {
      return;
    }

    if (onSearch) {
      onSearch(search);
    }
    console.log('Search:', search);
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
          placeholder={placeholder ?? t('search_placeholder')}
          onChange={(event) => setSearch(event.currentTarget.value)}
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
