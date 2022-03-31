import { useAnimationRender } from 'hooks'
import * as S from './styles'
import * as C from 'components/index'

const TitleAnimation = () => {
  const { isRenderComponent, isVisible, changeStateComponent } =
    useAnimationRender({ timeMilSecToRemoveComponent: 1000 })

  return (
    <S.Wrapper>
      {isRenderComponent && (
        <S.TitleAnimation isVisible={isVisible}>
          Texto animado na montagem e desmontagem
        </S.TitleAnimation>
      )}

      <S.Column>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Montar Componente animado"
          className="btn"
          onClick={changeStateComponent}
          aria-label="Montar Componente animado"
        />
      </S.Column>
    </S.Wrapper>
  )
}

export default TitleAnimation
