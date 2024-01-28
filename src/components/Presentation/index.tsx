import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Presentation = ({ tipo, titulo, capa }: Props) => {
  return (
    <S.BackgroundImage style={{ backgroundImage: `URL(${capa})` }}>
      <div className="container">
        <>
          <S.Type>{tipo}</S.Type>
          <S.Name>{titulo}</S.Name>
        </>
      </div>
    </S.BackgroundImage>
  )
}
export default Presentation
