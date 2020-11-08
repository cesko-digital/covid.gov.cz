import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { IPage, ICreatePagesQuery } from 'graphql-types';

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
  const result = await graphql<ICreatePagesQuery>(
    `
      query CreatePages {
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
              drupal_id
              path {
                alias
              }
              relationships {
                situation {
                  langcode
                  drupal_id
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
              drupal_id
              path {
                alias
              }
              relationships {
                measure {
                  langcode
                  drupal_id
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
            drupal_id
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
  const translations = result.data.allTranslation.nodes;
  const languages = ['cs', 'en'];
  const pageSpecs = [
    ['slug_situations', situationTemplate],
    ['slug_measures', measureTemplate],
  ];

  const pathLangPrefix = (lang) => (lang === 'cs' ? '' : '/' + lang);

  const generateLanguageVariants = (nodes, toLanguage, filter) =>
    nodes
      // include variants with different language and matching node filter (drupal_id/target)
      .filter((item) => item.langcode != toLanguage && filter(item))
      // reduce variants to mapping {[language]: /path}
      .reduce((acc, item) => {
        acc[item.langcode] =
          pathLangPrefix(item.langcode) + (item.target || item.path?.alias);
        return acc;
      }, {});

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
      const slug = translations.filter((item) => {
        return item.langcode === lang && item.source === source;
      })[0].target;

      const languageVariants = generateLanguageVariants(
        translations,
        lang,
        (i) => i.source === source,
      );

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
  const customPages = result.data.allPage.nodes;

  customPages.forEach((page) => {
    const languageVariants = generateLanguageVariants(
      customPages,
      page.langcode,
      (p) => p.drupal_id == page.drupal_id,
    );

    const pathPrefix = pathLangPrefix(page.langcode);
    createPage({
      path: pathPrefix + page.path.alias,
      component: customPagesTemplate,
      context: {
        slug: page.path.alias,
        langCode: page.langcode,
        languageVariants,
      },
    });
  });

  // Create blog posts pages.
  const blogPostSpecs = [
    ['situation', result.data.allArea.edges, listTemplate[0], pageTemplate[0]],
    [
      'measure',
      result.data.allTaxonomyTermMeasureType.edges,
      listTemplate[1],
      pageTemplate[1],
    ],
  ];
  blogPostSpecs.forEach((spec) => {
    const [key, posts, itemTmpl, subTmpl] = spec;
    const nodes = posts.map((p) => p.node);

    // extract all subnodes from all nodes and flats them to one dimensional array
    const flattenedSubNodes = nodes
      .map((n) => n.relationships[key])
      .flat()
      .filter(Boolean);

    nodes.forEach((node) => {
      const pathPrefix = pathLangPrefix(node.langcode);

      const languageVariants = generateLanguageVariants(
        nodes,
        node.langcode,
        (n) => n.drupal_id === node.drupal_id,
      );

      const listSlug = node.path.alias;

      createPage({
        path: pathPrefix + listSlug,
        component: itemTmpl,
        context: {
          slug: listSlug,
          langCode: node.langcode,
          languageVariants,
        },
      });

      (node.relationships[key] || []).forEach((subNode) => {
        const pathPrefix = pathLangPrefix(subNode.langcode);

        const languageVariants = generateLanguageVariants(
          flattenedSubNodes,
          subNode.langcode,
          (n) => n.drupal_id === subNode.drupal_id,
        );

        createPage({
          path: pathPrefix + subNode.path.alias,
          component: subTmpl,
          context: {
            slug: subNode.path.alias,
            langCode: subNode.path.langcode,
            listSlug,
            languageVariants,
          },
        });
      });
    });
  });
};
