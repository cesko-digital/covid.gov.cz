import { useEffect, useRef, useState } from 'react';
import { Index, Pipeline } from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';

import asciiFolder from 'fold-to-ascii';

const replaceDiacritics = (token) => asciiFolder.fold(token);

export const query = graphql`
  query SearchIndex {
    siteSearchIndex {
      index
    }
  }
`;

export type SearchResult = {
  id: string;
  title: string;
  path: string;
  langcode: string;
};

const useSearchEngine = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const data = useStaticQuery<ISearchIndexQuery>(query);
  const index = useRef(Index.load<SearchResult>(data.siteSearchIndex.index));

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

  useEffect(() => {
    Pipeline.registerFunction(replaceDiacritics, 'replaceDiacritics');

    console.log(Index, Pipeline);
  }, []);
  return [handleSearch, results] as const;
};

export default useSearchEngine;
