import classNames from 'classnames';
import React from 'react';
import Col from '../col';
import SearchPanel from '../search-panel';

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
      <Col col={12} colMd={6} colLg={4} colXl={3}>
        <SearchPanel />
      </Col>
    </div>
  );
};

export default DesktopTopContent;
