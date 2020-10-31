import React from 'react';
import { Helmet } from 'react-helmet';
import TextBox from '@/components/text-box';
import Headline from '@/components/headline';

const Text: React.FC = () => {
  return (
    <div>
      <Helmet title="Text Page" />
      <Headline>Headline #1</Headline>
      <TextBox />
    </div>
  );
};
export default Text;
