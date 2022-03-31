import { animations } from './animations'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { font } from './font'
import { spacings } from './spacings'
import { windowSizes } from './windowSizes'

const grid = {
  container: '130rem',
  gutter: '2.4rem'
}

const border = {
  radius: '0.4rem',
  circle: '50%'
}

const layers = {
  base: 10
}

const T = {
  colors,
  font,
  spacings,
  animations,
  breakpoints,
  windowSizes,
  grid,
  border,
  layers
} as const

export default T
