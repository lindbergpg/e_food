import Restaurant from '../Restaurant'
import Loader from '../Loader'

import star from '../../assets/image/estrela.svg'

import { List } from './styles'

export type Props = {
  restaurants?: RestaurantApi[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <List>
        {restaurants &&
          restaurants.map((restaurant) => (
            <Restaurant
              id={restaurant.id}
              key={restaurant.id}
              titulo={restaurant.titulo}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
              estrela={star}
            />
          ))}
      </List>
    </div>
  )
}

export default RestaurantsList
