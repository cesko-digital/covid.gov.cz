import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const gLang = (): string => {
  var glang = 'cs';
  const location = useLocation();
  const path = location.pathname;

  if (path.replace(/^\/(\w\w)(\/.*)?$/g, '$1') === 'en') {
    glang = 'en';
  }

  return glang;
};

const I18n = (id: string, lang?: string) => {
  lang = lang || gLang();
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
    return item.langcode === lang && item.source === id;
  });
  if (!I18nArray.length) {
    console.error('translation not found for ' + lang + '/' + id);
    I18nArray = [{ target: id }];
  }

  return I18nArray[0].target;
};

export default I18n;

export const TRoute = (route: string, lang?: string): string => {
  lang = lang || gLang();
  route = route === '' ? '/' : route; // todo: translate current page using drupal_internal__tid
  route = route.replace(/^\/(\w\w)(\/.*)?$/g, '$2');
  const add = lang === 'cs' ? '' : '/' + lang;
  return add + route;
};
