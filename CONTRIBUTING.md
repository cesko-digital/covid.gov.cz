# How to contribute

Ideas for improvement, bug reporting and pull requests are always welcome.

## Useful Links

- Trello: https://trello.com/b/XOOBy51q
- Figma: https://www.figma.com/file/9avjIglqc1VVc84zHIoLha/CovidPortal

## Languages

In English:

- Code
- Comments
- Commit text
- README and other docs

In Czech:

- Issues and Pull Requests

## Issues

Please try to spend some time on a good title and description of the issue.

## Pull requests

If it is not a fork branch, please use the following format for your branch: `{gatsby,drupal}/{feature,bugfix,content}/slug`. 

All pull requests should undergo code review. The code review can be performed by any volunteer who has been active in the project for a long time.

A Pull Request has to pass validation by Github Actions (Triggered Automatically)

## Gatsby

### Code Style

A lot of things are taken care of by ESLint and Prettier.

#### Files organization

- _kebab-case_ for all files and folders, except React components
- _PascalCase_ for React components
- extension `.tsx` for all files containing JSX code
- folder `components` is reserved for components of all kinds
- folder `pages` is for static GatsbyJS pages (file `about.tsx` will be as a page `/about`)
- folder `layout` is for dynamic pages
- component organization with its styles:

```
src
  components
    index.tsx // all components are exported from here
    Component // if the component has only index.tsx, the folder has to be transformed into Component.tsx
      index.tsx
      styles.scss
      SubComponent // if the sub-component has only index.tsx, the folder has to be transformed into SubComponent.tsx
        index.tsx
        styles.scss
// TODO: Add Tests
```

#### Styles

We use CSS Modules approach in SCSS format and extend [Czech Government Styleguide](https://designsystem.gov.cz) which are located in `gatsby/assets/ds/scss`

### Drupal
TODO: Add Drupal
