import React from 'react';

import Hello from '@/components/hello';
import { Link } from 'gatsby-plugin-react-i18next';

export default function Home() {
  return (
    <>
      <Hello />
      <Link to='/' language={'en'}>
        English Page
      </Link>
    </>
  );
}
