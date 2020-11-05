import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { I18nextContext } from 'gatsby-plugin-react-i18next';

interface IProps {
  id: String;
}

const I18n: React.FC<IProps> = ({ id }) => {
  const context = React.useContext(I18nextContext);
  const I18nObject = useStaticQuery(
    graphql`
      query I18nQuery {
        allTranslation {
          nodes {
            langcode
            source
            target
          }
        }
      }
    `,
  );
  var I18nArray = I18nObject.allTranslation.nodes;
  I18nArray = I18nArray.filter((item) => {
    return item.langcode === context.language && item.source === id;
  });
  if (!I18nArray.length) {
    console.error('translation not found for ' + context.language + '/' + id);
    I18nArray = [{ target: '' }];
  }

  return <span>{I18nArray[0].target}</span>;
};

export default I18n;
