import {
  HeaderHome,
  HeaderHomeContainer,
  HeaderProd,
  HeaderProdContainer
} from './styles'

import logo from '../../assets/image/logo.svg'

type Props = {
  headerHome: boolean
}

const Header = ({ headerHome }: Props) => {
  return (
    <>
      <div>
        {headerHome ? (
          <HeaderHome>
            <div className="container">
              <HeaderHomeContainer>
                <img src={logo} alt="efood" />
                <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
              </HeaderHomeContainer>
            </div>
          </HeaderHome>
        ) : (
          <HeaderProd>
            <div className="container">
              <HeaderProdContainer>
                <p>Restaurantes</p>
                <img src={logo} alt="efood" />
                <p>0 produto(s) no carrinho</p>
              </HeaderProdContainer>
            </div>
          </HeaderProd>
        )}
      </div>
    </>
  )
}

export default Header
