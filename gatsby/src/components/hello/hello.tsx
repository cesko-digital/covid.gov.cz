import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';

const Hello: React.FC = () => {
  return (
    <div>
      <Trans i18nKey="greetings" />
    </div>
  );
}
export default Hello;