import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import ContentBox from '@/components/content-box'
import SearchResults from '@/components/search-results'
import MeasureList from '@/components/measure-list'
import Container from '@/components/container'
import { AlertContainer } from '@/components/alert'
import SituationsBox from '@/components/situations-box'
import I18n from '@/components/i18n'
import { IQuery } from 'graphql-types'
import Layout from '@/layouts/default-layout'

// interface IProps {
//   data: IQuery;
// }

const Serp: React.FC<IProps> = ({ }) => {
  const mockResults = [
    {
      title:
        'Opatření nošení roušek venku Opatření nošení roušek venku Opatření nošení roušek venku',
      href: '#0',
      text:
        'od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě...'
    },
    {
      title: 'Opatření nošení roušek venku',
      href: '#0',
      text:
        'od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě..od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě..od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě..od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě...'
    },
    {
      title: 'Opatření nošení roušek venku',
      href: '#0',
      text:
        'od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě...'
    },
    {
      title: 'Opatření nošení roušek venku',
      href: '#0',
      text:
        'od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě...'
    },
    {
      title: 'Opatření nošení roušek venku',
      href: '#0',
      text:
        'od 22. března je potřeba nosit roušku všude kde to jen jde, hlavně ale venku a v hospodě...'
    }
  ]
  return (
    <Layout>
      <Helmet title='Covid Portál' />
      <Container className='mt-3'>
        <SearchResults results={mockResults} />
      </Container>
    </Layout>
  )
}
export default Serp
