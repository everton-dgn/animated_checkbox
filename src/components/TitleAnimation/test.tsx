import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils'
import TitleAnimation from '.'

describe('[Components] TitleAnimation', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('should render a button', () => {
    renderWithTheme(<TitleAnimation />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render a heading by clicking the button', () => {
    renderWithTheme(<TitleAnimation />)

    const button = screen.getByRole('button')

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()

    act(() => {
      userEvent.click(button)
    })
    expect(screen.queryByRole('heading')).toBeInTheDocument()

    act(() => {
      userEvent.click(button)
    })
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
