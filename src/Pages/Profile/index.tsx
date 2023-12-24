import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Presentation from '../../components/Presentation'
import Header from '../../components/Header'
import { useGetMenuQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetMenuQuery(id!)

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
