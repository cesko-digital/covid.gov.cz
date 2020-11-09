import Button from '@/components/button';
import Row from '@/components/row';
import React from 'react';
import { vh90 } from './404.module.scss';
import Layout from '@/layouts/default-layout';
import { Helmet } from 'react-helmet';
import { ISitePageContext } from '@graphql-types';

interface IProps {
  pageContext: ISitePageContext;
}

// todo: add localized title for button
const PageNotFound: React.FC<IProps> = ({ pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <Helmet title="Page not found | COVID PORTAL" />
      <Row
        className={'bg-light flex-column p-5 mx-0 ' + vh90}
        alignItems="center"
        justify="center"
      >
        <h1 className="h2 font-weight-bold text-center mb-3">
          Na této stránce bohužel nic není :(
        </h1>
        <h2 className="h3 font-weight-bold text-center mb-3">
          Page Not Found 404
        </h2>
        <Button variant="contained" text="Zpět na úvodní stránku" href="/" />
      </Row>
    </Layout>
  );
};

export default PageNotFound;
