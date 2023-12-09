import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Presentation from '../../components/Presentation'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { RestaurantApi } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, getRestaurant] = useState<RestaurantApi>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => getRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header headerHome={false} />
      <Presentation
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
        capa={restaurant.capa}
      />
      <ProductsList key={restaurant.id} items={restaurant.cardapio} />
    </>
  )
}

export default Profile
