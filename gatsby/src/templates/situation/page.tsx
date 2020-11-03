import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <span className="text-white">{data.situation.title}</span>
    </>
  );
};
export default Home;

export const query = graphql`
  query($slug: String!) {
    situation(id: { eq: $slug }) {
      title
    }
  }
`;
