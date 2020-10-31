import React from 'react';
import Hello from '@/components/hello/hello';
import ContentBox from '@/components/content-box';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet title="Index Page" />
      <Hello />
      <ContentBox>
        <MeasureList />
      </ContentBox>
      <ContentBox>
        <MeasureList />
      </ContentBox>
      <ContentBox>
        <MeasureList />
      </ContentBox>
      <Link to="/" language="en" className="">
        English Page
      </Link>
    </div>
  );
};
export default Home;
