import React, { useState } from 'react';
import Button from '../button';
import Col from '../col';
import GovIcon from '../gov-icon';

interface IProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
}

const SearchBox: React.FC<IProps> = ({
  placeholder = 'Vyhledat',
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
    console.log('Search:', search);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Col col={12} colMd={4}>
      <div className="search">
        <div className="search__input-holder search--with-icon">
          <input
            type="text"
            className="form-control search__input"
            placeholder={placeholder}
            onChange={(event) => setSearch(event.currentTarget.value)}
            value={search}
            onKeyDown={handleKeyDown}
          />
          <Button
            icon={<GovIcon icon="search" className="search__button--icon" />}
            onClick={handleSearch}
            className="search__button"
          />
        </div>
      </div>
    </Col>
  );
};

export default SearchBox;
