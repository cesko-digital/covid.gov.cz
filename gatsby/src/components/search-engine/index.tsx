import React, { useRef, useState } from 'react';
import { Index } from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';
import { IQuery } from 'graphql-types';

export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`;

interface SearchResult {
  id: string;
  title: string;
  path: string;
}

interface IProps {
  children: ({
    onSearch,
    searchResults,
  }: {
    onSearch: (term: string) => void;
    searchResults: SearchResult[];
  }) => React.ReactElement;
}

const SearchEngine: React.FC<IProps> = ({ children }) => {
  const [results, setResults] = useState([]);
  const data = useStaticQuery<IQuery>(query);
  const index = useRef(Index.load<SearchResult>(data.siteSearchIndex.index));

  const handleSearch = (term: string) => {
    const results = index.current
      .search(term, { expand: true })
      .map(({ ref }) => index.current.documentStore.getDoc(ref));
    setResults(results);
  };

  return children({ onSearch: handleSearch, searchResults: results });
};

export default SearchEngine;
