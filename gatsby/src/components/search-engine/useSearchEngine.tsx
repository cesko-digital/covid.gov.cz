import { useRef, useState } from 'react';
import elasticlunr, { Index } from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';

import asciiFolder from 'fold-to-ascii';

export const query = graphql`
  query SearchIndex {
    siteSearchIndex {
      index
    }
  }
`;

const replaceDiacritics = (token) => asciiFolder.fold(token);

elasticlunr.Pipeline.registerFunction(replaceDiacritics, 'replaceDiacritics');

interface SearchResult {
  id: string;
  title: string;
  path: string;
}

const useSearchEngine = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const data = useStaticQuery<ISearchIndexQuery>(query);
  const index = useRef(Index.load<SearchResult>(data.siteSearchIndex.index));

  console.log({ data, index, results });

  const handleSearch = (term: string) => {
    if (data) {
      const results = index.current
        .search(term, {
          expand: true,
          fields: { title: { boost: 2 }, path: { boost: 1 } },
        })
        .map(({ ref }) => index.current.documentStore.getDoc(ref));
      console.log({ data, index, results });
      setResults(results);
    }
  };

  return [handleSearch, results] as const;
};

export default useSearchEngine;
