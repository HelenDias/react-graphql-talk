import React from 'react'

import { CountCard } from './components/CountCard'
import { ChartCard } from './components/ChartCard'
import { DonutChart } from './components/DonutChart'

import * as S from './styles'

const mockedCountCardsData = [
  {
    value: 67.132,
    title: 'Orders'
  },
  {
    value: 50.872,
    title: 'Products'
  },
  {
    value: 945,
    title: 'Categories'
  },
  {
    value: 67.132,
    title: 'Orders'
  },
  {
    value: 50.872,
    title: 'Products'
  },
  {
    value: 945,
    title: 'Categories'
  },
]


const Dashboard = () => {
  return (
    <S.Wrapper>
      <S.Cards>
        {mockedCountCardsData?.map((card) =>
          <CountCard value={card.value} title={card.title} />
        )}
      </S.Cards>
      <S.Cards>
        <ChartCard title="Orders chart">
          <DonutChart
            label={['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4']}
            data={[100, 200, 300, 400]}
            options={{ maintainAspectRatio: false }}
          />
        </ChartCard>
        <ChartCard title="Products chart">
          <DonutChart
            label={['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4']}
            data={[100, 200, 300, 400]}
            options={{ maintainAspectRatio: false }}
          />
        </ChartCard>
      </S.Cards>
    </S.Wrapper>
  )
}

export default Dashboard
