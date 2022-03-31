import { ReactNode } from 'react'
import * as S from './styles'

type ErrorProps = { children: ReactNode }

export const Error = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <h1>Layout Error</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
