import React from 'react';
import { Helmet } from 'react-helmet';
import TextBox from '@/components/text-box';
import Headline from '@/components/headline';
import Breadcrumb from '@/components/breadcrumb';

const breadcrumbItems = [
  {
    title: 'First',
    url: '#',
  },
  {
    title: 'Second',
    url: '#',
  },
  {
    title: 'Third',
    url: '#',
  },
];

const Text: React.FC = () => {
  return (
    <div>
      <Helmet title="Text Page" />
      <Breadcrumb items={breadcrumbItems} variant="inverse" />
      <Headline>Headline #1</Headline>
      <TextBox />
    </div>
  );
};
export default Text;
