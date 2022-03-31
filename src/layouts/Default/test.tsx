import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import { Default } from '.'

describe('[Layouts] Default', () => {
  it('should render a children', () => {
    renderWithTheme(
      <Default>
        <h1 data-testid="select_layout">Test Layout</h1>
      </Default>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
