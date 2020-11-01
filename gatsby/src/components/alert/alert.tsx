import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';
import Row from '../row';
import Col from '../col';
const Alert: React.FC = () => {
  return (
    <>
      <Row
        className="w-100 m-0 bg-warning text-dark"
        justify="center"
        alignItems="center"
      >
        <Col>
          <Row alignItems="center">
            <GovIcon icon="alert" className="mr-2" size={20} />
            <span className="desc">nEVÍM POMOC</span>
            <Button variant="outline-dark" text="VÍCE" className="ml-auto" />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Alert;
