import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { situation } = data;
  return <span className="text-white">{JSON.stringify(situation)}</span>;
};
export default Home;

export const query = graphql`
  query($slug: String!) {
    situation(path: { alias: { eq: $slug } }) {
      title
      status
      content {
        processed
      }
      questions_answers {
        question
        value
      }
      links {
        uri
        title
      }
      relationships {
        region {
          name
        }
        situation_type {
          name
        }
        related_situations {
          title
        }
      }
      path {
        alias
      }
      changed
      valid_from
      valid_to
    }
  }
`;
