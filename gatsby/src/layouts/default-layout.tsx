import React, { ReactElement } from 'react';
import classnames from 'classnames';

// @ts-ignore
import PvsIcons from 'assets/fonts/pvs-icons.woff';

import { useStaticQuery, graphql } from 'gatsby';

import { GatsbyImage } from '@wardpeet/gatsby-image-nextgen/compat';

import Header from '@/components/header';
import Footer from '@/components/footer';
import I18n from '@/components/i18n';
import styles from './default-layout.module.scss';
import { ISitePageContext, IDefaultLayoutQuery } from '@graphql-types';
import { Helmet } from 'react-helmet';

interface IProps {
  children: ReactElement[];
  pageContext: ISitePageContext;
}

const DefaultLayout: React.FC<IProps> = ({ children, pageContext }) => {
  const data = useStaticQuery<IDefaultLayoutQuery>(graphql`
    query DefaultLayout {
      mobileImage: file(relativePath: { eq: "covid-portal-compressed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      desktopImage: file(relativePath: { eq: "covid-portal-compressed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  `);
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={PvsIcons}
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div>
        <div className={styles.overflow}>
          <GatsbyImage
            fluid={sources}
            className={styles.bkgPhoto}
            alt="Background image"
            loading="eager"
          />
        </div>
      </div>
      <Header
        pageContext={pageContext}
        navItems={[
          { label: I18n('home'), to: '/' },
          { label: I18n('life_situations'), to: I18n('slug_situations') },
          { label: I18n('current_measures'), to: I18n('slug_measures') }, // TODO: přidat podmínku pouze pokud je na HP obsah
        ]}
      />

      <main className={styles.main}>
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
