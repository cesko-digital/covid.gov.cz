import { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';
import removeAccents from 'remove-accents';
import MiniSearch, { SearchResult } from 'minisearch';
import sanitizeHtml from 'sanitize-html';

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
  const miniSearch = useMemo(
    () =>
      MiniSearch.loadJSON<Result>(
        JSON.stringify(data.siteMiniSearchIndex.index),
        {
          fields: ['title', 'content'],
          processTerm: (term) => {
            const withoutAccents = removeAccents.remove(term);
            const lowerCase = withoutAccents.toLocaleLowerCase();
            const withoutHtml = sanitizeHtml(lowerCase, { allowedTags: [] });
            return withoutHtml;
          },
          searchOptions: {
            processTerm: (term) => {
              return removeAccents.remove(term).toLocaleLowerCase();
            },
            boost: { title: 2, content: 1 },
            prefix: true,
            fuzzy: 0.2,
          },
        },
      ),
    [],
  );

  const handleSearch = (term: string) => {
    if (data) {
      const results = miniSearch.search(term) as Result[];
      setResults(results);
    }
  };
  return [handleSearch, results] as const;
};

export default useSearchEngine;
