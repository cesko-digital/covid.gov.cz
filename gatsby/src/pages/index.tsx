import React from 'react';
import Hello from '@/components/hello/hello';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet title="Index Page" />
      <Hello />
      <Link to="/" language="en" className="">
        English Page
      </Link>
    </div>
  );
};
export default Home;