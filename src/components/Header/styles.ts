import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderHome = styled.header`
  background-color: ${colors.yellowLight};
`

export const HeaderHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  h1 {
    width: 540px;
    text-align: center;
    padding-top: 140px;
    font-size: 36px;
    font-weight: 900;
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
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
