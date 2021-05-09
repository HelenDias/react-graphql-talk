import React from 'react'

import { CountCard } from './components/CountCard'
import { ChartCard } from './components/ChartCard'
import { DonutChart } from './components/DonutChart'

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
    <S.Wrapper>
      <S.Cards>
        {mockedCountCardsData?.map((card) =>
          <CountCard value={card.value} message={card.message} />
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
