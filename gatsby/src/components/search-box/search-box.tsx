import React, { useState } from 'react';
import { navigate } from 'gatsby';
import classnames from 'classnames';

import Button from '../button';

import styles from './search-box.module.scss';
import { useCurrentLanguage, useTranslation } from '@/components/i18n';
import useMobile from '@/hooks/useMobile';

type IProps = {
  initialValue?: string;
  size?: 'default' | 'small';
  className?: string;
};

const SearchBox: React.FC<IProps> = (
  props = {
    initialValue: '',
    size: 'default',
  },
) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState(props.initialValue);
  const currentLanguage = useCurrentLanguage();
  const isMobile = useMobile();

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

  const isSmall = props.size === 'small';

  return (
    <div
      className={classnames(
        props.className,
        styles.wrapper,
        'search__input-holder search--with-icon',
      )}
    >
      <input
        type="text"
        className={classnames(
          styles.searchBoxInput,
          'form-control search__input',
          {
            [styles.searchBoxInputSmall]: isSmall,
          },
        )}
        placeholder={isMobile ? t('search_cta') : t('search_placeholder')}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyDown={keyDownHandler}
      />
      <Button
        onClick={navigateToSearchResults}
        variant="yellow"
        className={classnames(styles.searchButton, 'search__button', {
          'btn-sm': isSmall,
          [styles.searchButtonSmall]: isSmall,
        })}
        text={t('search_button')}
      />
    </div>
  );
};

export default SearchBox;
