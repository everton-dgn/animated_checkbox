import { ReactNode } from 'react'
import * as S from './styles'

type LayoutExampleProps = { children: ReactNode }

export const LayoutExample = ({ children }: LayoutExampleProps) => {
  return (
    <S.Grid>
      <h1>Layout Example</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
