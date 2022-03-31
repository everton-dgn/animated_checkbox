import { renderWithTheme } from 'utils'
import HeadPage from '.'

describe('[Components] HeadPage', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithTheme(<HeadPage title="Acessibilidade" />)

    expect(container).toMatchSnapshot()
  })
})
