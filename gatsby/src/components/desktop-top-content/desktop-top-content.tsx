import classNames from 'classnames';
import React from 'react';
import Col from '../col';
import Container from '../container';
import SearchBox from '../search-box';
import styles from './desktop-top-content.module.scss';

const DesktopTopContent: React.FC = () => {
  return (
    <Container>
      <div
        className={classNames(
          'd-flex',
          'flex-column',
          'justify-content-center',
          'align-items-center',
          styles.wrapper,
        )}
      >
        <Col col={12} colMd={6} colXl={5}>
          <SearchBox />
        </Col>
      </div>
    </Container>
  );
};

export default DesktopTopContent;
