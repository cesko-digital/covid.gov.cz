import * as path from 'path';
const config = {
  siteMetadata: {
    siteUrl: `https://covid.gov.cz`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://covid.pristup.net',
        apiBase: 'api',
        translation: true,
        languageConfig: {
          defaultLanguage: 'cs',
          enabledLanguages: ['en', 'cs'],
          translatableEntities: [
            { type: 'taxonomy_term', bundle: 'area', id: 'area' },
            {
              type: 'block_content',
              bundle: 'basic_content',
              id: 'blocks',
            },
            { type: 'file', bundle: 'file', id: 'drupal-file' },
            { type: 'node', bundle: 'homepage', id: 'homepage' },
            { type: 'node', bundle: 'measure', id: 'measure' },
            { type: 'node', bundle: 'page', id: 'page' },
            {
              type: 'path_alias',
              bundle: 'path_alias',
              id: 'path_alias',
            },
            { type: 'taxonomy_term', bundle: 'region', id: 'region' },
            { type: 'node', bundle: 'situation', id: 'situation' },
            {
              type: 'taxonomy_term',
              bundle: 'measure_type',
              id: 'measure_type',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(`src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-plugin-seo',
      options: {
        siteName: 'Covid Portál',
        defaultSiteImage: '/images/ogimage.jpg',
        siteUrl: 'https://covid.gov.cz',
        globalSchema: `{
          "@type": "WebSite",
          "@id": "https://covid.gov.cz/#website",
          "url": "https://covid.gov.cz",
          "name": "Covid Portál",
          "publisher": {
            "@id": "https://gov.cz"
          },
          "image": {
            "@type": "ImageObject",
            "@id": "https://covid.gov.cz/#logo",
            "url": "/images/ogimage.jpg",
            "caption": "gov.cz logo"
          }
        }
        `,
        appleTouch: '/ds/images/meta/apple-touch-icon.png',
        favicon32: '/ds/images/meta/favicon-32x32.png',
        favicon16: '/ds/images/meta/favicon-16x16.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-scss-typescript',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://covid.gov.cz/',
        sitemap: 'https://covid.gov.cz/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false,
        directives: {
          'script-src': "'self' www.googletagmanager.com",
          'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
          'prefetch-src':
            "'self' fonts.googleapis.com www.googletagmanager.com",
          'font-src': "'self' fonts.googleapis.com fonts.gstatic.com",
          'img-src': "'self' www.google.cz stats.g.doubleclick.net data:",
          'connect-src':
            "'self' analytics.google.com dc.services.visualstudio.com dc.applicationinsights.microsoft.com dc.applicationinsights.azure.com stats.g.doubleclick.net",
          'default-src': "'self' www.googletagmanager.com fonts.googleapis.com",
        },
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: ['./src/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
        codegenConfig: {
          // key-value configs that will be applied to every plugins.
          // Note: The example below is completely unnecessary, just a demonstration.
          typesPrefix: 'I', // -> import { HiImageQuery } from '../../graphql-types'
        },
        codegenPlugins: [
          {
            // built-in plugin.
            // Use `typescript` for `@graphql-codegen/typescript`
            // and `operations` for `@graphql-codegen/typescript-operations`
            resolve: 'typescript',
            options: {
              namingConvention: `pascal-case#pascalCase`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://covid.gov.cz`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // develop: true,
        whitelist: ['pvs-theme', 'a', 'vh-90'],
        whitelistPatterns: [
          /^col/,
          /^justify-content/,
          /^align-items/,
          /^align-self/,
          /^pvs-theme-icon/,
          /^pvs-theme-icon/,
          /btn/,
          /guide/,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Covid Portál - Vládní opatření`,
        short_name: 'Covid Portál',
        theme_color: '#2362a2',
        background_color: '#2362a2',
        lang: `cs`,
        start_url: `/`,
        display: 'standalone',
        icon: 'static/ds/images/meta/maskable_icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        icons: [
          {
            src: `static/ds/images/meta/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/ds/images/meta/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Covid Portal - Government measures`,
            short_name: `Covid Portal`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons'],
        display: 'block',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-GKH7GB76MH'],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};

export default config;
