import React from 'react';

const DefaultLayout: React.FC<{ children }> = ({ children }) => {
  return (
    <div className="body__wrapper">
      Layout Start
      <div>{children}</div>
      Layout End
    </div>
  );
};

export default DefaultLayout;
