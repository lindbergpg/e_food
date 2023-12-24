import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderHome = styled.header`
  background-color: ${colors.yellowLight};
`

export const HeaderHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  height: 360px;

  h1 {
    width: 540px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  display: block;
`

export const HeaderProd = styled.div`
  background-color: ${colors.yellowLight};
`

export const HeaderProdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;

  p {
    font-size: 18px;
    font-weight: 900;
  }
`

export const CartButton = styled.a`
  font-size: 18px;
  font-weight: 900;
`
