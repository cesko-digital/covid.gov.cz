import Button from '@/components/button';
import Row from '@/components/row';
import React from 'react';
import { vh90 } from './404.module.scss';
import Layout from '@/layouts/default-layout';
// todo: add localized title for button
const PageNotFound: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default PageNotFound;
