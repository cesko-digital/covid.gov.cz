import React from 'react';
import styles from './search-results.module.scss';

const SearchResultsNotFound: React.FC = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h1>Bohužel, pro hledaný výraz jsme nic nenašli...</h1>
      <p>
        Zkuste zadat do vyhledávání jen jedno slovo, např.: <span>rouška</span>,{' '}
        <span>nakupování</span>, nebo <span>obchody</span>.
      </p>
    </div>
  );
};

export default SearchResultsNotFound;
