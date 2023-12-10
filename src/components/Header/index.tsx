import {
  HeaderHome,
  HeaderHomeContainer,
  HeaderProd,
  HeaderProdContainer,
  LinkHome
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
