import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import Container from '@/components/container';
import { IQuery } from 'graphql-types';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';
import CategoryItem from '@/components/category-item';
import LookingForSomething from '@/components/looking-for-something';
import Layout from '@/layouts/default-layout';

const breadcrumbItems = [
  {
    title: 'domů',
    url: '/',
  },
  {
    title: 'Životní události',
    url: '/situace',
  },
];

interface IProps {
  data: IQuery;
}

const Situations: React.FC<IProps> = ({ data }) => {
  const {
    allArea: { nodes },
  } = data;

  return (
    <Layout>
      <Helmet title="Aktuální opatření" />
      <Container>
        <div className="mt-3">
          <Breadcrumb items={breadcrumbItems} variant="inverse" />
        </div>
        <div className="mt-3">
          <Headline>Přehled životních situací</Headline>
        </div>
        <div className="mt-3">
          <ContentBox noPadding>
            {nodes.map(
              (n) =>
                n.relationships.situation !== null && (
                  <CategoryItem
                    key={n.id}
                    name={n.name}
                    path={n.path.alias}
                    iconCode={n.relationships.field_ref_icon?.code}
                  />
                ),
            )}
          </ContentBox>
        </div>
      </Container>
      <Container className="mt-3 mb-3">
        <LookingForSomething />
      </Container>
    </Layout>
  );
};
export default Situations;

export const query = graphql`
  query SituationTypeQuery($langCode: String!) {
    allArea(filter: { langcode: { eq: $langCode } }, sort: { fields: name }) {
      nodes {
        name
        id
        path {
          alias
        }
        relationships {
          situation {
            id
          }
          field_ref_icon {
            code
          }
        }
      }
    }
  }
`;
