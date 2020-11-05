import Button from '@/components/button';
import Row from '@/components/row';
import React from 'react';
import { vh90 } from './404.module.scss';
// todo: add localized title for button
const PageNotFound: React.FC = () => {
  return (
    <>
      <Row
        className={'bg-primary flex-column p-5 ' + vh90}
        alignItems="center"
        justify="center"
      >
        <h1 className="h2 text-white font-weight-bold text-center mb-3">
          Na této stránce bohužel nic není :(
        </h1>
        <Button variant="contained" text="Zpět na úvodní stránku" href="/" />
      </Row>
    </>
  );
};

export default PageNotFound;
