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
  const listTemplate = [
    path.resolve(`./src/templates/situations/list.tsx`),
    path.resolve(`./src/templates/measures/list.tsx`),
  ];
  const pageTemplate = [
    path.resolve(`./src/templates/situations/page.tsx`),
    path.resolve(`./src/templates/measures/page.tsx`),
  ];
  const indexTemplate = path.resolve(`./src/templates/lists/index.tsx`);
  const situationTemplate = path.resolve(
    `./src/templates/lists/situations.tsx`,
  );
  const measureTemplate = path.resolve(`./src/templates/lists/measures.tsx`);

  /**
   * Pass the query structure generic for complete type-check coverage
   */
  const result = await graphql<IQuery>(
    `
      {
        allTranslation {
          nodes {
            langcode
            source
            target
          }
        }
        allArea {
          edges {
            node {
              langcode
              path {
                alias
              }
              relationships {
                situation {
                  langcode
                  path {
                    alias
                  }
                }
              }
            }
          }
        }
        allTaxonomyTermMeasureType {
          edges {
            node {
              langcode
              path {
                alias
              }
              relationships {
                measure {
                  langcode
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

  // index
  const trArray = result.data.allTranslation.nodes;
  const languages = ['cs', 'en'];
  const pageSpecs = [
    ['slug_situations', situationTemplate],
    ['slug_measures', measureTemplate],
  ];

  const pathLangPrefix = (lang) => (lang === 'cs' ? '' : '/' + lang);

  languages.forEach((lang) => {
    const pathPrefix = pathLangPrefix(lang);

    createPage({
      path: pathPrefix + '/',
      component: indexTemplate,
      context: {
        langCode: lang,
      },
    });

    pageSpecs.forEach(([source, template]) => {
      const slug = trArray.filter((item) => {
        return item.langcode === lang && item.source === source;
      })[0].target;

      const languageVariants = trArray
        .filter((item) => item.langcode != lang && item.source === source)
        .reduce((acc, item) => {
          acc[item.langcode] = pathLangPrefix(item.langcode) + item.target;
          return acc;
        }, {});

      createPage({
        path: pathPrefix + slug,
        component: template,
        context: {
          langCode: lang,
          languageVariants,
        },
      });
    });
  });

  // custom pages
  const customPages: IPageGroupConnection = result.data.allPage;

  customPages.nodes.forEach((page: IPage) => {
    const pathPrefix = pathLangPrefix(page.langcode);

    createPage({
      path: pathPrefix + page.path.alias,
      component: customPagesTemplate,
      context: {
        slug: page.path.alias,
        langCode: page.langcode,
      },
    });
  });

  // Create blog posts pages.
  const posts = [
    result.data.allArea.edges,
    result.data.allTaxonomyTermMeasureType.edges,
  ];

  const itemNames = ['situation', 'measure'];

  for (let i = 0; i < 2; i++) {
    posts[i].forEach((post, index) => {
      const pathPrefix = pathLangPrefix(post.node.langcode);

      createPage({
        path: pathPrefix + post.node.path.alias,
        component: listTemplate[i],
        context: {
          slug: post.node.path.alias,
          langCode: post.node.langcode,
        },
      });

      if (post.node.relationships[itemNames[i]] !== null) {
        post.node.relationships[itemNames[i]].forEach((situation, index) => {
          const pathPrefix = pathLangPrefix(situation.langcode);

          createPage({
            path: pathPrefix + situation.path.alias,
            component: pageTemplate[i],
            context: {
              slug: situation.path.alias,
              langCode: situation.path.langcode,
            },
          });
        });
      }
    });
  }
};
