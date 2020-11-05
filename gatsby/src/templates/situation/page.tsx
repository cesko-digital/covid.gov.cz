import React from 'react';
import { graphql } from 'gatsby';
import { IQuery } from 'graphql-types';
import SituationDetail from '@/components/situation-detail/situation-detail';
import ContentBox from '@/components/content-box';
import LinkList from '@/components/link-list';
import Container from '@/components/container';
interface IProps {
  data: IQuery;
}

const Page: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SituationDetail situation={data.situation} />

      <Container>
        <ContentBox title="Podobná témata" boldedTitleCount={1} variant="blue">
          <LinkList
            links={data.situation.relationships.related_situations}
            fallbackText="Je nám líto, ale žádná podobná témata prozatím nejsou kdispozici."
          />
        </ContentBox>
      </Container>
    </>
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
      changed(formatString: "D. MMMM YYYY HH:mm")
      valid_from
      valid_to
    }
  }
`;
