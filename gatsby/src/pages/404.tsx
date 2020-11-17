import Button from '@/components/button';
import Row from '@/components/row';
import React from 'react';
import styles from './404.module.scss';
import Layout from '@/layouts/default-layout';
import { Helmet } from 'react-helmet';
import { ISitePageContext } from '@graphql-types';
import { useTranslation } from '@/components/i18n';
import Container from '@/components/container';
import Col from '@/components/col';

interface IProps {
  pageContext: ISitePageContext;
}

const PageNotFound: React.FC<IProps> = ({ pageContext }) => {
  const { t } = useTranslation();
  return (
    <Layout pageContext={pageContext}>
      <Helmet title={`${t('page_not_found')} | COVID PORTAL`} />
      <Container>
        <Row className="flex-column mt-5" alignItems="center" justify="center">
          <Col
            col={12}
            colSm={8}
            colXl={6}
            className={'bg-light text-center ' + styles.wrapper}
          >
            <h2 className="h3 mb-2 text-center">{t('page_not_found')}</h2>
            <h1 className="h2 font-weight-bold text-center mb-3">
              {t('not_found')} :(
            </h1>
            <Button variant="contained" text={t('back_to_home')} href="/" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
