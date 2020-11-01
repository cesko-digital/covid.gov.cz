import React from 'react';
import { Helmet } from 'react-helmet';
import TextBox from '@/components/text-box';
import Headline from '@/components/headline';
import Breadcrumb from '@/components/breadcrumb';
import Accordion from '@/components/accordion';

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

const accordion = [
  {
    title: 'Nadpis',
    items: [
      {
        title: 'První',
        href: '#',
      },
      {
        title: 'Druhý',
        href: '#',
      },
    ],
  },
  {
    title: 'Druhý nadpis',
    items: [
      {
        title: 'První',
        href: '#',
      },
      {
        title: 'Druhý',
        href: '#',
      },
    ],
  },
]

const Text: React.FC = () => {
  return (
    <div>
      <Helmet title="Text Page" />
      <Breadcrumb items={breadcrumbItems} variant="inverse" />
      <Headline>Headline #1</Headline>
      <TextBox />
      <Accordion data={accordion} />
    </div>
  );
};
export default Text;
