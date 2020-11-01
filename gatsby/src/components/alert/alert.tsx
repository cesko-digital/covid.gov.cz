import React from 'react';
import Button from '../button';
import GovIcon from '../gov-icon';
import Row from '../row';
import Col from '../col';
const Alert: React.FC = () => {
  return (
    <>
      <Row
        className="w-100 m-0 bg-warning text-black"
        justify="center"
        alignItems="center"
      >
        <Col col={11} colMd={6}>
          <div className="d-flex align-items-center justify-content-center py-1">
            <GovIcon icon="alert" size={20} />
            <span className="text-center mx-1">
              Nemocnice kolabují lorem dolores mendes lorem ipsum!
            </span>
            <Button variant="outline-black" text="Více" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Alert;
