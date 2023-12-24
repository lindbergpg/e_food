import styled from 'styled-components'
import { breackpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const FooterPag = styled.footer`
  background-color: ${colors.yellowLight};
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  p {
    width: 480px;
    text-align: center;
    font-size: 10px;
    font-weight: 400;

    @media (max-width: ${breackpoints.tablet}) {
      width: 90%;
    }
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  display: block;
`

export const SocialMedia = styled.ul`
  padding-top: 28px;
  padding-bottom: 80px;
  display: flex;

  li {
    margin: 0 4px;
  }
`
