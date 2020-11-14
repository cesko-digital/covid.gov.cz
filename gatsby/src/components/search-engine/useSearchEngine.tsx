import { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ISearchIndexQuery } from '@graphql-types';
import removeAccents from 'remove-accents';
import MiniSearch, { SearchResult } from 'minisearch';
import sanitizeHtml from 'sanitize-html';
import { useCurrentLanguage } from '../i18n';

export const query = graphql`
  query SearchIndex {
    siteSearchIndex {
      index
    }
    allSituation {
      edges {
        node {
          id
          title
          path {
            alias
          }
          langcode
          content {
            processed
          }
          relationships {
            type: situation_type {
              name
            }
          }
        }
      }
    }
    allMeasure {
      edges {
        node {
          id
          title
          path {
            alias
          }
          langcode
          content: description {
            processed
          }
          relationships {
            type: measure_type {
              name
            }
          }
        }
      }
    }
  }
`;

const miniSearch = new MiniSearch<IndexedResult>({
  fields: ['title', 'content'], // fields to index for full-text search
  storeFields: ['title', 'content', 'path', 'langcode', 'type'], // fields to return with search results
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
    boost: { title: 2 },
    fuzzy: 0.2,
  },
});

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
  const currentLanguage = useCurrentLanguage();

  const handleSearch = (term: string) => {
    if (data) {
      const results = miniSearch.search(term) as Result[];
      setResults(results);
    }
  };

  useEffect(() => {
    miniSearch.removeAll();
    const documents: IndexedResult[] = [
      ...data.allMeasure.edges,
      ...data.allSituation.edges,
    ].map(({ node }) => ({
      id: node.id,
      content: node.content?.processed,
      langcode: node.langcode,
      path: node.path?.alias,
      title: node.title,
      type: node.relationships?.type?.name,
    }));

    miniSearch.addAllAsync(documents).then(() => console.log('done'));
    console.log({ documents });
  }, [data, currentLanguage]);
  return [handleSearch, results] as const;
};

export default useSearchEngine;
