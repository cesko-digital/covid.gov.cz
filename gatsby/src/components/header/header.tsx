import React from 'react';
import SearchBox from '@/components/search-box';
import Row from '@/components/row';
import Container from '@/components/container';
import { AlertContaner } from '@/components/alert';

const Header: React.FC = () => {
  return (
    <div className="mp-background--blue">
      <Container>
        <Row>
          <SearchBox />
        </Row>
      </Container>
      <AlertContaner />
    </div>
  );
};

export default Header;
