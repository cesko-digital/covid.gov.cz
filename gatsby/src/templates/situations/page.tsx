import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import SituationDetail from '@/components/situation-detail';
import Layout from '@/layouts/default-layout';

interface IProps {
  data: IQuery;
}

const Page: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <SituationDetail situation={data.situation} type="situation" />
    </Layout>
  );
};
export default Page;

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
          path {
            alias
          }
        }
        related_situations {
          title
        }
      }
      path {
        alias
      }
      changed(formatString: "D. M. YYYY HH:mm")
      valid_from(formatString: "D. M. YYYY HH:mm")
      valid_to(formatString: "D. M. YYYY HH:mm")
    }
  }
`;
