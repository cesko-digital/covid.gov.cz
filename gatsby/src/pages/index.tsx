import React from 'react';
import Hello from '@/components/hello/hello';
import ContentBox from '@/components/content-box';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';

const Home: React.FC = () => {
  return (
    <div>
      <Helmet title="Index Page" />
      <Hello />
      <ContentBox
        title="Aktuální opatření (72)"
        boldedTitleCount={1}
        description="Všechna současná nařízení vlády, jejich detail, platnost a jednoduché vysvětlení"
        buttonText="Zobrazit všech 72 nařízení"
      >
        <MeasureList />
      </ContentBox>
      <ContentBox
        title="Životní situace s covidem"
        boldedTitleCount={2}
        description="Detailní informace v souvislosti s Covidem v běžném životě"
        buttonVariant="outline"
        buttonText="Zobrazit všechny životní situace"
      />
      <ContentBox
        title="Co dělat když..."
        boldedTitleCount={2}
        buttonText="Zobrazit další"
      />
      <Link to="/" language="en" className="">
        English Page
      </Link>
    </div>
  );
};
export default Home;
