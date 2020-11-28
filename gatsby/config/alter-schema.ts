import { GatsbyNode } from 'gatsby';

/**
 * Create fallback types so everything is working fine if there are no redirects coming from Drupal.
 */
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}) => {
  const { createTypes } = actions;
  const fallbackTypes = `
    """
    Redirect Node
    """
    type redirect implements Node @infer {
      redirect_from: String
      redirect_to: String
      status_code: String
    }

    """
    Update
    """
    type situation implements Node @infer {
      update: update
    }

    type update {
      processed: String
      valid_from: String
      pes: String
    }
  `;
  createTypes(fallbackTypes);
};
