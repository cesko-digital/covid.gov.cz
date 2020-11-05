import { useStaticQuery, graphql } from 'gatsby';

var language = 'cs';
if (location.pathname.replace(/^\/(\w\w)(\/.*)?$/g, '$1') === 'en') {
  language = 'en';
}

export default function I18n(id: string, lang?: string) {
  language = lang || language;
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
    return item.langcode === language && item.source === id;
  });
  if (!I18nArray.length) {
    console.error('translation not found for ' + language + '/' + id);
    I18nArray = [{ target: '' }];
  }

  return I18nArray[0].target;
}

export function TRoute(route: string, lang?: string) {
  language = lang || language;
  route = route === '' ? '/' : route; // todo: translate current page using drupal_internal__tid
  route = route.replace(/^\/(\w\w)(\/.*)?$/g, '$2');
  const add = language === 'cs' ? '' : '/' + language;
  return add + route;
}
