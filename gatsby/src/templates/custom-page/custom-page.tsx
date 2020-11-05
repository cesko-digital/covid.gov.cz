import { Helmet, Trans } from 'gatsby-plugin-react-i18next';
import { IPage, IQuery } from 'graphql-types';
import React from 'react';
import Container from '@/components/container';
import { graphql } from 'gatsby';
import Breadcrumb from '@/components/breadcrumb';

interface IProps {
  data: IQuery;
}

const CustomPage: React.FC<IProps> = ({ data }) => {
  const page: IPage = data.page;

  return (
    <>
      <Helmet title={page.title + ' | Covid Portal'} />

      <Container className="mb-4">
        <div className="mt-2">
          <Breadcrumb
            items={[
              // Todo: add localized title
              { title: 'Úvod', url: '/' },
              page.title,
            ]}
            variant="inverse"
          />
        </div>
        <h1 className="text-white mt-2 h2 font-weight-bold">{page.title}</h1>
        <article className="bg-white rounded p-2 mb-1">
          <div dangerouslySetInnerHTML={{ __html: page.content.processed }} />
        </article>
      </Container>
    </>
  );
};

export default CustomPage;

export const query = graphql`
  query($slug: String!) {
    page(path: { alias: { eq: $slug } }) {
      id
      content {
        processed
      }
      title
      changed
      path {
        alias
      }
    }
  }
`;
