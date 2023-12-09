import styled from 'styled-components'
import { colors } from '../../styles'

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
  }
`

export const SocialMedia = styled.ul`
  padding-top: 32px;
  padding-bottom: 80px;
  display: flex;

  li {
    margin: 0 4px;
  }
`
