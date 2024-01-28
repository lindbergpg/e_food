import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

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
    <S.RestaurantCard className="container">
      <S.Cover src={capa} alt={titulo} />
      <S.TagCard>
        {destacado === true ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{tipo}</Tag>
      </S.TagCard>
      <S.ContainerInfos>
        <S.ContainerTop>
          <S.Title>{titulo}</S.Title>
          <div>
            <S.Title>{avaliacao}</S.Title>
            <img src={estrela} alt="Estrela" />
          </div>
        </S.ContainerTop>
        <S.Description>{descricao}</S.Description>
        <Button
          type="link"
          to={`/perfil/${id}`}
          title="Clique aqui para aproveitar nossas ofertas"
        >
          Saiba mais
        </Button>
      </S.ContainerInfos>
    </S.RestaurantCard>
  )
}

export default Restaurant
