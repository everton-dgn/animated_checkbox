import { useRef, useState } from 'react'
import * as S from 'components/Checkbox/styles'

export type CheckboxProps = {
  id: string
  name?: string
  ariaLabel: string
  color?: 'blue' | undefined
  disabled?: boolean | undefined
  checked?: boolean
  textLabel?: string
}

const Checkbox = ({
  id,
  ariaLabel,
  disabled,
  checked,
  textLabel,
  color,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(!!checked)

  const labelRef = useRef<HTMLInputElement>(null)

  const selectCheckbox = () => {
    labelRef && labelRef.current?.click()
  }

  return (
    <S.Container>
      <S.LabelWrapper
        onClick={selectCheckbox}
        aria-label={ariaLabel}
        disabledFocus={!!disabled}
      >
        <S.Checkbox
          id={id}
          type="checkbox"
          disabled={!!disabled}
          ref={labelRef}
          checked={isChecked}
          onChange={() => setIsChecked(prevState => !prevState)}
          {...props}
        />

        <S.Label>
          <S.IconCheckbox
            color={color}
            disabled={!!disabled}
            checked={isChecked}
            width={20}
            height={20}
          />
        </S.Label>
      </S.LabelWrapper>

      {!!textLabel && (
        <S.TextLabel htmlFor={id} disabled={!!disabled}>
          {textLabel}
        </S.TextLabel>
      )}
    </S.Container>
  )
}

export default Checkbox
