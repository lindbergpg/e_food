import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'

import { useGetRestaurantsQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header headerHome={true} />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
