import React from 'react'

import * as S from './styles'

export const CountCard = ({ value, title }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Value>{value}</S.Value>
  </S.Wrapper>
)
