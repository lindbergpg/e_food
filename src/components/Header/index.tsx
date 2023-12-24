import { useDispatch, useSelector } from 'react-redux'

import {
  HeaderHome,
  HeaderHomeContainer,
  HeaderProd,
  HeaderProdContainer,
  LinkHome,
  CartButton
} from './styles'

import logo from '../../assets/image/logo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  headerHome: boolean
}

const Header = ({ headerHome }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <div>
        {headerHome ? (
          <HeaderHome>
            <div className="container">
              <HeaderHomeContainer>
                <LinkHome to="/">
                  <img src={logo} alt="efood" />
                </LinkHome>
                <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
              </HeaderHomeContainer>
            </div>
          </HeaderHome>
        ) : (
          <HeaderProd>
            <div className="container">
              <HeaderProdContainer>
                <p>Restaurantes</p>
                <LinkHome to="/">
                  <img src={logo} alt="efood" />
                </LinkHome>
                <CartButton onClick={openCart}>
                  {items.length} produto(s) no carrinho
                </CartButton>
              </HeaderProdContainer>
            </div>
          </HeaderProd>
        )}
      </div>
    </>
  )
}

export default Header
