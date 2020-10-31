import React from 'react';
import 'assets/ds/scss/front.scss';
import { Helmet } from 'react-helmet';
import Footer from '@/components/footer';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="body__wrapper">
      <Helmet>
        <html className="pvs-theme" />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
