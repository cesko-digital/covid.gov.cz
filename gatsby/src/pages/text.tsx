import React from 'react';
import { Helmet } from 'react-helmet';
import TextBox from '@/components/text-box';
import Headline from '@/components/headline';
import Breadcrumb from '@/components/breadcrumb';
import Accordion from '@/components/accordion';
import Container from '@/components/container';
import ContentBox from '@/components/content-box';

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
    <Container>
      <Helmet title="Text Page" />
      <Breadcrumb items={breadcrumbItems} variant="inverse" />
      <Headline>Headline #1</Headline>
      <TextBox />
    </Container>
  );
};
export default Text;
