declare interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type RestaurantApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
