import classNames from 'classnames';
import React from 'react';
import Col from '../col';
import SearchBox from '../search-box';

const DesktopTopContent: React.FC = () => {
  return (
    <div
      className={classNames(
        'd-flex',
        'flex-column',
        'justify-content-center',
        'align-items-center',
      )}
    >
      <Col col={12} colMd={6} colXl={5} className="mt-3 mb-3">
        <SearchBox />
      </Col>
    </div>
  );
};

export default DesktopTopContent;
