import React, { useEffect } from 'react';
import Layout from '@/layouts/default-layout';
import { ISitePageContext } from '@graphql-types';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Container from '@/components/container';
import useSearchEngine from '@/components/search-engine';
import SearchPanel from '@/components/search-panel/search-panel';
import { Helmet } from 'react-helmet';
import SearchResultsCategory from '@/components/search-results/search-results-category';

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

  const foundMeasures = results.filter((item) => item.type === 'measure');
  const foundSituations = results.filter((item) => item.type === 'situation');

  return (
    <Layout pageContext={pageContext}>
      <Helmet title={`"${searchValue}" - hledat | COVID PORTAL`} />
      <SearchPanel resultsTotal={results.length} initialValue={searchValue} />
      <Container>
        {hasResults ? (
          <>
            <SearchResultsCategory
              type="situation"
              results={foundSituations}
              searchValue={searchValue}
            />
            <SearchResultsCategory
              type="measure"
              results={foundMeasures}
              searchValue={searchValue}
            />
          </>
        ) : (
          <h2>Nic nenalezeno</h2>
        )}
      </Container>
    </Layout>
  );
};

export default SearchResultsPage;
