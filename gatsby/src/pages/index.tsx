import React from 'react';

import Layout from '@/layouts/default-layout';
import Hello from '@/components/hello/hello';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';

const Home: React.FC = () => {
  return (
    <Layout>
      <Helmet title="Index Page"/>
      <Hello />
      <Link to="/" language="en">
        English Page
      </Link>
    </Layout>
  );
}
export default Home;