import React from 'react';
import classNames from 'classnames';
import Container from '@/components/container';
import SearchBox from '@/components/search-box';
import Col from '@/components/col';
import styles from './search-panel.module.scss';

interface IProps {
  resultsTotal: number;
  initialValue?: string;
}

const SearchPanel: React.FC<IProps> = ({ resultsTotal, initialValue }) => {
  return (
    <Container>
      <div
        className={classNames(
          'd-flex',
          'flex-column',
          'justify-content-center',
          'align-items-center',
        )}
      >
        <Col col={12} colMd={6}>
          <h1 className={styles.title}>Výsledky vyhledávání</h1>
          <SearchBox initialValue={initialValue} />
          {resultsTotal && (
            <div className={styles.resultsTotal}>
              Nalezeno <span>{resultsTotal} výsledků</span>
            </div>
          )}
        </Col>
      </div>
    </Container>
  );
};

export default SearchPanel;
