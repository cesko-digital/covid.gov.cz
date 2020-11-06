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
      <SituationDetail situation={data.measure} type="measure" />
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query($slug: String!) {
    measure(path: { alias: { eq: $slug } }) {
      title
      status
      content: description {
        processed
      }
      links: source {
        uri
        title
      }
      relationships {
        region {
          name
        }
        situation_type: field_measure_type {
          name
          path {
            alias
          }
        }
        related_situations: situation {
          title
        }
      }
      path {
        alias
      }
      changed(formatString: "D. MMMM YYYY HH:mm")
      valid_from(formatString: "D. M. YYYY HH:mm")
      valid_to(formatString: "D. M. YYYY HH:mm")
    }
  }
`;
