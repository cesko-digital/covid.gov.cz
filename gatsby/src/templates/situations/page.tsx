import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import SituationDetail from '@/components/situation-detail/situation-detail';
import ContentBox from '@/components/content-box';
import LinkList from '@/components/link-list';
import Container from '@/components/container';
interface IProps {
  data: IQuery;
}

const Page: React.FC<IProps> = ({ data }) => {
  const linksData = data.situation.relationships.related_situations;
  return (
    <Layout>
      <SituationDetail situation={data.situation} />
      <Container>
        {/* hide this box if no relevant topics exist */}
        {linksData.length > 0 ? (
          <ContentBox
            title="Podobná témata"
            boldedTitleCount={1}
            variant="blue"
          >
            <LinkList
              links={linksData}
              fallbackText="Je nám líto, ale žádná podobná témata prozatím nejsou k dispozici."
            />
          </ContentBox>
        ) : (
          ''
        )}
        ;
      </Container>
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
          path {
            alias
            langcode
          }
        }
      }
      path {
        alias
      }
      changed(formatString: "D. M. YYYY HH:mm")
      valid_from(formatString: "D. M. YYYY")
      valid_to(formatString: "D. M. YYYY")
    }
  }
`;
