import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import { LayoutExample } from '.'

describe('[Layouts] LayoutExample', () => {
  it('should render a children', () => {
    renderWithTheme(
      <LayoutExample>
        <h1 data-testid="select_layout">Test Layout</h1>
      </LayoutExample>
    )

    expect(screen.getByTestId('select_layout')).toBeInTheDocument()
  })
})
