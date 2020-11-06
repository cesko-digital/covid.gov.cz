import React from 'react';
import ContentBox from '@/components/content-box';
import styles from './search-results.module.scss';
import { KeyboardArrowRight } from '@material-ui/icons';

interface Props {
  results: Array<{ title: string; href: string; text: string }>;
}

const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <>
      {results.map((result, index) => {
        return (
          <ContentBox key={index} variant="white">
            <h3 className={styles.searchResultsTitle}>
              <a href={result.href} className={styles.searchResultsLink}>
                {result.title}
                <KeyboardArrowRight
                  style={{ fontSize: 20 }}
                  className="color-yellow"
                />
              </a>
            </h3>
            {/* TODO: breadcrumbs */}
            <p className={styles.searchResultsDesc}>{result.text}</p>
          </ContentBox>
        );
      })}
      ;
    </>
  );
};

export default SearchResults;
