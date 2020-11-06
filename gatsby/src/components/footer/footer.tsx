import React from 'react';
import classnames from 'classnames';

import I18n from '../i18n';

import styles from './footer.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

const Footer: React.FC = () => {
  const { mainLinks, infoLinks, govLinks, copyright } = useStaticQuery(query);
  return (
    <div
      className={classnames(styles.footer, 'footer mt-md-4')}
      role="contentinfo"
    >
      <div className="container">
        <div className="footer__inner pt-md-2">
          <div className="footer__links">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer__box pb-md-4 pb-lg-0">
                  <h3>{I18n('useful_links')}</h3>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer__box pb-4 pb-lg-0">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: mainLinks.content.processed,
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer__box pb-4 pb-lg-0">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: infoLinks.content.processed,
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer__box pb-4 pb-lg-0">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: govLinks.content.processed,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__common">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="footer__box">
                  <div
                    className="footer__brand"
                    dangerouslySetInnerHTML={{
                      __html: copyright.content.processed,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const query = graphql`
  query {
    mainLinks: blockContentBasicContent(
      drupal_id: { eq: "d7854489-f3b4-4d59-a81d-45bb85160a4c" }
    ) {
      drupal_id
      content {
        processed
      }
    }
    infoLinks: blockContentBasicContent(
      drupal_id: { eq: "c2dad689-63bf-4264-90da-f5ddbb782f4a" }
    ) {
      drupal_id
      content {
        processed
      }
    }
    govLinks: blockContentBasicContent(
      drupal_id: { eq: "9e2c7a80-53a8-41d5-991e-1b4ef5e980f9" }
    ) {
      drupal_id
      content {
        processed
      }
    }
    copyright: blockContentBasicContent(
      drupal_id: { eq: "b31103c8-7b58-414a-9911-9e537691fb43" }
    ) {
      drupal_id
      content {
        processed
      }
    }
  }
`;
