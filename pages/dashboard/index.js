import React from 'react'

import { CountCard } from './components/CountCard'
import { ChartCard } from './components/ChartCard'

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

const mockedChartsData = [
  {
    title: 'Orders chart',
    children: <p>Add chart 1 here</p>
  },
  {
    title: 'Products chart',
    children: <p>Add chart 2 here</p>
  }
]

const Dashboard = () => {
  return (
    <>
      <S.Cards>
        {mockedCountCardsData?.map((card) =>
          <CountCard value={card.value} message={card.message} />
        )}
      </S.Cards>
      <S.Cards>
        {mockedChartsData?.map((card) =>
          <ChartCard title={card.title}>
            {card.children}
          </ChartCard>
        )}
      </S.Cards>
    </>
  )
}

export default Dashboard
