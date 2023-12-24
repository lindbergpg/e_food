import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantApi } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantApi[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<RestaurantApi, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenuQuery } = api
export default api
