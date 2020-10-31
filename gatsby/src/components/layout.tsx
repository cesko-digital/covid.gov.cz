import React from 'react';
import '../../assets/ds/scss/front.scss';
import { Helmet } from 'react-helmet';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="body__wrapper">
      <Helmet>
        <html className="pvs-theme" />
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mt-3">My Title</h1>
            <div className="my-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
