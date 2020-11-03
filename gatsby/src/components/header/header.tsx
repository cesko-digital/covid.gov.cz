import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBox from '@/components/search-box';
import Row from '@/components/row';
import Container from '@/components/container';
import { AlertContaner } from '@/components/alert';

const Header: React.FC = () => {
  return (
    <div className="mp-background--blue">
      <Container>
        <Helmet title="Index Page" />
        <Row>
          <SearchBox />
        </Row>
      </Container>
      <AlertContaner />
    </div>
  );
};

export default Header;
