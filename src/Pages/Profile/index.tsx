import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Presentation from '../../components/Presentation'
import Header from '../../components/Header'
import { useGetMenuQuery } from '../../services/api'
import Loader from '../../components/Loader'

type MenuParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as MenuParams
  const { data: restaurant, isLoading: isLoadingMenu } = useGetMenuQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header headerHome={false} />
      <Presentation
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
        capa={restaurant.capa}
      />
      <ProductsList
        key={restaurant.id}
        items={restaurant.cardapio}
        isLoading={isLoadingMenu}
      />
    </>
  )
}

export default Profile
