import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    useGetRestaurantsQuery()

  return (
    <>
      <Header headerHome={true} />
      <RestaurantsList
        restaurants={restaurants}
        isLoading={isLoadingRestaurants}
      />
    </>
  )
}

export default Home
