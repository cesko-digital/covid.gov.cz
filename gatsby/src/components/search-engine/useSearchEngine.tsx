import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';
import { SearchResult } from 'minisearch';

export const query = graphql`
  query SearchIndex {
    siteMiniSearchIndex {
      index
    }
  }
`;

export type IndexedResult = {
  id: string;
  title: string;
  content: string;
  path: string;
  langcode: string;
  type: string;
};

export type Result = IndexedResult & SearchResult;

const useSearchEngine = () => {
  const [results, setResults] = useState<Result[]>([]);
  const data = useStaticQuery<ISearchIndexQuery>(query);

  const handleSearch = (term: string) => {
    if (data) {
      const results = data.siteMiniSearchIndex.index.search(term) as Result[];
      setResults(results);
    }
  };

  return [handleSearch, results] as const;
};

export default useSearchEngine;
