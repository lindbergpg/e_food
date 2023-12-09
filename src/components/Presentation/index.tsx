import { BackgroundImage, Type, Name } from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Presentation = ({ tipo, titulo, capa }: Props) => {
  return (
    <BackgroundImage style={{ backgroundImage: `URL(${capa})` }}>
      <div className="container">
        <>
          <Type>{tipo}</Type>
          <Name>{titulo}</Name>
        </>
      </div>
    </BackgroundImage>
  )
}
export default Presentation
