import React from 'react'

import * as S from './styles'

export const ChartCard = ({ title, children }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.HorizontalLine />
      <S.Children>
        {children}
      </S.Children>
    </S.Wrapper>
  )
}
