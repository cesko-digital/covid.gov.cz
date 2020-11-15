import { GraphQLScalarType } from 'gatsby/graphql';
import removeAccents from 'remove-accents';
import MiniSearch from 'minisearch';
import sanitizeHtml from 'sanitize-html';
import crypto from 'crypto';
import { GatsbyNode } from 'gatsby';

export { createPages } from './create-pages';

const SEARCH_INDEX_ID = `MiniSearchIndex < Site`;
const SEARCH_INDEX_TYPE = `SiteMiniSearchIndex`;
const parent = `___SOURCE___`;
const INDEXED_TYPES = ['measure', 'situation'];

const md5 = (src) => crypto.createHash(`md5`).update(src).digest(`hex`);

const createEmptySearchIndexNode = () => {
  return {
    id: SEARCH_INDEX_ID,
    parent,
    children: [],
    pages: [],
  };
};

const appendPage = ({ pages }, newPage) => {
  const newPages = [...pages, newPage];
  const content = JSON.stringify(newPage);
  return {
    id: SEARCH_INDEX_ID,
    parent,
    children: [],
    pages: newPages,
    internal: {
      type: SEARCH_INDEX_TYPE,
      content: content,
      contentDigest: md5(content),
    },
  };
};

export type IndexedResult = {
  id: string;
  title: string;
  content: string;
  path: string;
  langcode: string;
  // type: string;
};

const createOrGetIndex = async (node, cache, getNode) => {
  const cacheKey = `${node.id}:index`;
  const cached = await cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const index = new MiniSearch<IndexedResult>({
    fields: ['title', 'content'], // fields to index for full-text search
    storeFields: ['title', 'content', 'path', 'langcode', 'type'], // fields to return with search results
    processTerm: (term) => {
      const withoutAccents = removeAccents.remove(term);
      const lowerCase = withoutAccents.toLocaleLowerCase();
      const withoutHtml = sanitizeHtml(lowerCase, { allowedTags: [] });
      return withoutHtml;
    },
    searchOptions: {
      processTerm: (term) => {
        return removeAccents.remove(term).toLocaleLowerCase();
      },
      boost: { title: 2 },
      fuzzy: 0.2,
    },
  });

  for (const pageId of node.pages) {
    const pageNode = getNode(pageId);
    console.log({ pageNode });
    if (INDEXED_TYPES.includes(pageNode.internal.type)) {
      const doc: IndexedResult = {
        id: pageNode.id,
        content: pageNode.content?.processed,
        langcode: pageNode.langcode,
        path: pageNode.path?.alias,
        title: pageNode.title,
        // type: pageNode.relationships?.type?.name,
      };

      index.add(doc);
    }
  }

  const json = index.toJSON();
  await cache.set(cacheKey, json);
  return json;
};

const SearchIndex = new GraphQLScalarType({
  name: `${SEARCH_INDEX_TYPE}_Index`,
  description: `Serialized elasticlunr search index`,
  parseValue() {
    throw new Error(`Not supported`);
  },
  serialize(value) {
    return value;
  },
  parseLiteral() {
    throw new Error(`Not supported`);
  },
});

export const sourceNodes = async ({ getNodes, actions }) => {
  const { touchNode } = actions;

  const existingNodes = getNodes().filter(
    (n) =>
      n.internal.owner === `@gatsby-contrib/gatsby-plugin-minisearh-search`,
  );
  existingNodes.forEach((n) => touchNode({ nodeId: n.id }));
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  if (INDEXED_TYPES.indexOf(node.internal.type) === -1) {
    return;
  }

  const { createNode } = actions;
  const searchIndex = getNode(SEARCH_INDEX_ID) || createEmptySearchIndexNode();
  const newSearchIndex = appendPage(searchIndex, node.id);
  createNode(newSearchIndex);
};

export const setFieldsOnGraphQLNodeType: GatsbyNode['setFieldsOnGraphQLNodeType'] = ({
  type,
  getNode,
  cache,
}) => {
  if (type.name !== SEARCH_INDEX_TYPE) {
    return null;
  }

  return {
    index: {
      type: SearchIndex,
      resolve: (node) => createOrGetIndex(node, cache, getNode),
    },
  };
};
