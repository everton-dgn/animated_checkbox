import styled, { css } from 'styled-components'
import T from 'theme'
import * as Icon from 'components/Svg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: max-content;
`

export const TextLabel = styled.label<{ disabled: boolean }>`
  margin-left: 1rem;
  font-size: 1.8rem;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed !important;
        `
      : css`
          cursor: pointer;
        `}
`

export const LabelWrapper = styled.button<{ disabledFocus: boolean }>`
  background-color: transparent;
  border-radius: 0.4rem;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s linear;

  &:focus {
    box-shadow: ${({ disabledFocus }) =>
      !disabledFocus && css`0 0 0 0.2rem ${T.colors.primary}`};
  }
`

export const Checkbox = styled.input<{ checked: boolean }>`
  display: none;
  pointer-events: none;

  & + label {
    ${({ disabled }) =>
      disabled
        ? css`
            cursor: not-allowed !important;
          `
        : css`
            cursor: pointer;
          `}
    font-size: 0.6rem;
    display: grid;
    place-content: center;
  }

  &:checked + label {
    polyline {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.3s linear;
    }
  }
`

export const IconCheckbox = styled(Icon.Checkbox)<{
  checked: boolean
  disabled: boolean
  color: 'blue' | undefined
}>`
  ${({ color, checked, disabled }) => css`
    ${disabled &&
    css`
      stroke: #7f7f7f47;
    `}
    stroke: ${color || 'grey'};
    stroke-width: ${checked ? 12 : 7.5};
    width: 2.5rem;
    height: 2.5rem;
    fill: #fff;
    transition: 0.08s linear;

    path {
      stroke-dasharray: 320;
      stroke-dashoffset: 0;
      fill: #fff !important;
    }

    polyline {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      fill: none;
    }
  `}
`

export const Label = styled.label`
  path {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.3s linear;
  }

  polyline {
    stroke-dashoffset: 70;
    transition: stroke-dashoffset 0.3s linear;
  }
`
