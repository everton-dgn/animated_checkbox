import * as S from './styles'
import * as C from 'components'

export default function Home() {
  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Checkbox Animado Com SVG" />

      <br />
      <br />

      <C.Checkbox
        ariaLabel="Teste de checkbox animado"
        id="checkboxTest"
        color="blue"
        textLabel="Cor azul definida via props"
      />

      <br />
      <br />

      <C.Checkbox
        ariaLabel="Teste de checkbox animado 2"
        id="checkboxTest2"
        textLabel="Sem cor definida via props"
      />

      <br />
      <br />

      <C.Checkbox
        ariaLabel="Teste de checkbox animado 3"
        id="checkboxTest3"
        disabled={true}
        textLabel="Desabilitado e desmarcado"
      />

      <br />
      <br />

      <C.Checkbox
        ariaLabel="Teste de checkbox animado 3"
        id="checkboxTest3"
        disabled={true}
        checked={true}
        textLabel="Desabilitado e marcado"
      />
    </S.Container>
  )
}
