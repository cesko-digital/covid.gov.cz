import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContentBox from '@/components/content-box';
import CommonTopic from '@/components/common-topic';
import LinkList from '@/components/link-list';
import { Link } from 'gatsby-plugin-react-i18next';
import MeasureList from '@/components/measure-list';
import Container from '@/components/container';
import { Alert } from '@/components/alert';
import SituationsBox from '@/components/situations-box';
import { IQuery } from 'graphql-types';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { homepage } = data;
  const {
    situation_label,
    situation_link,
    measure_label,
    measure_link,
    relationships,
  } = homepage;
  const { measure_items, situation_items } = relationships;

  const mockLinks = [
    {
      title: 'Autoservisy a pneuservisy',
      href: '#0',
    },
    {
      title: 'Mytí a čištění aut',
      href: '#0',
    },
    {
      title: 'Čerpací stanice',
      href: '#0',
    },
    {
      title: 'Autoservisy a pneuservisy 2',
      href: '#0',
    },
    {
      title: 'Mytí a čištění aut 2',
      href: '#0',
    },
    {
      title: 'Čerpací stanice 2',
      href: '#0',
    },
    {
      title: 'Čerpací stanice 3',
      href: '#0',
    },
  ];

  return (
    <>
      <Helmet title="Covid Portál" />
      <Alert />
      <Container className="mt-3">
        <ContentBox
          title={situation_label}
          boldedTitleCount={2}
          buttonVariant=""
          buttonText={situation_link?.title}
        >
          <SituationsBox situations={situation_items} />
        </ContentBox>
        <ContentBox
          title={measure_label}
          boldedTitleCount={1}
          buttonText={measure_link?.title}
        >
          <MeasureList measures={measure_items} />
        </ContentBox>
        <CommonTopic title="Podobná témata" boldedTitleCount={1}>
          <LinkList links={mockLinks} variant="secondary" />
        </CommonTopic>
        <Link to="/" language="en" className="">
          English Page
        </Link>
      </Container>
    </>
  );
};
export default Home;

export const query = graphql`
  query IndexQuery {
    homepage {
      measure_label
      measure_link {
        uri
        title
      }
      moderation_state
      measure_text
      situation_label
      situation_link {
        uri
        title
      }
      situation_text
      relationships {
        measure_items {
          id
          title
          relationships {
            region {
              name
            }
          }
        }
        situation_items {
          id
          title
          path {
            alias
          }
        }
      }
    }
  }
`;
