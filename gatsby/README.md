## Frontend - Gatsby

### Tech stack 🛠

- React
- Typescript
- Gatsby
- GraphQL
- [Design system GOV.cz](https://designsystem.gov.cz/)
- Prettier
- Eslint
- Jest

### Getting started 🚀

1. Install Gatsby CLI
   `yarn global add gatsby-cli`

2. Install dependencies
   `yarn install`

3. Run dev server
   `yarn dev`

### How does it work?

1. Upon running the gatsby build/dev, it first downloads all of the data from Drupal prod env (you will see the requests in your console).
   (it will only download the data once, and that use those until you clean Gatsby cache by `yarn dev:clean`, or set your env variable `SHOULD_REFRESH_DRUPAL_DATA` to `1` if you always want to have fresh Drupal data)
2. Gatsby then stores this data locally and offers a GraphQL on top of that data.
3. You can browse all of the data to be used in components later in [GraphiQL](http://localhost:8000/___graphql)
4. Sometimes the dev env halts, solution is usually to stop and run `yarn dev` again. We will eventually fix that, _but feel free to fix it and create a PR_ 🤗

### Adding translations

We try to localize all of the strings in this app. All of the strings are translated on Drupal side and then we only request those on Gatsby side.

1. Request a translation for a certain string in the Drupal slack channel.
2. You will receive a translation key e.g. `related_measures`
3. Use the translation:

```tsx
import I18n from '@/components/i18n';

//...
<h3>{I18n('useful_links')}</h3>;
//...
```
