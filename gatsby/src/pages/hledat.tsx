import React, { useEffect } from 'react';
import Layout from '@/layouts/default-layout';
import { ISitePageContext } from '@graphql-types';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Container from '@/components/container';
import useSearchEngine from '@/components/search-engine';
import SearchResults from '@/components/search-results';
import SearchPanel from '@/components/search-panel/search-panel';
import { Helmet } from 'react-helmet';

interface IProps {
  pageContext: ISitePageContext;
}

const SearchResultsPage: React.FC<IProps> = ({ pageContext }) => {
  const location = useLocation();

  const { q: searchValue } = queryString.parse(location.search) as {
    q: string;
  };

  const [searchResults, results] = useSearchEngine();

  useEffect(() => {
    if (searchValue) {
      searchResults(searchValue);
    }
  }, [searchValue]);

  const hasResults = Boolean(results.length);

  return (
    <Layout pageContext={pageContext}>
      <Helmet title={`"${searchValue}" - hledat | COVID PORTAL`} />
      <SearchPanel resultsTotal={results.length} initialValue={searchValue} />
      <Container>
        {hasResults ? (
          <SearchResults
            results={results.map((result) => ({
              href: result.path,
              text: result.content,
              title: result.title,
            }))}
          />
        ) : (
          <h2>Nic nenalezeno</h2>
        )}
      </Container>
    </Layout>
  );
};

export default SearchResultsPage;
