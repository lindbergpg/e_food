import { useEffect, useState } from 'react'

import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'

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
  const [restaurants, setRestaurants] = useState<RestaurantApi[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header headerHome={true} />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
