import Product from '../Product'
import { parseToBrl } from '../../Utils'

import { List } from './styles'
import Loader from '../Loader'

type Props = {
  items: CardapioItem[]
  isLoading: boolean
}

const ProductsList = ({ items, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <>
        <List>
          {items &&
            items.map((product) => (
              <Product
                product={product}
                key={product.id}
                foto={product.foto}
                nome={product.nome}
                descricao={product.descricao}
                descricaomodal={product.descricao}
                porcao={product.porcao}
                preco={parseToBrl(product.preco)}
                id={product.id}
              />
            ))}
        </List>
      </>
    </div>
  )
}

export default ProductsList
