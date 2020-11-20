import { GatsbyNode } from 'gatsby';

/**
 * Create redirect type so everything is working fine if there are no redirects coming from Drupal.
 */
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}) => {
  const { createTypes } = actions;
  const redirectType = `
    """
    Redirect Node
    """
    type redirect implements Node @infer {
      redirect_from: String
      redirect_to: String
      status_code: String
    }
  `;
  createTypes(redirectType);
};
