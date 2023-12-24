import { useDispatch, useSelector } from 'react-redux'

import { ProductButton } from '../Product/styles'
import { CartContainer, Overlay, SideBar, CartItem, Amount } from './styles'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Amount>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Amount>
        <ProductButton>Continuar com a entrega</ProductButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
