import styled from 'styled-components'
import T from 'theme'

export const TitleSection = styled.h1`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0 2rem;

  opacity: 0;
  animation: ${T.animations.fadeInMove('0', '-40px', '0')} 0.6s ease forwards;
  font-size: ${T.font.sizes.xLarge};
  font-weight: ${T.font.normal};

  ${T.breakpoints.custom(800)} {
    font-size: ${T.font.sizes.xxLarge};
  }
`
