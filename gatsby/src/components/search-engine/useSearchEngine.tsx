import { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';
import removeAccents from 'remove-accents';
import MiniSearch, { SearchResult } from 'minisearch';
import { useCurrentLanguage } from '../i18n';

export const query = graphql`
  query SearchIndex {
    siteMiniSearchIndex {
      index
    }
    allSituation {
      edges {
        node {
          __typename
          id
          relationships {
            area: situation_type {
              id
              name
              path {
                alias
              }
            }
          }
        }
      }
    }
    allMeasure {
      edges {
        node {
          __typename
          id
          relationships {
            area: measure_type {
              id
              name
              path {
                alias
              }
            }
          }
        }
      }
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
  area?: {
    name: string;
    path?: {
      alias?: string;
    };
  };
};

export type Result = IndexedResult & SearchResult;

const useSearchEngine = () => {
  const [results, setResults] = useState<Result[]>([]);
  const data = useStaticQuery<ISearchIndexQuery>(query);
  const currentLanguage = useCurrentLanguage();
  const dataById = useMemo(() => {
    return [...data.allMeasure.edges, ...data.allSituation.edges].reduce(
      (acc, { node }) => {
        acc[node.id] = node;
        return acc;
      },
      {},
    );
  }, []);

  const miniSearch = useMemo(
    () =>
      MiniSearch.loadJSON<Result>(
        JSON.stringify(data.siteMiniSearchIndex.index),
        {
          fields: ['title', 'content'],
          searchOptions: {
            processTerm: (term) => {
              return removeAccents.remove(term).toLocaleLowerCase();
            },
            boost: { title: 3, content: 1 },
            prefix: true,
            fuzzy: 0.2,
          },
        },
      ),
    [],
  );

  const handleSearch = (term: string) => {
    if (data) {
      const results = (miniSearch.search(term) as Result[])
        .map((result) => ({
          ...result,
          type: dataById[result.id].__typename,
          area: dataById[result.id].relationships?.area,
        }))
        .filter((result) => result.langcode === currentLanguage);
      setResults(results);
    }
  };

  return [handleSearch, results] as const;
};

export default useSearchEngine;
