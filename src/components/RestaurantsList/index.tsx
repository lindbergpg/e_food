import { RestaurantApi } from '../../Pages/Home'
import Restaurant from '../Restaurant'
import { List } from './styles'

import star from '../../assets/image/estrela.svg'

type Props = {
  restaurants: RestaurantApi[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
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

export default RestaurantsList
