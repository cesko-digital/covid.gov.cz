import { useMemo, useState } from 'react';
import { Index } from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';
import removeAccents from 'remove-accents';

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
  content: string;
  path: string;
  langcode: string;
  type: string;
};

const useSearchEngine = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const data = useStaticQuery<ISearchIndexQuery>(query);
  const index = useMemo(() => {
    const searchIndex = Index.load<SearchResult>(data.siteSearchIndex.index);
    searchIndex.pipeline.add((token) => removeAccents.remove(token));
    return searchIndex;
  }, []);

  const handleSearch = (term: string) => {
    if (data) {
      const searchedIndex = index.search(term, {
        expand: true,
        fields: {
          title: { boost: 3 },
          content: { boost: 2 },
          path: { boost: 1 },
        },
      });
      const results = searchedIndex.map(({ ref }) =>
        index.documentStore.getDoc(ref),
      );
      setResults(results);
    }
  };

  return [handleSearch, results] as const;
};

export default useSearchEngine;
