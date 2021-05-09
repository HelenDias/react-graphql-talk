import React from 'react'

import { CountCard } from './components/CountCard'

import * as S from './styles'

const mockedCountCardsData = [
  {
    value: 67.132,
    message: 'Orders'
  },
  {
    value: 50.872,
    message: 'Products'
  },
  {
    value: 945,
    message: 'Categories'
  },
  {
    value: 67.132,
    message: 'Orders'
  },
  {
    value: 50.872,
    message: 'Products'
  },
  {
    value: 945,
    message: 'Categories'
  },
]

const Dashboard = () => {
  return (
    <>
      <S.CountCards>
        {mockedCountCardsData?.map((card) =>
          <CountCard value={card.value} message={card.message} />
        )}
      </S.CountCards>
    </>
  )
}

export default Dashboard
