import React from 'react'

import * as S from './styles'

export const CountCard = ({ value, message }) => (
  <S.Wrapper>
    <S.Text>{message}</S.Text>
    <S.Value>{value}</S.Value>
  </S.Wrapper>
)
