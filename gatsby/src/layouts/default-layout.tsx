import React from 'react';
import classnames from 'classnames';

// @ts-ignore
import PvsIcons from 'assets/fonts/pvs-icons.woff';

import { useStaticQuery, graphql } from 'gatsby';

import GatsbyImage from 'gatsby-image';

import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './default-layout.module.scss';
import { ISitePageContext, IDefaultLayoutQuery } from '@graphql-types';
import { Helmet } from 'react-helmet';
import { useTranslation } from '@/components/i18n';

interface IProps {
  pageContext: ISitePageContext;
  hasTransparentHeader: boolean;
  showBackgroundImage: boolean;
  showSearchInHeader: boolean;
}

const DefaultLayout: React.FC<IProps> = ({
  children,
  pageContext,
  hasTransparentHeader,
  showSearchInHeader,
  showBackgroundImage,
}) => {
  const { t } = useTranslation();
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
          fluid(maxWidth: 2000, quality: 90) {
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
      {showBackgroundImage && (
        <div className={classnames(styles.overflow)}>
          <GatsbyImage
            fluid={sources}
            className={classnames(styles.bkgPhoto, {
              [styles.searchDisplayed]: showSearchInHeader,
            })}
            alt="Background image"
            loading="eager"
          />
        </div>
      )}
      <Header
        isTransparent={hasTransparentHeader}
        showSearch={showSearchInHeader}
        pageContext={pageContext}
        navItems={[
          { label: t('home'), to: '/' },
          { label: t('life_situations'), to: t('slug_situations') },
          { label: t('current_measures'), to: t('slug_measures') },
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
