import React from 'react';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'pvs-theme',
    lang: 'cs',
  });
};
