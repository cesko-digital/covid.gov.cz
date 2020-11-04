import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { IQuery } from 'graphql-types';

/**
 * Gatsby exposes interfaces for every lifecycle hook
 */
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

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
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

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
