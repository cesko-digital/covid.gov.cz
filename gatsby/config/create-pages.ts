import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { IQuery } from 'graphql-types';
import { IPage, IPageGroupConnection } from '../graphql-types';

/**
 * Gatsby exposes interfaces for every lifecycle hook
 */
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const customPagesTemplate = path.resolve(
    `./src/templates/custom-page/custom-page.tsx`,
  );

  // Ensure the path now points to TSX template
  const situationListTemplate = path.resolve(
    `./src/templates/situation/list.tsx`,
  );
  const situationPageTemplate = path.resolve(
    `./src/templates/situation/page.tsx`,
  );

  /**
   * Pass the query structure generic for complete type-check coverage
   */
  const result = await graphql<IQuery>(
    `
      {
        allArea {
          edges {
            node {
              path {
                alias
              }
              relationships {
                situation {
                  path {
                    alias
                  }
                }
              }
            }
          }
        }
        allPage {
          nodes {
            id
            title
            langcode
            path {
              alias
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  const customPages: IPageGroupConnection = result.data.allPage;

  customPages.nodes.forEach((page: IPage) => {
    console.log(page.langcode);
    createPage({
      path: page.path.alias,
      component: customPagesTemplate,
      context: {
        slug: page.path.alias,
        langCode: page.langcode,
      },
    });
  });

  // Create blog posts pages.
  const posts = result.data.allArea.edges;

  posts.forEach((post, index) => {
    createPage({
      path: post.node.path.alias,
      component: situationListTemplate,
      context: {
        slug: post.node.path.alias,
      },
    });

    if (post.node.relationships.situation !== null) {
      post.node.relationships.situation.forEach((situation, index) => {
        createPage({
          path: situation.path.alias,
          component: situationPageTemplate,
          context: {
            slug: situation.path.alias,
          },
        });
      });
    }
  });
};
