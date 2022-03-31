import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import TitleSection from '.'

describe('[Components] TitleSection', () => {
  it('should render the heading', () => {
    renderWithTheme(<TitleSection title="Título de Exemplo" />)

    const h1 = screen.getByRole('heading', { name: 'Título de Exemplo' })

    expect(h1).toBeInTheDocument()
  })
})
