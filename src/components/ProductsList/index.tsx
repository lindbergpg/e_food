import Product from '../Product'
import { List } from './styles'
import { CardapioItem } from '../../Pages/Home'

type Props = {
  items: CardapioItem[]
}

export const formatPrice = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ items }: Props) => {
  return (
    <div className="container">
      <>
        <List>
          {items.map((product) => (
            <Product
              key={product.id}
              foto={product.foto}
              nome={product.nome}
              descricao={product.descricao}
              descricaomodal={product.descricao}
              porcao={product.porcao}
              preco={formatPrice(product.preco)}
              id={product.id}
            />
          ))}
        </List>
      </>
    </div>
  )
}

export default ProductsList
