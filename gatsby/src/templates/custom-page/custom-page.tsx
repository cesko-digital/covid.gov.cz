import { IPage, IQuery } from 'graphql-types';
import { Helmet } from 'react-helmet';
import React from 'react';
import Container from '@/components/container';
import { graphql } from 'gatsby';
import Breadcrumb from '@/components/breadcrumb';
import Layout from '@/layouts/default-layout';
import I18n from '@/components/i18n';

interface IProps {
  data: IQuery;
}

const CustomPage: React.FC<IProps> = ({ data }) => {
  const page: IPage = data.page;

  return (
    <Layout>
      <Helmet title={page.title + ' | ' + I18n('covid_portal').toUpperCase()} />

      <Container className="mb-4">
        <div className="pt-1">
          <Breadcrumb
            items={[{ title: I18n('home'), url: '/' }, page.title]}
            variant="inverse"
          />
        </div>
        <h1 className="text-white mt-2 h2 font-weight-bold">{page.title}</h1>
        <article className="bg-white rounded p-2 mb-1">
          {page.content && (
            <div dangerouslySetInnerHTML={{ __html: page.content.processed }} />
          )}
        </article>
      </Container>
    </Layout>
  );
};

export default CustomPage;

export const query = graphql`
  query($slug: String!, $langCode: String!) {
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
    translation(langcode: { eq: $langCode }, source: { eq: "home" }) {
      target
    }
  }
`;
