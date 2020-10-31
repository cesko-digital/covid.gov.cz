import React from 'react';
import Footer from '@/components/footer';

const DefaultLayout: React.FC<{ children }> = ({ children }) => {
  return (
    <div className="body__wrapper">
      Layout Start
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
