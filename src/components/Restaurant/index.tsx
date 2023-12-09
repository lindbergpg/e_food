import {
  ContainerTop,
  RestaurantCard,
  Capa,
  ContainerInfos,
  Titulo,
  Descricao,
  TagCard
} from './styles'
import Button from '../Button'
import Tag from '../Tag'

export type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  estrela: string
  descricao: string
  capa: string
  id: number
}

const Restaurant = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  estrela,
  descricao,
  capa,
  id
}: Props) => {
  return (
    <RestaurantCard className="container">
      <Capa src={capa} alt={titulo} />
      <TagCard>
        {destacado === true ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{tipo}</Tag>
      </TagCard>
      <ContainerInfos>
        <ContainerTop>
          <Titulo>{titulo}</Titulo>
          <div>
            <Titulo>{avaliacao}</Titulo>
            <img src={estrela} alt="Estrela" />
          </div>
        </ContainerTop>
        <Descricao>{descricao}</Descricao>
        <Button
          type="link"
          to={`/perfil/${id}`}
          title="Clique aqui para aproveitar nossas ofertas"
        >
          Saiba mais
        </Button>
      </ContainerInfos>
    </RestaurantCard>
  )
}

export default Restaurant
