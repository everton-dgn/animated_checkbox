import { ReactNode } from 'react'
import * as S from './styles'

export type DefaultProps = { children: ReactNode }

export const Default = ({ children }: DefaultProps) => {
  return (
    <S.Grid>
      <h1>Layout Default</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
