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

## Branching Workflow

### Branch types

* `develop`, main integration and testing branch
* `master`, release branch that gets deployed to production
* feature branches

### Basic rules

* All work starts in a feature branch (see below for detailed tips)
* Feature branches are merged into `develop` for integration and testing
* Once `develop` is stabilized and tested, it’s merged into `master`
* All production deployments are done from `master`

### Workflow tips

These are just sume rules of thumb. If you feel lost, don’t be afraid to ask or do whatever works for you to get stuff done.

* It’s nice to base feature branches on the last release (`git checkout -b feature/foo master`). That way your feature branch only contains a single topic with no unrelated changes and can easily be included in the release or left out as needed.
* If you need an urgent fix in production, create a hotfix branch on `master` (and then backport the fix into `develop`).
* Never commit directly to `master` or `develop`, merges only.
* Never merge `develop` to feature branches. If you merge the integration branch into the feature branch, you may bring in unrelated changes, which means the feature branch then no longer represents a single coherent topic.
* Never merge one feature branch into another.

### Releases

Releases are done from the `develop` branch once the code is tested. To create a new release:

1. Update the changelog with changes made since the last release
2. Tag the release
3. Merge `develop` into `master` so that the release may be deployed

Tip: If there’s a lot of incoming changes to `develop`, you can create a temporary
release branch from `develop` so that it doesn’t move while releasing.

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
