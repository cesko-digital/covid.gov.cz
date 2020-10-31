import React from 'react';

import Layout from '../components/layout';
import Hello from '@/components/hello';
import { Link } from 'gatsby-plugin-react-i18next';

export default function Home() {
  return (
    <Layout>
      <Hello />
      <Link to="/" language="en">
        English Page
      </Link>
    </Layout>
  );
}
