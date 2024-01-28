import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/image/logo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

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
          <S.HeaderHome>
            <div className="container">
              <S.HeaderHomeContainer>
                <S.LinkHome to="/">
                  <h1>
                    <img src={logo} alt="efood" />
                  </h1>
                </S.LinkHome>
                <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
              </S.HeaderHomeContainer>
            </div>
          </S.HeaderHome>
        ) : (
          <S.HeaderProd>
            <div className="container">
              <S.HeaderProdContainer>
                <p>Restaurantes</p>
                <S.LinkHome to="/" title="Voltar para a página principal">
                  <h1>
                    <img src={logo} alt="efood" />
                  </h1>
                </S.LinkHome>
                <S.CartButton onClick={openCart}>
                  {items.length} produto(s) no carrinho
                </S.CartButton>
              </S.HeaderProdContainer>
            </div>
          </S.HeaderProd>
        )}
      </div>
    </>
  )
}

export default Header
