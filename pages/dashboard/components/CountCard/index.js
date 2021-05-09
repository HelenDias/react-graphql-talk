import React from 'react'

import * as S from './styles'

export const CountCard = ({ value, message }) => (
  <S.Wrapper>
    <S.Title>{message}</S.Title>
    <S.Value>{value}</S.Value>
  </S.Wrapper>
)
