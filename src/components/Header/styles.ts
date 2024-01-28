import styled from 'styled-components'
import { breackpoints, colors } from '../../styles'
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

    @media (max-width: ${breackpoints.tablet}) {
      width: 90%;
      font-size: 24px;
    }
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  display: block;

  @media (max-width: ${breackpoints.tablet}) {
    margin: 16px 0;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderProd = styled.div`
  background-color: ${colors.yellowLight};
`

export const HeaderProdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;

  @media (max-width: ${breackpoints.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 18px;
    font-weight: 900;
  }
`

export const CartButton = styled.a`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`
